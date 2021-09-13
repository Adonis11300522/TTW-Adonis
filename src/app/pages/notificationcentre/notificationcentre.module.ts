import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificationcentrePageRoutingModule } from './notificationcentre-routing.module';

import { NotificationcentrePage } from './notificationcentre.page';
import { NgxProgressiveImgLoaderModule } from 'ngx-progressive-img-loader';
import {TimeAgoPipe} from 'time-ago-pipe';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotificationcentrePageRoutingModule,
    NgxProgressiveImgLoaderModule,
    TranslateModule
  ],
  declarations: [NotificationcentrePage,TimeAgoPipe]
})
export class NotificationcentrePageModule {}
