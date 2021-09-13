import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.page.html',
  styleUrls: ['./add-review.page.scss'],
})
export class AddReviewPage implements OnInit {
  message:string = '';
  profilee: any;
  language:any;
  ratingValue: any = 3;
  data: any;
  profile: any;
  constructor(private modal:ModalController,
    private api:ApiService,
    private util:UtilService) { }

  ngOnInit() {
    this.api.profileUpdate.subscribe((d) => {
      if(d){
        this.api.getDataWithToken("profile").subscribe((success:any) => {
          if(success.success){
            this.profile = success.data;
          }
        },(err:any) => {
          
        })
      }
    })

    this.data = JSON.parse(localStorage.getItem("itemDetail"));
    this.util.presentLoading();
    this.api.getDataWithToken('profile').subscribe((success:any) => {
      if(success.success){
        this.profilee = success.data;
        this.util.dismissLoading();
      }
    }, error => {
      this.util.dismissLoading();
    });
  }


  close(){
    let tData:any;
    this.util.translate.get("tick2").subscribe((d)=>{
      tData = d;
    })
    this.util.presentLoading();
    let data = {
     event_id:this.data.event.id,
     order_id:this.data.id,
     message:this.message,
     rate:this.ratingValue,
    }
    this.api.postDataWithToken('add-review',data).subscribe(async (success:any) => {
      if(success.success){
        this.modal.dismiss();
        this.util.dismissLoading();
        this.api.profileUpdate.next(true)
      }
    } , err => {
      
      this.modal.dismiss();
      this.util.presentToast(tData.some);
      this.util.dismissLoading();
    })
  }

  setRating(val) {
    this.ratingValue = val;
  }
  
}
