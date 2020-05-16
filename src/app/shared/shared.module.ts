import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CubeComponent, FooterTabsComponent, HeaderComponent, SolutionComponent} from './components';
import {IonicModule} from '@ionic/angular';


@NgModule({
    declarations: [HeaderComponent, CubeComponent, SolutionComponent, FooterTabsComponent],
    imports: [
        CommonModule,
        IonicModule
    ],
    exports: [
        HeaderComponent,
        CubeComponent,
        SolutionComponent,
        FooterTabsComponent,
    ]
})
export class SharedModule {
}
