import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomePage} from './pages/home/home.page';
import {SettingsPage} from './pages/settings/settings.page';
import {PlayPage} from './pages/play/play.page';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomePage, data: {title: 'Inicio'}},
    {path: 'play', component: PlayPage, data: {title: 'Jugar'}},
    {
        path: 'solutions',
        loadChildren: () => import('./pages/solutions/solutions.module').then(m => m.SolutionsPageModule),
        data: {title: 'Soluciones'}
    },
    {path: 'settings', component: SettingsPage, data: {title: 'Ajustes'}},
    {
        path: 'solution', loadChildren: () => import('./pages/solution/solution.module').then(m => m.SolutionPageModule)
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
