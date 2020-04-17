import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {HomePage} from './home.page';
import {StoreModule} from '@ngrx/store';
import {reducers} from '../../shared/cube';
import {RouterTestingModule} from '@angular/router/testing';

describe('HomePage', () => {
    let component: HomePage;
    let fixture: ComponentFixture<HomePage>;


    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HomePage],
            imports: [IonicModule.forRoot(), StoreModule.forRoot(reducers), RouterTestingModule]
        }).compileComponents();

        fixture = TestBed.createComponent(HomePage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
