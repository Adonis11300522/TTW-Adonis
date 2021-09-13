import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoodforPage } from './moodfor.page';

const routes: Routes = [
  {
    path: '',
    component: MoodforPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoodforPageRoutingModule {}
