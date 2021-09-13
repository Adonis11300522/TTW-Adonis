import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SinglepagePageRoutingModule } from './singlepage-routing.module';

import { SinglepagePage } from './singlepage.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SinglepagePageRoutingModule,
    TranslateModule
  ],
  declarations: [SinglepagePage]
})
export class SinglepagePageModule {}
