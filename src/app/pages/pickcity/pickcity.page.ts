import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pickcity',
  templateUrl: './pickcity.page.html',
  styleUrls: ['./pickcity.page.scss'],
})
export class PickcityPage implements OnInit {

  constructor(
    private navCtrl:NavController
  ) { }

  ngOnInit() {
  }

  goLocate(){
    this.navCtrl.navigateRoot('locate1');
  }

}
