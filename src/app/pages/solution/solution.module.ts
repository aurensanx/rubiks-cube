import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {SolutionPageRoutingModule} from './solution-routing.module';

import {SolutionPage} from './solution.page';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SolutionPageRoutingModule,
        SharedModule,
    ],
    declarations: [SolutionPage]
})
export class SolutionPageModule {
}
