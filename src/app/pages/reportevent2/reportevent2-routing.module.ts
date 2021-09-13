import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Reportevent2Page } from './reportevent2.page';

const routes: Routes = [
  {
    path: '',
    component: Reportevent2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Reportevent2PageRoutingModule {}
