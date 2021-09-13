import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificationcentrePage } from './notificationcentre.page';

const routes: Routes = [
  {
    path: '',
    component: NotificationcentrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificationcentrePageRoutingModule {}
