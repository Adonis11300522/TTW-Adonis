import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TicketqrcodePage } from './ticketqrcode.page';

const routes: Routes = [
  {
    path: '',
    component: TicketqrcodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicketqrcodePageRoutingModule {}
