import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-donemodal',
  templateUrl: './donemodal.page.html',
  styleUrls: ['./donemodal.page.scss'],
})
export class DonemodalPage implements OnInit {
  select: any = "Fraudulent of Unauthorized Event";

  constructor(
    private modal:ModalController,
    private navCtrl:NavController
  ) { }

  ngOnInit() {
  }

  dismissmodel(){
    this.modal.dismiss(this.select);
  }

  data:any = [
    {
      label:"Choose One"
    },
    {
      label:"Canceled Event",
    },
    {
      label:"Copyright or Trademark Infringement",
    },
    {
      label:"Fraudulent of Unauthorized Event"
    },
    {
      label:"Offensive or Illegal Event"
    },
    {
      label:"Spam"
    },
    {
      label:"Other"
    }
  ];


  event(item){
    console.log(item);
    this.select = item;    
  }

  goReport(){
   
    this.modal.dismiss(this.select);
  }

}
