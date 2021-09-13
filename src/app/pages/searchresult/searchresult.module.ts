import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchresultPageRoutingModule } from './searchresult-routing.module';

import { SearchresultPage } from './searchresult.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxProgressiveImgLoaderModule } from 'ngx-progressive-img-loader';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchresultPageRoutingModule,
    Ng2SearchPipeModule,
    NgxProgressiveImgLoaderModule,
    TranslateModule
  ],
  declarations: [SearchresultPage]
})
export class SearchresultPageModule {}
