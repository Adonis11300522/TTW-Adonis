import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { SocialSharingPage } from "src/app/modals/social-sharing/social-sharing.page";
import { ApiService } from "src/app/services/api.service";
import { FirstService } from "src/app/services/first.service";
import { UtilService } from "src/app/services/util.service";

@Component({
  selector: "app-searchresult",
  templateUrl: "./searchresult.page.html",
  styleUrls: ["./searchresult.page.scss"],
})
export class SearchresultPage implements OnInit {
  data: any;
  cateGory: any;
  active: any;
  term: any;
  address: any;
  cat_id: any;
  constructor(
    private navCtrl: NavController,
    private dataservice: FirstService,
    private api: ApiService,
    private util: UtilService
  ) {}

  ngOnInit() {
    this.likes = this.dataservice.likes5();
    this.active = this.util.mood;
    
    this.address = this.api.address;
  }

  all() {
 
    this.active = "All";
    const fd = new FormData();
    fd.append("category", "All");
    fd.append("date", "All");
    fd.append("lat", this.api.lat ? this.api.lat : "");
    fd.append("lang", this.api.lang ? this.api.lang : "");
    this.api.postDataWithToken("search-event", fd).subscribe(
      (success: any) => {
        if (success.success) {
          this.util.dismissLoading();
          this.api.dataPass = success.data;
          this.data = this.api.dataPass;
          
        } else {
          this.util.dismissLoading();
        }
      },
      (err) => {
        
        this.util.dismissLoading();
      }
    );
  }

  cateReq(e) {
    this.n = false;
    this.cat_id = e;
    const fd = new FormData();
    fd.append("lat", this.api.lat ? this.api.lat : "");
    fd.append("lang", this.api.lang ? this.api.lang : "");
    fd.append("category_id", e.id);
    this.api.postData("event-from-category", fd).subscribe(
      (success: any) => {
        if (success.success) {
          this.active = e.name;
          this.data = success.data;
          this.util.dismissLoading();
        }
      },
      (err) => {
       
        this.util.dismissLoading();
      }
    );
  }
  lan: any;
  ionViewWillEnter() {
    this.api.profileUpdate.subscribe((d)=>{
      this.lan = localStorage.getItem("lan");
    })
    if (this.util.mood == "All") {
      this.all();
    } else {
      setTimeout(() => {
        this.data = this.api.dataPass;
        
        this.util.dismissLoading();
      }, 1000);
    }

    this.api.getData("category").subscribe(
      (success: any) => {
        if (success.success) {
          this.cateGory = success.data;
          this.util.dismissLoading();
        }
      },
      (err) => {
        
      }
    );
  }

  goBack() {
    this.navCtrl.back();
  }

  n: any;

  async socialSharing(item) {
    
    this.api.sharing = item;
    const modal = await this.util.modal.create({
      component: SocialSharingPage,
      cssClass: "social-sharing",
    });
    return await modal.present();
  }
  event(e) {
   
    if (this.n == true) {
      const fd = new FormData();
      fd.append("category_id", this.cat_id.id);
      fd.append("free_event", "1");
      fd.append("lat", this.api.lat ? this.api.lat : "");
      fd.append("lang", this.api.lang ? this.api.lang : "");
      this.api.postDataWithToken("search-free-event", fd).subscribe(
        (success: any) => {
          if (success.success) {
            this.data = success.data;
          }
        },
        (err) => {
         
        }
      );
    } else {
      const fd = new FormData();
      fd.append("category_id", this.cat_id.id);
      fd.append("free_event", "0");
      fd.append("lat", this.api.lat ? this.api.lat : "");
      fd.append("lang", this.api.lang ? this.api.lang : "");
      this.api.postDataWithToken("search-free-event", fd).subscribe(
        (success: any) => {
          if (success.success) {
            this.data = success.data;
          }
        },
        (err) => {
         
        }
      );
    }
  }

  like(id) {
    let token = localStorage.getItem("token")
      ? localStorage.getItem("token")
      : "";
    if (token == "") {
      this.util.presentToast("Login Required..");
    } else {
      this.util.presentLoading();
      this.api.postDataWithToken("add-favorite", { event_id: id }).subscribe(
        (success: any) => {
          if (success.success) {
            this.ionViewWillEnter();
            this.util.dismissLoading();
          }
        },
        (err) => {
         
          this.util.dismissLoading();
        }
      );
    }
  }

  goList(id) {
    this.navCtrl.navigateForward("ticket");
    localStorage.setItem("id", id);
  }

  goFilter() {
    this.navCtrl.navigateForward("tabs/tab2/page1");
  }
  goSearch() {
    this.navCtrl.navigateForward("searchin");
  }

  likes: any = [];
}
