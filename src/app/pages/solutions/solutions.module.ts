import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {SolutionsPageRoutingModule} from './solutions-routing.module';

import {SolutionsPage} from './solutions.page';
import {SharedModule} from '../../shared/shared.module';
import {OllPage} from './oll/oll.page';
import {F2lPage} from './f2l/f2l.page';
import {PllPage} from './pll/pll.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SolutionsPageRoutingModule,
        SharedModule,
    ],
    declarations: [SolutionsPage, F2lPage, OllPage, PllPage]
})
export class SolutionsPageModule {
}
