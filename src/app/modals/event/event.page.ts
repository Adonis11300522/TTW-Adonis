import { Component, OnInit } from "@angular/core";
import { NavController, ModalController } from "@ionic/angular";
import { ApiService } from "src/app/services/api.service";
import { UtilService } from "src/app/services/util.service";
import { SocialSharingPage } from "../social-sharing/social-sharing.page";

@Component({
  selector: "app-event",
  templateUrl: "./event.page.html",
  styleUrls: ["./event.page.scss"],
})
export class EventPage implements OnInit {
  modalController: any;
  email: string;

  constructor(
    private modal: ModalController,
    private navCtrl: NavController,
    private api: ApiService,
    private util: UtilService
  ) {}

  goReport() {
    this.navCtrl.navigateForward("reportevent2");
    this.modal.dismiss();
  }
  ngOnInit() {
    this.email = localStorage.getItem("emailOrganize");
  }

  close() {
    this.modal.dismiss();
  }

  async socialSharing() {
    const modal = await this.util.modal.create({
      component: SocialSharingPage,
      cssClass: "social-sharing",
    });
    return await modal.present();
  }

  cancel() {
    this.modal.dismiss();
  }

  mailToOrganizer() {
    this.modalController.dismiss();
  }
}
