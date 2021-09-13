
import { Injectable } from "@angular/core";
import { AlertController, LoadingController, ModalController, NavController, ToastController } from "@ionic/angular";
import { TranslateService } from "@ngx-translate/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UtilService {
  public isUpdateProfile = new BehaviorSubject(false);
  public data = new BehaviorSubject(false);
  isLoading = false;
  mood:any = "All";
  go:any = "Today";
  id:any;
  constructor(
    private toastController: ToastController,
    private loadingController: LoadingController,
    public nav:NavController,
    public modal:ModalController,
    public alertCtrl:AlertController,
    public translate:TranslateService
  ) {}

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      mode:'ios'
    });
    toast.present();
  }
  async presentLoading() {
    let t:any;
    this.translate.get("SelectLanguage").subscribe((d) =>{
      t = d;
    })
    this.isLoading = true;
    return await this.loadingController
      .create({
        message: t.l,
        mode: "md",
        cssClass:"load"
      })
      .then((a) => {
        a.present().then(() => {
          if (!this.isLoading) {
            a.dismiss().then(() => {});
          }
        });
      });
  }
  dismissLoading() {
    this.isLoading = false;
    setTimeout(() => {
      return this.loadingController.dismiss();
    }, 500);
  }


  
}



