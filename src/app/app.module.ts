import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {IonicStorageModule} from '@ionic/storage';
import {reducers} from './shared/cube';
import {HeaderComponent} from './shared/components/header/header.component';
import {SideMenuComponent} from './shared/components/side-menu/side-menu.component';
import {HomePage} from './pages/home/home.page';
import {SolutionsCardComponent} from './pages/home/solutions-card/solutions-card.component';
import {IntroductionCardComponent} from './pages/home/introduction-card/introduction-card.component';

@NgModule({
    declarations: [AppComponent, HeaderComponent, SideMenuComponent, HomePage, SolutionsCardComponent, IntroductionCardComponent],
    entryComponents: [],
    imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
        StoreModule.forRoot(reducers),
        // Instrumentation must be imported after importing StoreModule (config is optional)
        StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
            logOnly: environment.production, // Restrict extension to log-only mode
        }),
        IonicStorageModule.forRoot(),
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    exports: [
        HeaderComponent,
        SideMenuComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
