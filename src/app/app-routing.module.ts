import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    // { path: '', redirectTo: '', pathMatch: 'full' },
    {path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)},

    {
        path: 'settings',
        loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsPageModule)
    },
    {
        path: 'play',
        loadChildren: () => import('./pages/play/play.module').then(m => m.PlayPageModule)
    },
  {
    path: 'solutions',
    loadChildren: () => import('./pages/solutions/solutions.module').then( m => m.SolutionsPageModule)
  },
  {
    path: 'solution',
    loadChildren: () => import('./pages/solution/solution.module').then( m => m.SolutionPageModule)
  },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
