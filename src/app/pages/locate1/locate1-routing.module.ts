import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Locate1Page } from './locate1.page';

const routes: Routes = [
  {
    path: '',
    component: Locate1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Locate1PageRoutingModule {}
