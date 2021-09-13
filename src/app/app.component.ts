import { Component, QueryList, ViewChildren } from '@angular/core';

import { Platform, NavController, IonRouterOutlet, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { Router } from '@angular/router';
import { ApiService } from './services/api.service';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate: any;
  address: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private navCtrl: NavController,
    private androidPermissions: AndroidPermissions,
    private geolocation: Geolocation,
    private locationAccuracy: LocationAccuracy,
    private oneSignal: OneSignal,
    private router: Router,
    private toastController: ToastController,
    private api: ApiService,
    private nativeGeocoder: NativeGeocoder,
    private translate: TranslateService
  ) {

    console.log = function () { };

    this.locationCoords = {
      latitude: "",
      longitude: "",
      accuracy: "",
      timestamp: "",
    };

    if (localStorage.getItem("lan")) {
      this.translate.setDefaultLang(localStorage.getItem("lan"));
      if (localStorage.getItem('lan') == "ar") {
        document.documentElement.dir = "rtl";
      }
      if (localStorage.getItem('lan') == "en") {
        document.documentElement.dir = "ltr";
      }
    } else {
      this.translate.setDefaultLang("en");
      localStorage.setItem("lan", "en");
      document.documentElement.dir = "ltr";
    }
    this.initializeApp();
    setTimeout(() => {
      this.checkGPSPermission();
    }, 50);
    let check = localStorage.getItem("isLoginFirst") ? localStorage.getItem("isLoginFirst") : "";
    if (check == "") {
      this.navCtrl.navigateRoot("pickcity");
    } else {
      this.navCtrl.navigateRoot("tabs/tab1");
    }
  }
  geoencoderOptions: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5,
  };

  getGeoencoder(latitude, longitude) {
    this.nativeGeocoder
      .reverseGeocode(latitude, longitude, this.geoencoderOptions)
      .then((result: NativeGeocoderResult[]) => {
        let data = {
          name: this.generateAddress(result[0].locality)
        }
        this.address = this.generateAddress(result[0].locality);
        localStorage.setItem("addressOfLast", result[0].locality);
        localStorage.setItem("selectedAddress", JSON.stringify(result[0].locality))
        localStorage.setItem("gene", this.address);
      })
      .catch((error: any) => { });
  }


  generateAddress(addressObj) {
    let obj = [];
    let address = "";
    for (let key in addressObj) {
      obj.push(addressObj[key]);
    }
    obj.reverse();
    for (let val in obj) {
      if (obj[val].length) address += obj[val] + ", ";
    }
    return address.slice(0, -2);
  }


  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.statusBar.backgroundColorByHexString("#FEC009");
      this.backButtonEvent();
    });


    setTimeout(() => {
      this.api.getData("setting").subscribe(
        (res: any) => {

          if (res.success) {
            localStorage.setItem("currency_symbol", res.data.currency_symbol);
            localStorage.setItem("currency", res.data.currency);

            if (this.platform.is("cordova")) {
              this.oneSignal.startInit(
                res.data.onesignal_app_id,
                res.data.onesignal_project_number
              );
              this.oneSignal
                .getIds()
                .then((ids) => (this.api.deviceToken = ids.userId));

              this.oneSignal.endInit();
            } else {
              this.api.deviceToken = null;
            }
          }
        },
        (err) => { }
      );
    }, 2000);
  }



  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;
  lastTimeBackPress = 0;
  timePeriodToExit = 2000;

  backButtonEvent() {
    this.platform.backButton.subscribe(async () => {
      this.routerOutlets.forEach((outlet: IonRouterOutlet) => {
        if (outlet && outlet.canGoBack()) {
          outlet.pop();
        } else if (
          this.router.url === "/tabs/tab1" ||
          this.router.url === "/signin" ||
          this.router.url === "/tabs/tab2" ||
          this.router.url === "/tabs/tab3" ||
          this.router.url === "/tabs/tab4" ||
          this.router.url === "tabs/tab5"
        ) {
          if (
            new Date().getTime() - this.lastTimeBackPress <
            this.timePeriodToExit
          ) {
            navigator["app"].exitApp();
          } else {
            this.showToast();
            this.lastTimeBackPress = new Date().getTime();
          }
        }
      });
    });
  }

  async showToast() {
    const toast = await this.toastController.create({
      message: "Press back to exit app",
      duration: 2000,
      mode: "md",
      cssClass: "my-toast",
    });
    toast.present();
  }


  checkGPSPermission() {
    this.androidPermissions
      .checkPermission(
        this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION
      )
      .then(
        (result) => {
          if (result.hasPermission) {
            //If having permission show 'Turn On GPS' dialogue
            this.askToTurnOnGPS();
          } else {
            //If not having permission ask for permission
            this.requestGPSPermission();
          }
        },
        (err) => {
          //alert(err);
        }
      );
  }

  requestGPSPermission() {
    this.locationAccuracy.canRequest().then((canRequest: boolean) => {
      if (canRequest) {

      } else {
        //Show 'GPS Permission Request' dialogue
        this.androidPermissions
          .requestPermission(
            this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION
          )
          .then(
            () => {
              // call method to turn on GPS
              this.askToTurnOnGPS();
            },
            (error) => {
              //Show alert if user click on 'No Thanks'
              alert(
                "requestPermission Error requesting location permissions " +
                error
              );
            }
          );
      }
    });
  }

  askToTurnOnGPS() {
    this.locationAccuracy
      .request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY)
      .then(
        () => {
          // When GPS Turned ON call method to get Accurate location coordinates
          this.getLocationCoordinates();
        },
        (error) =>
          alert(
            "Error requesting location permissions " + JSON.stringify(error)
          )
      );
  }
  locationCoords: any;

  getLocationCoordinates() {
    this.geolocation
      .getCurrentPosition()
      .then((resp) => {
        this.locationCoords.latitude = resp.coords.latitude;
        this.locationCoords.longitude = resp.coords.longitude;
        this.locationCoords.accuracy = resp.coords.accuracy;
        this.locationCoords.timestamp = resp.timestamp;


        localStorage.setItem(
          "curentLat",
          JSON.stringify(this.locationCoords.latitude)
        );
        localStorage.setItem(
          "curentLang",
          JSON.stringify(this.locationCoords.longitude)
        );
        localStorage.setItem("lat", JSON.stringify(this.locationCoords.latitude));
        localStorage.setItem("lang", JSON.stringify(this.locationCoords.longitude));
        this.getGeoencoder(this.locationCoords.latitude, this.locationCoords.longitude);
      })
      .catch((error) => {
        alert("Error getting location" + error);
      });
  }

}
