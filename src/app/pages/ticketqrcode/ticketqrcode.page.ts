import { Component, OnInit } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
@Component({
  selector: 'app-ticketqrcode',
  templateUrl: './ticketqrcode.page.html',
  styleUrls: ['./ticketqrcode.page.scss'],
})
export class TicketqrcodePage implements OnInit {
  item: any;
  orderData: any; 
  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;

  constructor() {
    this.item = JSON.parse(localStorage.getItem("itemDetail"));
    this.orderData = this.item.order_child;
  }

  ngOnInit() { }
}
