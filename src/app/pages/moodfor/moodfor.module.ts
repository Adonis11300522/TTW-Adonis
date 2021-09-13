import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoodforPageRoutingModule } from './moodfor-routing.module';

import { MoodforPage } from './moodfor.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoodforPageRoutingModule,
    TranslateModule
  ],
  declarations: [MoodforPage]
})
export class MoodforPageModule {}
