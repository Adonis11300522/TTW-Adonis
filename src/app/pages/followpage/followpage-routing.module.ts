import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FollowpagePage } from './followpage.page';

const routes: Routes = [
  {
    path: '',
    component: FollowpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FollowpagePageRoutingModule {}
