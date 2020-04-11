import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {PlayPageRoutingModule} from './play-routing.module';

import {PlayPage} from './play.page';
import {CubeComponent} from '../../commons/components/cube/cube.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PlayPageRoutingModule
    ],
    declarations: [PlayPage, CubeComponent]
})
export class PlayPageModule {
}
