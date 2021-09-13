import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';
import { Locate1Page } from '../locate1/locate1.page';

@Component({
  selector: 'app-searchtab',
  templateUrl: './searchtab.page.html',
  styleUrls: ['./searchtab.page.scss'],
})
export class SearchtabPage implements OnInit {
  mood: any;
  go: any;
  latitude: any;
  longitude: any;
  anywhere:any = "Search anywhere"
  lan: string;
  constructor(
    private navCtrl:NavController,
    private api:ApiService,
    private util:UtilService
  ) { }

  ngOnInit() {  
   
  }

  ionViewWillEnter(){

    this.api.profileUpdate.subscribe((d)=>{
      this.lan = localStorage.getItem("lan")
    })
    this.go = this.util.go;  
    this.util.data.subscribe((d) => {
      this.mood = this.util.mood;  
      this.go = this.util.go;
     
      
    })
    
  }
  goNext(){
    this.navCtrl.navigateForward('goout');
  }

  goMood(){
    this.navCtrl.navigateForward('moodfor');
  }

  goSearchpage(){
    this.navCtrl.navigateForward('searchresult');
  }

  async search(){
    localStorage.setItem("isFromLoc","search");
    const modal = await this.util.modal.create({
      component:Locate1Page
    });
    modal.onDidDismiss().then((res) =>{
     
      this.latitude = res.data.geometry.location.lat();
      this.longitude = res.data.geometry.location.lng();
      this.api.lat = this.latitude;
      this.api.lang = this.longitude;
   
      this.anywhere = res.data.formatted_address;
      this.api.address = this.anywhere;
      localStorage.removeItem("isFromLoc");      
    })
    return await modal.present();
  }

  goResult(){
    this.util.presentLoading();
    const fd = new FormData();
    fd.append("category",this.util.id ? this.util.id : "All");
    fd.append("date",this.util.go);
    fd.append("lat",this.latitude ? this.latitude : "");
    fd.append("lang",this.longitude ? this.longitude : "")
    this.api.postDataWithToken("search-event",fd).subscribe((success:any) => {
      if(success.success){
        this.api.dataPass = success.data;
       
        this.util.dismissLoading();
        
      }else{
        this.util.dismissLoading();
      }
    }, err => {
      
      this.util.dismissLoading();
    })
    this.navCtrl.navigateForward('searchresult');
  }

}
