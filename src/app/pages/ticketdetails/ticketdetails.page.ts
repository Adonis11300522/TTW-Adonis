import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-ticketdetails',
  templateUrl: './ticketdetails.page.html',
  styleUrls: ['./ticketdetails.page.scss'],
}) 
export class TicketdetailsPage implements OnInit {
  currency:any;
  constructor(
    private navCtrl:NavController,
    private api:ApiService,
    private util:UtilService    
  ) { }
  data:any;
  da:any;
  ngOnInit() {
    this.da = localStorage.getItem("first_name")
    this.util.presentLoading();
    this.api.getData("event-tickets/" + localStorage.getItem("ticketId")).subscribe((success:any) => {
      if(success.success){
        this.data = success.data;
        this.currency = localStorage.getItem("currency_symbol");
        this.util.dismissLoading();
      }
    }, err => {
    
      this.util.dismissLoading();
    })
  }
  goBack(){
    this.navCtrl.navigateBack("ticket");
  }
  next(id){
    if(id.quantity == JSON.parse(id.use_ticket)){
         
    }else{
      this.navCtrl.navigateForward("ticketdetails2");
      localStorage.setItem("ticket_id",id.id)
    }
  }

}
