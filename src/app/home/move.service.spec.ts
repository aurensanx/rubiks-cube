import {TestBed} from '@angular/core/testing';

import {MoveService} from './move.service';
import {StoreModule} from '@ngrx/store';
import {reducers} from '@cube-store';

describe('MoveService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [StoreModule.forRoot(reducers)]
    }));

    it('should be created', () => {
        const service: MoveService = TestBed.get(MoveService);
        expect(service).toBeTruthy();
    });
});
