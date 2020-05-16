import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SolutionsPage} from './solutions.page';
import {F2lPage} from './f2l/f2l.page';
import {OllPage} from './oll/oll.page';
import {PllPage} from './pll/pll.page';

const routes: Routes = [
    {path: '', component: SolutionsPage},
    {path: 'f2l', component: F2lPage, data: {title: 'First 2 Layers'}},
    {path: 'oll', component: OllPage, data: {title: 'Orientation of Last Layer'}},
    {path: 'pll', component: PllPage, data: {title: 'Permutation of Last Layer'}},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SolutionsPageRoutingModule {
}
