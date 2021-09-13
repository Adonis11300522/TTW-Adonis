import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FirstService } from 'src/app/services/first.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
tabs:any = [];
  constructor(
    private navCtrl:NavController,
    private dataService:FirstService
  ) { }

  ngOnInit() {
    this.tabs = this.dataService.tabs();
  }
}
