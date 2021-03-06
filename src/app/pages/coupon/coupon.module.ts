import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CouponPageRoutingModule } from './coupon-routing.module';

import { CouponPage } from './coupon.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CouponPageRoutingModule,
    TranslateModule
  ],
  declarations: [CouponPage]
})
export class CouponPageModule {}
