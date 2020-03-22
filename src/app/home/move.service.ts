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
        if (this.move === undefined) {
            const move = this.guessMoveFromEvent(event, piece);
            this.store.dispatch(new StartMoveAction(move));
        }
    }

    guessMoveFromEvent(event: any, piece: Mesh) {
        const direction = +(Math.abs(event.movementX) > Math.abs(event.movementY));
        const orientation = (direction && +(event.movementX > 0)) + (!direction && +(event.movementY > 0));
        const move = (piece.position.x + 1) * MOVES_BIT_DEFINITION.X +
            (piece.position.y + 1) * MOVES_BIT_DEFINITION.Y +
            (piece.position.z + 1) * MOVES_BIT_DEFINITION.Z +
            direction * MOVES_BIT_DEFINITION.HORIZONTAL +
            +!direction * MOVES_BIT_DEFINITION.VERTICAL +
            +!orientation * MOVES_BIT_DEFINITION.CLOCKWISE +
            orientation * MOVES_BIT_DEFINITION.COUNTER_CLOCKWISE;

        // tslint:disable-next-line:no-bitwise
        const finalMove = MOVES.find(m => (move & m.value) === m.value);
        return finalMove ? finalMove.value : 2;
    }
}
