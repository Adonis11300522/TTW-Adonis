import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FollowpagePageRoutingModule } from './followpage-routing.module';

import { FollowpagePage } from './followpage.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FollowpagePageRoutingModule,
    TranslateModule
  ],
  declarations: [FollowpagePage]
})
export class FollowpagePageModule {}
