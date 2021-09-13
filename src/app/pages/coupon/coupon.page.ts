import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.page.html',
  styleUrls: ['./coupon.page.scss'],
})
export class CouponPage implements OnInit {
  data: any;
  constructor(private api:ApiService,private util:UtilService,private modla:ModalController) { }

  ngOnInit() {
    this.util.presentLoading();
    this.api.getDataWithToken("all-coupon").subscribe((success:any) => {
      if(success.success){
        this.data = success.data
        this.util.dismissLoading();
      }
    },err => {
      
      this.util.dismissLoading();
    })
  }

  close(){
    this.modla.dismiss();
  }

  checkId(item){
    let tData:any;
    this.util.translate.get("tick2").subscribe((d)=>{
      tData = d;
    })
    localStorage.setItem("couponsDetail",JSON.stringify(item));
    this.util.presentLoading();
    let data = {
      event_id: localStorage.getItem("id"),
      coupon_code: item.coupon_code,
    };
    this.api.postDataWithToken("check-code", data).subscribe(
      (success: any) => {
        if (success.success) {
          
          this.api.coupon = JSON.parse(localStorage.getItem("couponsDetail"));
          this.modla.dismiss(item);
          this.util.presentToast(tData.coupon)
          this.util.dismissLoading();
        }
        else if(success.success == false){
          this.util.presentToast(tData.cErr);
          this.util.dismissLoading();
          this.util.modal.dismiss();
        }
         else {
          this.util.dismissLoading();
        }
      },
      (err) => {
        this.util.presentToast(tData.some);
        this.modla.dismiss();
        this.util.dismissLoading();
      }
    );
  }

}
