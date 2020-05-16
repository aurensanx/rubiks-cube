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
import {HomePage} from './pages/home/home.page';
import {SolutionsCardComponent} from './pages/home/solutions-card/solutions-card.component';
import {IntroductionCardComponent} from './pages/home/introduction-card/introduction-card.component';
import {SettingsPage} from './pages/settings/settings.page';
import {PlayPage} from './pages/play/play.page';
import {SharedModule} from './shared/shared.module';

@NgModule({
    declarations: [AppComponent, HomePage, PlayPage, SettingsPage,
        SolutionsCardComponent, IntroductionCardComponent],
    entryComponents: [],
    imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
        StoreModule.forRoot(reducers),
        // Instrumentation must be imported after importing StoreModule (config is optional)
        StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
            logOnly: environment.production, // Restrict extension to log-only mode
        }),
        IonicStorageModule.forRoot(),
        SharedModule,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
