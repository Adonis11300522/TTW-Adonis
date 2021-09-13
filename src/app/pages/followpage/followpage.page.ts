import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { ApiService } from 'src/app/services/api.service';
import { FirstService } from 'src/app/services/first.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-followpage',
  templateUrl: './followpage.page.html',
  styleUrls: ['./followpage.page.scss'],
})
export class FollowpagePage implements OnInit {
  follow:any = [];
  err: any;
  data: any;
  isFrom:any;
  constructor(
    private navCtrl:NavController,
    private dataservice:FirstService,
    private util:UtilService,
    private api:ApiService
  ) { }

  ngOnInit() {
    this.isFrom = this.api.isFrom;
    this.getData();
    this.follow = this.dataservice.follow();
  }

  getData() :void{
    
    this.api.getDataWithToken("organization").subscribe((success:any) => {
      if(success.success){
        this.data = success.data;
       
      }
    }, err => {
      this.err = err.error.errors;
     
    })
  }

  goNext(){
    this.navCtrl.navigateForward("tabs/tab1")
  }

  event(e){
    this.util.presentLoading();
    this.api.postDataWithToken("add-following-list",{user_id:e}).subscribe((success:any) => {
      if(success.success){
        
        this.util.dismissLoading();
        this.getData();
      }
    }, err => {
      this.err = err.error.errors;
      this.util.dismissLoading();
    })
  }

}
