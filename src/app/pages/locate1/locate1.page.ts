import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FirstService } from 'src/app/services/first.service';
import { LocationAccuracy } from "@ionic-native/location-accuracy/ngx";
import { AndroidPermissions } from "@ionic-native/android-permissions/ngx";
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { GooglePlaceDirective } from "ngx-google-places-autocomplete";
import { Address } from "ngx-google-places-autocomplete/objects/address";
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { UtilService } from 'src/app/services/util.service';
@Component({
  selector: 'app-locate1',
  templateUrl: './locate1.page.html',
  styleUrls: ['./locate1.page.scss'],
})
export class Locate1Page implements OnInit {
  @ViewChild("placesRef", { static: false }) placesRef: GooglePlaceDirective;
  @ViewChild("search", { static: false })
  locationCoords: any;
  public searchElementRef: ElementRef;
  latitude: number;
  longitude: number;
  address: string;
  get: any;
  isFrom: string;
  constructor(
    private navCtrl: NavController,
    private dataservice: FirstService,
    private androidPermissions: AndroidPermissions,
    private locationAccuracy: LocationAccuracy,
    private nativeGeocoder: NativeGeocoder,
    private geolocation: Geolocation,
    private util: UtilService
  ) {
    this.locationCoords = {
      latitude: "",
      longitude: "",
      accuracy: "",
      timestamp: "",
    };
  }

  ngOnInit() {
    this.locate = this.dataservice.locate1();
    this.get = JSON.parse(localStorage.getItem("dataOfAddress"));
    this.isFrom = localStorage.getItem("isFromLoc");
  }

  goGetstarted(i) {
    this.navCtrl.navigateForward('signin');

    localStorage.setItem("selectedAddress", JSON.stringify(i.name));
  }
  goBack() {
    if (this.isFrom == 'search') {
      this.util.modal.dismiss();
    } else {
      this.navCtrl.back();
    }
  }
  goCurrent() {
    this.navCtrl.navigateForward('locate2');
  }


  local: any = [];
  public handleAddressChange(address: Address) {
    console.log("add", address);

    if (this.isFrom == 'search') {
      this.util.modal.dismiss(address);
    } else {
      this.local = JSON.parse(localStorage.getItem("dataOfAddress")) ? JSON.parse(localStorage.getItem("dataOfAddress")) : [];
      this.latitude = address.geometry.location.lat();
      this.longitude = address.geometry.location.lng();
      console.log(this.latitude, this.longitude);
      this.getGeoencoder(this.latitude, this.longitude);
      localStorage.setItem("curentLat", JSON.stringify(this.latitude));
      localStorage.setItem("curentLang", JSON.stringify(this.longitude));
      localStorage.setItem("lat", JSON.stringify(this.latitude));
      localStorage.setItem("lang", JSON.stringify(this.longitude));
      let dataOfAddress = {
        name: address.name,
        address: address.formatted_address,
        lat: address.geometry.location.lat(),
        lang: address.geometry.location.lng()
      };

      localStorage.setItem("selectedAddress", JSON.stringify(dataOfAddress.name));
      this.local.push(dataOfAddress);
      setTimeout(() => {
        this.ngOnInit();
      }, 500);
      localStorage.setItem("dataOfAddress", JSON.stringify(this.local))
      localStorage.setItem("addressOfLast", dataOfAddress.address);
      localStorage.setItem("lat", JSON.stringify(this.latitude));
      localStorage.setItem("lang", JSON.stringify(this.longitude));
    }
  }

  geoencoderOptions: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5,
  };

  getLocationCoordinates() {
    this.geolocation
      .getCurrentPosition()
      .then((resp) => {
        this.locationCoords.latitude = resp.coords.latitude;
        this.locationCoords.longitude = resp.coords.longitude;
        this.locationCoords.accuracy = resp.coords.accuracy;
        this.locationCoords.timestamp = resp.timestamp;
        this.getGeoencoder(this.latitude, this.longitude);
        localStorage.setItem(
          "curentLat",
          JSON.stringify(this.locationCoords.latitude)
        );
        localStorage.setItem(
          "curentLang",
          JSON.stringify(this.locationCoords.longitude)
        );
        localStorage.setItem(
          "proLattt",
          JSON.stringify(this.locationCoords.latitude)
        );
        localStorage.setItem(
          "proLangg",
          JSON.stringify(this.locationCoords.longitude)
        );
        localStorage.setItem(
          "lat",
          JSON.stringify(this.locationCoords.latitude)
        );
        localStorage.setItem(
          "lang",
          JSON.stringify(this.locationCoords.longitude)
        );
        this.latitude = JSON.parse(this.locationCoords.latitude);
        this.longitude = JSON.parse(this.locationCoords.longitude);
      })
      .catch((error) => {
        alert("Error getting location" + error);
      });
  }

  detected() {
    this.navCtrl.navigateRoot("signin");
  }

  getGeoencoder(latitude, longitude) {
    this.nativeGeocoder
      .reverseGeocode(latitude, longitude, this.geoencoderOptions)
      .then((result: NativeGeocoderResult[]) => {
        this.address = this.generateAddress(result[0]);
        localStorage.setItem("addressOfLast", this.address);
        localStorage.setItem("gene", this.address);
      })
      .catch((error: any) => { });
  }

  //Return Comma saperated address
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
  private geoCoder;
  locationData: any = {};

  locate: any = []

  go() {
    this.util.nav.navigateForward("signin")
  }
}
