import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchtabPage } from './searchtab.page';

const routes: Routes = [
  {
    path: '',
    component: SearchtabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchtabPageRoutingModule {}
