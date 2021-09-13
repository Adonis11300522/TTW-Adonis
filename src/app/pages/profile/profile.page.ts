import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, Platform } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { FirstService } from 'src/app/services/first.service';
import { UtilService } from 'src/app/services/util.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SigninPage } from '../signin/signin.page';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  emailOfUser:any = '';
  firstofname:any = '';
  lastofname:any = '';
  passofpass:any = '';
  profile: any;
  setting: any;
  address: any;
  addresss: string;
  selectedLanguage:string;
  constructor(
    private navCtrl:NavController,
    public alertController:AlertController,
    private dataservice:FirstService,
    public api:ApiService,
    public util:UtilService,
    public iab:InAppBrowser,
    private platform:Platform,
    private modal:ModalController,
    private translate:TranslateService
  ) {
    this.emailOfUser = localStorage.getItem('email');
    this.firstofname = localStorage.getItem('firstname');
    this.lastofname = localStorage.getItem('lastname');
    this.passofpass = localStorage.getItem('password');

    this.translate.get("SelectLanguage.label").subscribe((data: any) => {
      this.option.header = data;
    })
   }
   option: any = {
    header: 'Language',
  }
  language:any = 'en'
  ngOnInit() {
    this.api.profileUpdate.subscribe((d)=>{
      this.language = localStorage.getItem('lan');
    })
    this.address = JSON.parse(localStorage.getItem("selectedAddress"));
    this.vr = this.dataservice.ve();
    this.item1 = this.dataservice.item1();
    this.item2 = this.dataservice.item2();
    this.api.getData("setting").subscribe((success:any) => {
      if(success.success){
        this.setting = success.data;
      }
    }, err => {
      
    })
  }
  languageChanged(){
   
    this.modal.dismiss();
    this.translate.setDefaultLang(this.language);
    localStorage.setItem('lan', this.language);
    if (localStorage.getItem('lan') == "ar") {
      document.documentElement.dir = "rtl";
      this.api.profileUpdate.next(true);
    }
    if (localStorage.getItem('lan') == "en") {
      document.documentElement.dir = "ltr";
      this.api.profileUpdate.next(true);
    }
  }

  async ionViewWillEnter(){
    this.addresss = JSON.parse(localStorage.getItem("selectedAddress"))
    let token = localStorage.getItem("token")
    ? localStorage.getItem("token")
    : "";
  if (token == "") {
    localStorage.setItem("previous-request", "true");
    localStorage.setItem("previous-request-page", "tabs/tab5");
    let modal = await this.util.modal.create({
      component: SigninPage,
    });
 
    localStorage.setItem("isFrom","other");
    modal.onDidDismiss().then((res) => {
      localStorage.removeItem("isFrom");
      this.api.profileUpdate.subscribe((d) => {
        this.util.presentLoading();
        if(d){
          this.api.getDataWithToken("profile").subscribe((success:any) => {
            if(success.success){
              this.profile = success.data;
              this.util.dismissLoading();
            }
          }, err => {
            
            this.util.dismissLoading();
          })
        }
      })
    })    
    return await modal.present();
  }else{
    this.util.presentLoading();
    this.api.profileUpdate.subscribe((d) => {
      if(d){
        this.api.getDataWithToken("profile").subscribe((success:any) => {
          if(success.success){
            this.profile = success.data;
            this.util.dismissLoading();
          }
        }, err => {
          
          this.util.dismissLoading();
        })
      }
    })
  }
  }

  goSingle(){
    this.api.isFrom = "profile"
    this.navCtrl.navigateForward('followpage');
  }

  find(){
    this.navCtrl.navigateForward("findfollowing")
  }


  goToPolicy(){
    this.iab.create(this.setting.privacy_policy,'_self');
  }
  goToTerms(){
    this.iab.create(this.setting.terms_services,'_self');
  }
  goToCookie(){
    this.iab.create(this.setting.cookie_policy,'_self');
  }
  goTohelp(){
    this.iab.create(this.setting.help_center,'_self');
  }
  goToacknowledgement(){
    this.iab.create(this.setting.acknowledgement,'_self');
  }
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Are you sure!',
      message: '<ion-text>you will be logged out</ion-text>',
      cssClass:'alert-style',
      mode:'ios',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'alert',
          handler: (blah) => {
            
          }
        }, {
          text: 'OK',
          role:'OK',
          cssClass: 'alert',
          handler: () => {
            
            this.exit();
          }
        }
      ]
    });
    await alert.present();
  }
  backButtonSubscription;
  exit(){
    this.navCtrl.navigateForward("/signin")
    localStorage.removeItem("previous-request-page");
    localStorage.removeItem("emailOrganize");
    localStorage.removeItem("itemDetail");
    localStorage.removeItem("readMore");
    localStorage.removeItem("price");
    localStorage.removeItem("token");
    localStorage.removeItem("prices");
  }

  goEdit(){
    this.navCtrl.navigateForward('editprofile');
  }

  goNoti(){
    this.navCtrl.navigateForward('notificationcentre');
  }

  vr:any = []

  item1:any = []

  item2:any = []


}
