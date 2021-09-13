import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TicketPageRoutingModule } from './ticket-routing.module';

import { TicketPage } from './ticket.page';
import { NgxIonicImageViewerModule } from 'ngx-ionic-image-viewer';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TicketPageRoutingModule,
    NgxIonicImageViewerModule,
    TranslateModule
  ],
  declarations: [TicketPage]
})
export class TicketPageModule {}
