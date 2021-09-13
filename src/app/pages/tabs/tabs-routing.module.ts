import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,

    children: [
      {
        path: 'tab1',
        children:[
          {
            path: '',
            loadChildren: () => import('../tab1/tab1.module').then( m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: 'tab2',
        children:[
          {
            path: '',
            loadChildren: () => import('../searchtab/searchtab.module').then( m => m.SearchtabPageModule)
          },
       
        ]
      },
      {
        path: 'tab3',
        children:[
          {
            path: '',
            loadChildren: () => import('../tickets/tickets.module').then( m => m.TicketsPageModule)
          },
        
        ]
      },
      {
        path: 'tab4',
        children:[
          {
            path: '',
            loadChildren: () => import('../likes/likes.module').then( m => m.LikesPageModule)
          },
        
        ]
      },
      {
        path: 'tab5',
        children:[
          {
            path: '',
            loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
          },
         
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
