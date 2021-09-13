import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { ApiService } from "src/app/services/api.service";
import { UtilService } from "src/app/services/util.service";
import { AddReviewPage } from "../add-review/add-review.page";

@Component({
  selector: "app-single-details",
  templateUrl: "./single-details.page.html",
  styleUrls: ["./single-details.page.scss"],
})
export class SingleDetailsPage implements OnInit {
  item: any;
  rate: any = "3";
  data: any;
  currency: any;
  profile: any;
  constructor(private api: ApiService, private util: UtilService, private nav: NavController) { }

  ngOnInit() {
    this.currency = localStorage.getItem("currency_symbol");
    this.api.profileUpdate.subscribe((d) => {
      this.item = JSON.parse(localStorage.getItem("itemDetail"));
     
    })
  }

  async reviewModal() {
    this.util.modal.dismiss();
    const modal = await this.util.modal.create({
      component: AddReviewPage,
      cssClass: "add-review",
    });
    modal.onDidDismiss().then((res) => {
      this.ngOnInit();
    });
    return await modal.present();
  }

  qrcode() {
    this.util.modal.dismiss();
    this.nav.navigateForward("/ticketqrcode");
  }
}
