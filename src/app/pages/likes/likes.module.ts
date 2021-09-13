import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LikesPageRoutingModule } from './likes-routing.module';

import { LikesPage } from './likes.page';
import { NgxProgressiveImgLoaderModule } from 'ngx-progressive-img-loader';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LikesPageRoutingModule,
    NgxProgressiveImgLoaderModule,
    TranslateModule
  ],
  declarations: [LikesPage]
})
export class LikesPageModule {}
