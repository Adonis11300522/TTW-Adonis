import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Reportevent2PageRoutingModule } from './reportevent2-routing.module';

import { Reportevent2Page } from './reportevent2.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Reportevent2PageRoutingModule,
    TranslateModule
  ],
  declarations: [Reportevent2Page]
})
export class Reportevent2PageModule {}
