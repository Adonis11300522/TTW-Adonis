import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

import { ApiService } from 'src/app/services/api.service';
import { FirstService } from 'src/app/services/first.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  email: any = '';
  password: any = '';
  device_token: any = "";
  err: any;
  isFrom: string;
  constructor(
    private navCtrl: NavController,
    private dataservice: FirstService,
    private toastCtrl: ToastController,
    private api: ApiService,
    private util: UtilService
  ) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.isFrom = localStorage.getItem("isFrom");
  }

  goCreate() {
    this.util.modal.dismiss();
    this.navCtrl.navigateForward('signup');
  }
  gotab() {
    this.util.modal.dismiss();
    this.navCtrl.navigateForward("tabs/tab1");
  }

  goNext() {
    let tData: any;
    this.util.translate.get("errs").subscribe((d) => {
      tData = d;
    });
    this.device_token = this.api.deviceToken ? this.api.deviceToken : "I Hate"
    const formData = new FormData();
    formData.append("email", this.email);
    formData.append("password", this.password);
    formData.append("device_token", this.device_token);
    formData.append("provider", "LOCAL");
    this.util.presentLoading();
    this.api.postDataWithToken("login", formData).subscribe((success: any) => {
      console.log("dataa", success);
      this.util.dismissLoading();
      let hasPre = localStorage.getItem("previous-request") ? true : false;
      if (hasPre) {
        if (success.success == true) {
          let page = localStorage.getItem("previous-request-page");
          localStorage.setItem("token", success.data.token);
          this.util.nav.navigateRoot(page);
          this.util.modal.dismiss();
          this.util.dismissLoading();
          this.api.profileUpdate.next(true);
        } else if (success.success == false) {
          this.util.presentToast(success.msg);
          this.util.dismissLoading();
        } else {
          this.util.dismissLoading();
        }
      } else {
        if (success.success == true) {
          localStorage.setItem("token", success.data.token);
          this.api.profileUpdate.next(true);
          this.util.dismissLoading();
          this.navCtrl.navigateRoot("followpage");
          this.util.modal.dismiss();
        } else if (success.success == false) {
          this.util.presentToast(success.msg);
          this.util.dismissLoading();
          this.util.modal.dismiss();
        } else {
          this.api.profileUpdate.next(true);
          this.util.dismissLoading();
          this.util.modal.dismiss();
        }
      }
    }, err => {

      if (err.status == 422) {
        this.err = err.error.errors;

        if (this.err.password == "The password field is required.") {
          this.err.password = tData.password;
        }
        if (this.err.email == "The email field is required.") {
          this.err.email = tData.email;
        }
        if (this.err.email == "The email must be a valid email address.") {
          this.err.email = tData.emailEr;
        }
        if (this.err.password == "The password must be at least 6 characters.") {
          this.err.password = tData.passwordEr;
        }
      }
      this.util.dismissLoading();
    })
  }

}
