import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {PlayPage} from './play.page';
import {IonicStorageModule} from '@ionic/storage';
import {StoreModule} from '@ngrx/store';
import {reducers} from '../../shared/cube';
import {MockComponent} from 'ng-mocks';
import {CubeComponent} from '../../shared/components';

describe('PlayPage', () => {
    let component: PlayPage;
    let fixture: ComponentFixture<PlayPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PlayPage, MockComponent(CubeComponent)],
            imports: [IonicModule.forRoot(), IonicStorageModule.forRoot(), StoreModule.forRoot(reducers)]
        }).compileComponents();

        fixture = TestBed.createComponent(PlayPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
