import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindfollowingPageRoutingModule } from './findfollowing-routing.module';

import { FindfollowingPage } from './findfollowing.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FindfollowingPageRoutingModule,
    TranslateModule
  ],
  declarations: [FindfollowingPage]
})
export class FindfollowingPageModule {}
