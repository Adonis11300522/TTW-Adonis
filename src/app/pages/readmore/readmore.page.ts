import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FirstService } from 'src/app/services/first.service';

@Component({
  selector: 'app-readmore',
  templateUrl: './readmore.page.html',
  styleUrls: ['./readmore.page.scss'],
})
export class ReadmorePage implements OnInit {

  constructor(
    private dataservice:FirstService,
    private navCtrl:NavController
  ) { }

  ngOnInit() {
    this.para  = localStorage.getItem("readMore");
  }

  goBack(){
    this.navCtrl.back();
  }


  para:any;
}
