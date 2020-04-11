import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolutionsPage } from './solutions.page';

const routes: Routes = [
  {
    path: '',
    component: SolutionsPage
  },
  {
    path: 'f2l',
    loadChildren: () => import('./f2l/f2l.module').then( m => m.F2lPageModule)
  },
  {
    path: 'oll',
    loadChildren: () => import('./oll/oll.module').then( m => m.OllPageModule)
  },
  {
    path: 'pll',
    loadChildren: () => import('./pll/pll.module').then( m => m.PllPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolutionsPageRoutingModule {}
