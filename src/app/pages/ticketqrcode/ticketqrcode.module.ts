import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TicketqrcodePageRoutingModule } from './ticketqrcode-routing.module';

import { TicketqrcodePage } from './ticketqrcode.page';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TicketqrcodePageRoutingModule,
    NgxQRCodeModule,
    TranslateModule
  ],
  declarations: [TicketqrcodePage]
})
export class TicketqrcodePageModule {}
