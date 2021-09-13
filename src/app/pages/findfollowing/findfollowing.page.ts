import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { FirstService } from 'src/app/services/first.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-findfollowing',
  templateUrl: './findfollowing.page.html',
  styleUrls: ['./findfollowing.page.scss'],
})
export class FindfollowingPage implements OnInit {
  following:any = [];
  data: any;
  err: any;
  constructor(
    private navCtrl:NavController,
    private dataService:FirstService,
    private api:ApiService,
    private util:UtilService
  ) { }

  ngOnInit() {
    this.following = this.dataService.following();
    
    this.api.getDataWithToken("user-following").subscribe((success:any) => {
      if(success.success){
        this.data = success.data;
       
      }
    }, err => {
      
    })
  }
  goBack(){
    this.navCtrl.back();
  }


  event(e){
    this.util.presentLoading();
    this.api.postDataWithToken("add-following-list",{user_id:e}).subscribe((success:any) => {
      if(success.success){
        this.util.dismissLoading();
        this.ngOnInit();
      }
    }, err => {
      this.err = err.error.errors;
      this.util.dismissLoading();
    })
  }



}
