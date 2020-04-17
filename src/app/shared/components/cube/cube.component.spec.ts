import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {CubeComponent} from './cube.component';
import {StoreModule} from '@ngrx/store';
import {reducers} from '../../cube';
import {IonicStorageModule} from '@ionic/storage';
import {Component, ViewChild} from '@angular/core';

describe('CubeComponent', () => {
    let component: TestHostComponent;
    let fixture: ComponentFixture<TestHostComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CubeComponent, TestHostComponent],
            imports: [IonicModule.forRoot(), StoreModule.forRoot(reducers), IonicStorageModule.forRoot()],
        }).compileComponents();

        fixture = TestBed.createComponent(TestHostComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        spyOn(component.componentUnderTestComponent, 'animate').and.callFake(() => {
        });

    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    @Component({
        selector: `host-component`,
        template: `
            <app-cube [isPlay]="false"></app-cube>`
    })
    class TestHostComponent {
        @ViewChild(CubeComponent, {static: false})
        public componentUnderTestComponent: CubeComponent;
    }
});
