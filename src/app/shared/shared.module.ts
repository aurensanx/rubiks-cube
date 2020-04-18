import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CubeComponent} from './components';
import {SolutionComponent} from './components/solution/solution.component';
import {IonicModule} from '@ionic/angular';


@NgModule({
    declarations: [CubeComponent, SolutionComponent],
    imports: [
        CommonModule,
        IonicModule
    ],
    exports: [
        CubeComponent,
        SolutionComponent,
    ]
})
export class SharedModule {
}
