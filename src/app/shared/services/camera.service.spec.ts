import {TestBed} from '@angular/core/testing';

import {CameraService} from './camera.service';
import {IonicStorageModule} from '@ionic/storage';

describe('CameraService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [IonicStorageModule.forRoot()]
    }));

    it('should be created', () => {
        const service: CameraService = TestBed.get(CameraService);
        expect(service).toBeTruthy();
    });
});
