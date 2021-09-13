import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { ApiService } from "src/app/services/api.service";
import { UtilService } from "src/app/services/util.service";
import { AddReviewPage } from "../add-review/add-review.page";
import { SigninPage } from "../signin/signin.page";
import { SingleDetailsPage } from "../single-details/single-details.page";

@Component({
  selector: "app-tickets",
  templateUrl: "./tickets.page.html",
  styleUrls: ["./tickets.page.scss"],
})
export class TicketsPage implements OnInit {
  data: any;
  currency;
  address: any;
  constructor(  
    private navCtrl: NavController,
    private api: ApiService,
    private util: UtilService
  ) {}

  async ngOnInit() {}
  async ionViewWillEnter() {
    this.address =JSON.parse(localStorage.getItem("selectedAddress"));
    this.currency = localStorage.getItem("currency_symbol")
    let token = localStorage.getItem("token")
      ? localStorage.getItem("token")
      : "";
    if (token == "") {
      localStorage.setItem("previous-request", "true");
      localStorage.setItem("previous-request-page", "tabs/tab3");
      let modal = await this.util.modal.create({
        component: SigninPage,
      });
     
      localStorage.setItem("isFrom", "other");
      modal.onDidDismiss().then((res) => {
        this.util.presentLoading();
        localStorage.removeItem("isFrom");
        this.api.profileUpdate.subscribe((d) => {
          if (d) {
            this.api.getDataWithToken("user-order").subscribe(
              (success: any) => {
                if (success.success) {

                  
                  this.data = success.data;
                  
                  this.util.dismissLoading();
                }
              },
              (err) => {
               
                this.util.dismissLoading();
              }
            );
          }
        });
      });
      return await modal.present();
    } else {
      this.util.presentLoading();
      this.api.profileUpdate.subscribe((d) => {
        this.api.getDataWithToken("user-order").subscribe(
          (success: any) => {
            if (success.success) {
              this.data = success.data;
              this.util.dismissLoading();
            
              
            }
          },
          (err) => {
          
            this.util.dismissLoading();
          }
        );
      });
    }
  }


  async reviewModal(item) {
    
    
    localStorage.setItem("itemDetail",JSON.stringify(item));
    const modal = await this.util.modal.create({
      component: AddReviewPage,
      cssClass: "add-review",
    });
    modal.onDidDismiss().then((res) => {
      this.ngOnInit();
    });
    return await modal.present();
  }



rate:any  =3;
  getUsersList(event){
    this.ionViewWillEnter();
    event.target.complete();
  }
 

  async singleDetailsView(item){
    localStorage.setItem("itemDetail",JSON.stringify(item));
    const modal = await this.util.modal.create({
      component:SingleDetailsPage,
      cssClass:"single-details"
    });
    return await modal.present();
  }

  select = "Upcoming";

  segmentChanged(event) {
   
    this.select = event.detail.value;
  }
}
