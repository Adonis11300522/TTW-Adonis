import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Locate1PageRoutingModule } from './locate1-routing.module';

import { Locate1Page } from './locate1.page';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Locate1PageRoutingModule,
    GooglePlaceModule,
    TranslateModule
  ],
  declarations: [Locate1Page]
})
export class Locate1PageModule {}
