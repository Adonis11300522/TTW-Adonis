import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ticketdetails2PageRoutingModule } from './ticketdetails2-routing.module';

import { Ticketdetails2Page } from './ticketdetails2.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ticketdetails2PageRoutingModule,
    TranslateModule
  ],
  declarations: [Ticketdetails2Page]
})
export class Ticketdetails2PageModule {}
