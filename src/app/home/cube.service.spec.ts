import {TestBed} from '@angular/core/testing';

import {CubeService} from './cube.service';
import {StoreModule} from '@ngrx/store';
import {reducers} from '@cube-store';

describe('CubeService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [StoreModule.forRoot(reducers)]
    }));

    it('should be created', () => {
        const service: CubeService = TestBed.get(CubeService);
        expect(service).toBeTruthy();
    });
});
