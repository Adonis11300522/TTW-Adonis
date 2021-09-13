import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PickcityPage } from './pickcity.page';

const routes: Routes = [
  {
    path: '',
    component: PickcityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PickcityPageRoutingModule {}
