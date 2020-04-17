import {TestBed} from '@angular/core/testing';

import {SettingsService} from './settings.service';
import {IonicStorageModule} from '@ionic/storage';

describe('SettingsService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [IonicStorageModule.forRoot()]
    }));

    it('should be created', () => {
        const service: SettingsService = TestBed.get(SettingsService);
        expect(service).toBeTruthy();
    });
});
