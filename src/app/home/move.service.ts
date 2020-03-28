import {Injectable} from '@angular/core';
import {Mesh} from 'three';
import {select, Store} from '@ngrx/store';
import {MoveState, selectMoveMove, StartMoveAction} from '@cube-store';
import {MOVES, MOVES_BIT_DEFINITION} from '../three-components/models/moves';

@Injectable({
    providedIn: 'root'
})
export class MoveService {

    move: number;

    constructor(private store: Store<{ state: MoveState }>) {
        store.pipe(select(selectMoveMove)).subscribe((next: number) => {
            this.move = next;
        });
    }

    moveLayerOnTouch(event: any, piece: Mesh) {
        // if (this.move === undefined) {
        //     const move = this.guessMoveFromEvent(event, piece);
        //     if (move) {
        //         this.store.dispatch(new StartMoveAction(move));
        //     }
        // }
    }

    guessMoveFromEvent(event: any, piece: Mesh) {
        const direction = +(Math.abs(event.movementX) > Math.abs(event.movementY));
        const orientation = (direction && +(event.movementX > 0)) + (!direction && +(event.movementY > 0));

        const move = orientation * MOVES_BIT_DEFINITION.COUNTER_CLOCKWISE + (+!orientation * MOVES_BIT_DEFINITION.CLOCKWISE) +
            direction * MOVES_BIT_DEFINITION.HORIZONTAL + (+!direction * MOVES_BIT_DEFINITION.VERTICAL) +
            +(piece.position.x < 0) * MOVES_BIT_DEFINITION.X0 +
            +(piece.position.x === 0) * MOVES_BIT_DEFINITION.X1 +
            +(piece.position.x > 0) * MOVES_BIT_DEFINITION.X2 +
            +(piece.position.y < 0) * MOVES_BIT_DEFINITION.Y0 +
            +(piece.position.y === 0) * MOVES_BIT_DEFINITION.Y1 +
            +(piece.position.y > 0) * MOVES_BIT_DEFINITION.Y2 +
            +(piece.position.z < 0) * MOVES_BIT_DEFINITION.Z0 +
            +(piece.position.z === 0) * MOVES_BIT_DEFINITION.Z1 +
            +(piece.position.z > 0) * MOVES_BIT_DEFINITION.Z2;

        console.log(move);

        // tslint:disable-next-line:no-bitwise
        const finalMove = MOVES.find(m => (move & m.value) === m.value);
        return finalMove ? finalMove.value : undefined;
    }
}
