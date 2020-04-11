import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {F2lPageRoutingModule} from './f2l-routing.module';

import {F2lPage} from './f2l.page';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        F2lPageRoutingModule,
        SharedModule,
    ],
    declarations: [F2lPage]
})
export class F2lPageModule {
}
