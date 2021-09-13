import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TicketdetailsPageRoutingModule } from './ticketdetails-routing.module';

import { TicketdetailsPage } from './ticketdetails.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TicketdetailsPageRoutingModule,
    TranslateModule
  ],
  declarations: [TicketdetailsPage]
})
export class TicketdetailsPageModule {}
