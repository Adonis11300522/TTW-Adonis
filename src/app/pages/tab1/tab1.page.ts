import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SocialSharingPage } from 'src/app/modals/social-sharing/social-sharing.page';
import { ApiService } from 'src/app/services/api.service';
import { FirstService } from 'src/app/services/first.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  event: any;
  latCoordinates: any;
  address: any;
  lan: any;
  lat: string;
  lang: string;
  constructor(
    private navCtrl: NavController,
    private dataservice: FirstService,
    private util: UtilService,
    private api: ApiService,
  ) {
    this.lat = localStorage.getItem("curentLat");
    this.lang = localStorage.getItem("curentLang");
    this.getData();
    localStorage.setItem("isLoginFirst", "true")
  }

  ngOnInit() {
    this.api.profileUpdate.subscribe((d) => {
      this.lan = localStorage.getItem("lan");
    })
    this.address = JSON.parse(localStorage.getItem("selectedAddress"));
    this.likes = this.dataservice.likes6();
    this.getData();
  }

  getData(): void {
    this.api.profileUpdate.subscribe((d) => {
      const latCoordinates = {
        lat: this.lat,
        lang: this.lang,
      }
      this.api.postDataWithToken("events", latCoordinates).subscribe((success: any) => {
        this.util.dismissLoading();
        if (success.success) {
          this.util.dismissLoading();
          this.event = success.data;
          console.log("event",this.event);
          
        }
      }, (err: any) => {
        this.util.dismissLoading();
      })
    })
  }

  like(id) {
    let tData: any;
    this.util.translate.get("ticketToast").subscribe((d) => {
      tData = d;
    })
    let token = localStorage.getItem("token") ? localStorage.getItem("token") : "";
    if (token == "") {
      this.util.presentToast(tData.notLogin);
    } else {
      this.util.presentLoading();
      this.api.postDataWithToken("add-favorite", { event_id: id }).subscribe((success: any) => {
        if (success.success) {
          this.util.dismissLoading();
          this.getData();
        }
      }, err => {

        this.util.dismissLoading();
      })
    }
  }


  async socialSharing(item) {

    this.api.sharing = item;
    console.log("item",item);
    
    const modal = await this.util.modal.create({
      component: SocialSharingPage,
      cssClass: "social-sharing",
    });
    return await modal.present();
  }


  getUsersList(event) {
    this.getData()
    event.target.complete();
  }




  goTicket() {
    this.navCtrl.navigateForward('ticket');
  }

  goList(id) {
    this.navCtrl.navigateForward("ticket");
    localStorage.setItem("id", id);
  }

  likes: any = [];

}
