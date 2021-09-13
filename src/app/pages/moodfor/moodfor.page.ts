import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { FirstService } from 'src/app/services/first.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-moodfor',
  templateUrl: './moodfor.page.html',
  styleUrls: ['./moodfor.page.scss'],
})
export class MoodforPage implements OnInit {
  select: any = "All";
  data: any;

  constructor(
    private navCtrl:NavController,
    private api:ApiService,
    private util:UtilService
  ) { }
  ngOnInit() {
    this.util.presentLoading();
    this.api.getDataWithToken("category").subscribe((success:any) => {
      if(success.success){
        this.data=success.data;
        this.util.dismissLoading();
      }
    },err => {
      
      this.util.dismissLoading();
    })
  }

  goBack(){
    this.navCtrl.back();
  }


  event(r){
    this.select = r.name;
    this.util.id = r.id;
    this.util.mood = this.select;
    
    this.util.data.next(true);
  }
  goN(){
    this.navCtrl.navigateForward("tabs/tab2")
  }

}
