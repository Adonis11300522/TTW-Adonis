import { Component, OnInit } from "@angular/core";
import { ModalController, NavController } from "@ionic/angular";
import { TranslateService } from "@ngx-translate/core";

import { ApiService } from "src/app/services/api.service";
import { UtilService } from "src/app/services/util.service";
import { CouponPage } from "../coupon/coupon.page";
import { SigninPage } from "../signin/signin.page";

@Component({
  selector: "app-ticketdetails2",
  templateUrl: "./ticketdetails2.page.html",
  styleUrls: ["./ticketdetails2.page.scss"],
})
export class Ticketdetails2Page implements OnInit {
  isTrue: any = false;
  item: any;
  data: any;
  currency: string;
  qty: any = 1;
  totalPrice: any = 0;
  avai: string;
  discount: number;
  dataOfCoupon: any;
  finalTotal: any = 0;
  da: any;
  tdata: any;
  ticker_avalabel: number;

  constructor(
    private navCtrl: NavController,
    private api: ApiService,
    private util: UtilService,
    private modal: ModalController,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.translate.get("tick2").subscribe((d) => {
      this.tdata = d;
    })
    this.da = localStorage.getItem("first_name")
    this.avai = localStorage.getItem("ticketAvailable");
    this.api.getData("event-tickets/" + localStorage.getItem("ticketId")).subscribe((success: any) => {
      if (success.success) {
        this.data = success.data;
        this.currency = localStorage.getItem("currency_symbol");
        this.util.dismissLoading();
      }
    }, err => {

      this.util.dismissLoading();
    })
  }

  async ionViewWillEnter() {

    let token = localStorage.getItem("token")
      ? localStorage.getItem("token")
      : "";
    if (token == "") {
      localStorage.setItem("previous-request", "true");
      localStorage.setItem("previous-request-page", "ticketdetails2");
      let modal = await this.util.modal.create({
        component: SigninPage,
      });

      localStorage.setItem("isFrom", "other");
      modal.onDidDismiss().then((res) => {
        this.getData();
      })
      return await modal.present();
    } else {

      this.api.profileUpdate.subscribe((d) => {
        if (d) {
          this.getData();
        }
      })
    }
  }

  goNext() {
    this.util.presentLoading();
    let data = {
      event_id: localStorage.getItem("id"),
      coupon_code: this.coupons.coupon_code,
    };
    this.api.postDataWithToken("check-code", data).subscribe(
      (success: any) => {
        if (success.success) {

          this.api.coupon = JSON.parse(localStorage.getItem("couponsDetail"));
          this.util.presentToast(this.tdata.coupon)
          localStorage.setItem("price", this.item.price);
          this.util.dismissLoading();
        } else {
          this.util.dismissLoading();

          this.isTrue = true;
        }
      },
      (err) => {
        this.util.presentToast(this.tdata.some);
        this.util.dismissLoading();
      }
    );
  }
  coupons: any;
  async coupon() {
    const modal = await this.modal.create({
      component: CouponPage,
    });
    modal.onDidDismiss().then((res) => {

      this.coupons = res.data;

      if (this.coupons != null) {
        this.discount = this.totalPrice * this.coupons.discount / 100;
        this.api.coupon_id = this.coupons.id;
        this.api.discount = this.discount;
        this.totalPrice -= this.discount

      }
    });
    return await modal.present();
  }

  nextPay() {
    if (this.item.price == 0) {
      this.util.presentLoading();
      const fd = new FormData();
      fd.append("event_id", localStorage.getItem("id"));
      fd.append("ticket_id", localStorage.getItem("ticket_id"));
      fd.append("quantity", this.qty);
      fd.append("coupon_discount", "0");
      fd.append("payment", "0");
      fd.append("payment_type", "FREE");
      fd.append("tax", "0");
      this.api.postDataWithToken("create-order", fd).subscribe(
        (success: any) => {
          if (success.success) {
            this.navCtrl.navigateForward("tabs/tab1");
            this.util.presentToast(this.tdata.booking);
            this.util.dismissLoading();
          }
        },
        (err) => {

          this.util.presentToast(this.tdata.some);
          this.util.dismissLoading();
        }
      );
    } else {
      this.navCtrl.navigateForward("payment");
      localStorage.setItem("price", this.item.price);
      localStorage.setItem("prices", this.finalTotal);
      localStorage.setItem("tax", this.totalTax);
      localStorage.setItem("qty", this.qty)
    }
  }
  totalTax: any = 0;
  getData(): void {
    this.util.presentLoading();
    this.api
      .getData("ticket-detail/" + localStorage.getItem("ticket_id"))
      .subscribe(
        (success: any) => {
          if (success.success) {
            this.item = success.data;

            localStorage.setItem("price", this.item.price);
            localStorage.setItem("prices", this.item.price)
            this.totalPrice = this.item.price;
            this.util.dismissLoading();
            localStorage.setItem(
              "ticketAvailable",
              JSON.stringify(this.item.quantity - this.item.use_ticket)
            );

            this.api.getDataWithToken("order-tax/" + this.item.event_id).subscribe((success: any) => {
              if (success.success) {
                let dataofTax = [];
                this.dataOfCoupon = success.data;
                this.dataOfCoupon.forEach(element => {
                  this.totalTax += element.price;

                  let data = {
                    tax_id: element.id,
                    price: element.price
                  }
                  dataofTax.push(data);


                });

                this.totalPrice = this.totalPrice + this.totalTax;
                this.finalTotal = this.totalPrice

                localStorage.setItem("tax_data", JSON.stringify(dataofTax))
              }
            }, err => {

            })
          }
        },
        (err) => {

          this.util.dismissLoading();
        }
      );
  }

  next() {
    this.isTrue = false;
  }
  goBack() {
    this.navCtrl.back();
  }

  onClick() {
    if (this.qty < localStorage.getItem("ticketAvailable")) {
      if (this.qty !== this.item.ticket_per_order) {
        this.qty += 1;
        this.totalPrice = this.qty * JSON.parse(localStorage.getItem("price"));
        this.finalTotal = this.totalTax + this.totalPrice
        console.log("ADD", this.finalTotal);
        localStorage.setItem("prices", this.finalTotal);
        localStorage.setItem("qty", this.qty)
      } else {
        this.util.presentToast(this.tdata.more + this.item.ticket_per_order)
      }
    } else {
      this.util.presentToast(this.tdata.ticekN);
    }
  }
  
  onClick2() {
    if (this.qty !== 1) {
      this.qty--;
      this.totalPrice = this.qty * JSON.parse(localStorage.getItem("price"));
      this.finalTotal = this.totalTax + this.totalPrice;
      console.log("minus", this.finalTotal);
      localStorage.setItem("prices", this.finalTotal);
      localStorage.setItem("qty", this.qty)
    }
  }
}
