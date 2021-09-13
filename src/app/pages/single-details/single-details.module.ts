import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingleDetailsPageRoutingModule } from './single-details-routing.module';

import { SingleDetailsPage } from './single-details.page';
import { NgxProgressiveImgLoaderModule } from 'ngx-progressive-img-loader';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingleDetailsPageRoutingModule,
    NgxProgressiveImgLoaderModule,
    TranslateModule
  ],
  declarations: [SingleDetailsPage]
})
export class SingleDetailsPageModule {}
