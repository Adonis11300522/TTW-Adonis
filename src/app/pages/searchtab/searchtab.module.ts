import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchtabPageRoutingModule } from './searchtab-routing.module';

import { SearchtabPage } from './searchtab.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchtabPageRoutingModule,
    TranslateModule,
    TranslateModule
  ],
  declarations: [SearchtabPage]
})
export class SearchtabPageModule {}
