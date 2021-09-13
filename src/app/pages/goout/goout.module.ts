import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GooutPageRoutingModule } from './goout-routing.module';

import { GooutPage } from './goout.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GooutPageRoutingModule,
    TranslateModule
  ],
  declarations: [GooutPage]
})
export class GooutPageModule {}
