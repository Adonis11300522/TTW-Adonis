import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ticketdetails2Page } from './ticketdetails2.page';

const routes: Routes = [
  {
    path: '',
    component: Ticketdetails2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ticketdetails2PageRoutingModule {}
