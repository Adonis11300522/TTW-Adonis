import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PickcityPageRoutingModule } from './pickcity-routing.module';

import { PickcityPage } from './pickcity.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PickcityPageRoutingModule,
    TranslateModule
  ],
  declarations: [PickcityPage]
})
export class PickcityPageModule {}
