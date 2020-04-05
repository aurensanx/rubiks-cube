import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {HomePage} from './home.page';
import {MockComponent} from 'ng-mocks';
import {ButtonsComponent} from './buttons/buttons.component';
import {StoreModule} from '@ngrx/store';
import {reducers} from '@cube-store';

describe('HomePage', () => {
    let component: HomePage;
    let fixture: ComponentFixture<HomePage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HomePage, MockComponent(ButtonsComponent)],
            imports: [IonicModule.forRoot(), StoreModule.forRoot(reducers)]
        }).compileComponents();

        fixture = TestBed.createComponent(HomePage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    xit('should create', () => {
        expect(component).toBeTruthy();
    });
});
