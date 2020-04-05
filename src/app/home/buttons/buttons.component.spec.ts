import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {ButtonsComponent} from './buttons.component';
import {StoreModule} from '@ngrx/store';
import {reducers} from '@cube-store';

describe('ButtonsComponent', () => {
    let component: ButtonsComponent;
    let fixture: ComponentFixture<ButtonsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ButtonsComponent],
            imports: [IonicModule.forRoot(), StoreModule.forRoot(reducers)]
        }).compileComponents();

        fixture = TestBed.createComponent(ButtonsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
