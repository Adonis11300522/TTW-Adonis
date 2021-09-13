import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GooutPage } from './goout.page';

const routes: Routes = [
  {
    path: '',
    component: GooutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GooutPageRoutingModule {}
