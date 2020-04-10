import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CubePage } from './cube.page';

const routes: Routes = [
  {
    path: '',
    component: CubePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CubePageRoutingModule {}
