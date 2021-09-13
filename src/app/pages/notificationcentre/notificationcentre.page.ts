import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-notificationcentre',
  templateUrl: './notificationcentre.page.html',
  styleUrls: ['./notificationcentre.page.scss'],
})
export class NotificationcentrePage implements OnInit {
  data: any;
  lan:any;
  constructor(
    private navCtrl:NavController,
    private api:ApiService,
    private util:UtilService,
    protected translate:TranslateService
  ) { }

  ngOnInit() {
    this.lan = localStorage.getItem("lan");
    this.util.presentLoading();
    this.api.getDataWithToken("user-notification").subscribe((success:any) => {
        if(success.success){
          this.data = success.data;
          this.util.dismissLoading();
        }
    }, err => {
      this.util.dismissLoading();
     
    })
  }

  async onClick(){
    let t:any;
    this.translate.get("alertPopup").subscribe((d) =>{
      t=d;
    })
    const alert = await this.util.alertCtrl.create({
      header: t.alert,
      message: t.are,
      buttons: [
        {
          text:t.text,
          handler:() =>{
            this.del();
          }
        }
      ],
      cssClass:"custom-alert",
      mode:"md"
    });
    await alert.present();
  }

  del(){
    this.util.presentLoading();
    this.api.getDataWithToken("clear-notification").subscribe((success:any) => {
      if(success.success){
        this.ngOnInit();
        this.util.dismissLoading();
      }
    },err=> {
     
      this.util.dismissLoading();
    })
  }


  goBack(){
    this.navCtrl.back();
  }

}
