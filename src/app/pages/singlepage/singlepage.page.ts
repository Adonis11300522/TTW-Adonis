import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-singlepage',
  templateUrl: './singlepage.page.html',
  styleUrls: ['./singlepage.page.scss'],
})
export class SinglepagePage implements OnInit {

  constructor(
    private navCtrl:NavController
  ) { }

  ngOnInit() {
  }

  goNext(){
    this.navCtrl.navigateForward('findfollowing');
  }

}
