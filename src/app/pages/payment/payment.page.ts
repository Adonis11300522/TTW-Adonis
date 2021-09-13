import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ICreateOrderRequest, IPayPalConfig } from 'ngx-paypal';
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';
import { Stripe } from '@ionic-native/stripe/ngx';
import { InAppBrowser, InAppBrowserObject } from '@ionic-native/in-app-browser/ngx';
import { TranslateService } from '@ngx-translate/core';
declare var RazorpayCheckout: any;
@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  qty: any = 1;
  totalPrice: any = 0;
  avai: string;
  data: any;
  dataTrue: boolean = true;
  setting: any;
  stripeData = {
    number: "",
    expMonth: 0,
    expYear: 0,
    cvc: "",
  };
  tdata: any;
  razor: any;
  public payPalConfig?: IPayPalConfig;
  public buttonIcon = "../../../assets/icon/icon.svg";
  currency: string;
  isnum: boolean;
  constructor(private api: ApiService, private util: UtilService, private nav: NavController, private stripe: Stripe, private inapp: InAppBrowser, private translate: TranslateService) { }

  ngOnInit() {
    this.translate.get("paymentToast").subscribe((d) => {
      this.tdata = d;
    })
    this.currency = localStorage.getItem("currency_symbol");
    this.totalPrice = localStorage.getItem("prices");
    this.avai = localStorage.getItem("ticketAvailable");
    this.api.getData("setting").subscribe((success: any) => {
      if (success.success) {
        this.setting = success.data;
      }
    }, err => {
      
    })
  }

  select: any = "Cash On Delivery";

  payment_div: any = [
    {
      name: "Paypal",
      img: "../../../assets/payment/paypal.png",
    },
    {
      name: "Razorpay",
      img: "../../../assets/payment/razor.png",
    },
    {
      name: "Stripe",
      img: "../../../assets/payment/stripe.png",
    },
    {
      img: "../../../assets/payment/payment-method.svg",
      name: "Cash On Delivery",
    },
    {
      img: "../../../assets/share/flutterwave.png",
      name: "Flutterwave"
    }
  ];

  payWithRazor() {

    var options = {
      description: "Credits towards consultation",
      image: "https://i.imgur.com/3g7nmJC.png",
      currency: this.setting.currency,
      key: this.setting.razorPublishKey,
      amount: this.totalPrice * 100,
      name: "User",
      theme: {
        color: "#2C69A5",
      },
      modal: {
        ondismiss: function () {
          alert("dismissed");
        },
      },
    };

    var successCallback = (payment_id) => {
      alert("payment_id: " + payment_id);
      localStorage.setItem("paymentRazor", payment_id);

      this.util.presentLoading();
      const fd = new FormData();
      fd.append("event_id", localStorage.getItem("id"));
      fd.append("coupon_id", this.api.coupon_id ? this.api.coupon_id : "")
      fd.append("ticket_id", localStorage.getItem("ticket_id"));
      fd.append("quantity", localStorage.getItem("qty"));
      fd.append("coupon_discount", this.api.discount);
      fd.append("payment", this.totalPrice);
      fd.append("tax", localStorage.getItem("tax"))
      fd.append("payment_type", "RAZOR");
      fd.append("payment_token", payment_id);;
      fd.append("tax_data", localStorage.getItem("tax_data"));
      this.api.postDataWithToken("create-order", fd).subscribe((success: any) => {
        if (success.success) {
          this.nav.navigateForward("tabs/tab1")
          this.util.presentToast(this.tdata.completed);
          this.util.dismissLoading();
        }
      }, err => {
        
        this.util.dismissLoading();
      })

    };

    var cancelCallback = (error) => {
      this.util.presentToast(this.tdata.sry);
    };

    RazorpayCheckout.open(options, successCallback, cancelCallback);

  }

  paypal: any = false;

  item(item) {
    this.select = item;

    if (this.select == "Paypal") {
      if (this.setting.paypal == 1) {
        this.initConfig(this.totalPrice, "User");
        this.paypal = true
      } else {
        this.util.presentToast(this.tdata.notPossible);
        this.paypal = false;
      }
    } else if (this.select == "Razorpay") {
      this.dataTrue = true;
      this.paypal = false;
    } else {
      this.dataTrue = true;
      this.paypal = false;
    }
  }

  checkbtn: any = false;

  cashPay() {
    this.util.presentLoading();
    const fd = new FormData();
    fd.append("event_id", localStorage.getItem("id"));
    fd.append("coupon_id", this.api.coupon_id ? this.api.coupon_id : "")
    fd.append("ticket_id", localStorage.getItem("ticket_id"));
    fd.append("quantity", localStorage.getItem("qty"));
    fd.append("coupon_discount", this.api.discount);
    fd.append("payment", this.totalPrice);
    fd.append("payment_type", "LOCAL");
    fd.append("tax", localStorage.getItem("tax"));
    fd.append("tax_data", localStorage.getItem("tax_data"));
    this.api.postDataWithToken("create-order", fd).subscribe((success: any) => {
      if (success.success) {
        this.nav.navigateForward("tabs/tab1")
        this.util.presentToast(this.tdata.completed);
        this.util.dismissLoading();
      }
    }, err => {
     
      this.util.dismissLoading();
    })
  }

  getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  kakaoCode: any = "";

  flutterWave() {
    this.util.presentLoading();
    const fd = new FormData();
    fd.append("event_id", localStorage.getItem("id"));
    fd.append("coupon_id", this.api.coupon_id ? this.api.coupon_id : "")
    fd.append("ticket_id", localStorage.getItem("ticket_id"));
    fd.append("quantity", localStorage.getItem("qty"));
    fd.append("coupon_discount", this.api.discount);
    fd.append("payment", this.totalPrice);
    fd.append("payment_type", "FLUTTERWAVE");
    fd.append("tax", localStorage.getItem("tax"));
    fd.append("tax_data", localStorage.getItem("tax_data"));
    this.api.postDataWithToken("create-order", fd).subscribe((success: any) => {
      if (success.success) {
        

        const browser: InAppBrowserObject = this.inapp.create(
          success.data.redirect_url,
          "_blank"
        );
        browser.on("loadstart").subscribe((e) => {
         

          
          const code = this.getParameterByName("code", e.url);
          

          var parts = e.url.split("/");
          var lastSegment = parts.pop() || parts.pop(); // handle potential trailing slash

       
          this.isnum = /^\d+$/.test(lastSegment);
          
          if (this.isnum == false) {
            browser.close();
            this.nav.navigateRoot("tabs/tab3")
            this.util.presentToast(this.tdata.done);
          }
        });
        this.util.dismissLoading();
      }
    }, err => {
     
      this.util.dismissLoading();
    })
  }

  private initConfig(price, name): void {
    this.payPalConfig = {
      currency: this.setting.currency,
      clientId: this.setting.paypalClientId,
      createOrderOnClient: (data) =>
        <ICreateOrderRequest>{
          intent: "CAPTURE",
          purchase_units: [
            {
              amount: {
                currency_code: this.setting.currency,
                value: price,
                breakdown: {
                  item_total: {
                    currency_code: this.setting.currency,
                    value: price,
                  },
                },
              },
              items: [
                {
                  name,
                  quantity: "1",
                  category: "DIGITAL_GOODS",
                  unit_amount: {
                    currency_code: this.setting.currency,
                    value: price,
                  },
                },
              ],
            },
          ],
        },
      advanced: {
        commit: "true",
      },
      style: {
        label: "paypal",
        layout: "vertical",
      },
      onApprove: (data, actions) => {
      
        actions.order.get().then((details) => {
         
        });
      },
      onClientAuthorization: (data) => {
       
        this.util.presentToast(this.tdata.completed)
      
        this.util.presentLoading();
        const fd = new FormData();
        fd.append("event_id", localStorage.getItem("id"));
        fd.append("coupon_id", this.api.coupon_id ? this.api.coupon_id : "")
        fd.append("ticket_id", localStorage.getItem("ticket_id"));
        fd.append("quantity", localStorage.getItem("qty"));
        fd.append("coupon_discount", this.api.discount);
        fd.append("payment", this.totalPrice);
        fd.append("payment_type", "PAYPAL");
        fd.append("tax", localStorage.getItem("tax"))
        fd.append("payment_token", data.id);;
        fd.append("tax_data", localStorage.getItem("tax_data"));
        this.api.postDataWithToken("create-order", fd).subscribe((success: any) => {
          if (success.success) {
            this.nav.navigateForward("tabs/tab1")
            this.util.presentToast(this.tdata.completed);
            this.util.dismissLoading();
          }
        }, err => {
          
          this.util.dismissLoading();
        })
      },
      onCancel: (data, actions) => {
       
        this.util.presentToast(this.tdata.canceled)
      },
      onError: (err) => {
      
      },
      onClick: (data, actions) => {
      
      },
    };
  }

  paywithstripe() {
    this.util.presentLoading();
    this.checkbtn = true;
    this.stripe.setPublishableKey(this.setting.stripePublicKey);
    this.stripe
      .createCardToken(this.stripeData)
      .then((result) => {

        const fd = new FormData();
        fd.append("event_id", localStorage.getItem("id"));
        fd.append("coupon_id", this.api.coupon_id ? this.api.coupon_id : "")
        fd.append("ticket_id", localStorage.getItem("ticket_id"));
        fd.append("quantity", localStorage.getItem("qty"));
        fd.append("coupon_discount", this.api.discount);
        fd.append("payment", this.totalPrice);
        fd.append("payment_type", "STRIPE");
        fd.append("tax", localStorage.getItem("tax"))
        fd.append("payment_token", result.id);;
        fd.append("tax_data", localStorage.getItem("tax_data"));
        this.api.postDataWithToken("create-order", fd).subscribe((success: any) => {
          if (success.success) {
            this.nav.navigateForward("tabs/tab1")
            this.util.presentToast(this.tdata.completed);
            this.util.dismissLoading();
          }
        }, err => {
         
          this.util.dismissLoading();
        })
      })
      .catch((error) => {
        this.util.presentToast(error);
        this.checkbtn = false;
        this.util.dismissLoading();
      });
  }

  done() {
    if (this.select == 'Cash On Delivery') {
      this.cashPay();
    } else if (this.select == 'Paypal') {
      if (this.setting.paypal == 1) {
      } else {
        this.util.presentToast(this.tdata.notPossible)
      }
    } else if (this.select == 'Stripe') {
      if (this.setting.stripe == 1) {
        this.paywithstripe();
      } else {
        this.util.presentToast(this.tdata.notPossible)
      }
    } else if (this.select == 'Razorpay') {
      if (this.setting.razor == 1) {
        this.payWithRazor();
      } else {
        this.util.presentToast(this.tdata.notPossible)
      }
    }
    else if (this.select == 'Flutterwave') {
      if (this.setting.flutterwave == 1) {
        this.flutterWave();
      } else {
        this.util.presentToast(this.tdata.notPossible)
      }
    }
  }

  ionViewWillLeave() {
    localStorage.removeItem("tax");
    localStorage.removeItem("tax_data");
    localStorage.removeItem("qty")
  }
}
