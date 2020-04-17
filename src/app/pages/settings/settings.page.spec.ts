import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {SettingsPage} from './settings.page';
import {RouterTestingModule} from '@angular/router/testing';
import {IonicStorageModule} from '@ionic/storage';

describe('SettingsPage', () => {
    let component: SettingsPage;
    let fixture: ComponentFixture<SettingsPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SettingsPage],
            imports: [IonicModule.forRoot(), RouterTestingModule, IonicStorageModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(SettingsPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
