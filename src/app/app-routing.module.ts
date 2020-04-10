import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'cube',
    loadChildren: () => import('./pages/cube/cube.module').then( m => m.CubePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
