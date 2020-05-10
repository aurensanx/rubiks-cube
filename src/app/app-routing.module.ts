import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomePage} from './pages/home/home.page';

const routes: Routes = [
    // { path: '', redirectTo: '', pathMatch: 'full' },
    {path: '', component: HomePage, data: {title: 'Inicio'}},

    {
        path: 'play',
        loadChildren: () => import('./pages/play/play.module').then(m => m.PlayPageModule),
        data: {title: 'Cubo'}
    },
    {
        path: 'solutions',
        loadChildren: () => import('./pages/solutions/solutions.module').then(m => m.SolutionsPageModule),
        data: {title: 'Soluciones'}
    },
    {
        path: 'settings',
        loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsPageModule),
        data: {title: 'Ajustes'}
    },
    {
        path: 'solution',
        loadChildren: () => import('./pages/solution/solution.module').then(m => m.SolutionPageModule)
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
