import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindfollowingPage } from './findfollowing.page';

const routes: Routes = [
  {
    path: '',
    component: FindfollowingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindfollowingPageRoutingModule {}
