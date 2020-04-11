import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PllPage } from './pll.page';

const routes: Routes = [
  {
    path: '',
    component: PllPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PllPageRoutingModule {}
