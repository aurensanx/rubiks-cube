import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OllPage } from './oll.page';

const routes: Routes = [
  {
    path: '',
    component: OllPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OllPageRoutingModule {}
