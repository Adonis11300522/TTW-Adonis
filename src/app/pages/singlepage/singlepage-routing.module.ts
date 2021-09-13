import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SinglepagePage } from './singlepage.page';

const routes: Routes = [
  {
    path: '',
    component: SinglepagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SinglepagePageRoutingModule {}
