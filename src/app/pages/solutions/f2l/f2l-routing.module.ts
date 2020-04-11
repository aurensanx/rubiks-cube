import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { F2lPage } from './f2l.page';

const routes: Routes = [
  {
    path: '',
    component: F2lPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class F2lPageRoutingModule {}
