import {Injectable} from '@angular/core';
import {Face3, Intersection, Object3D, Vector3} from 'three';
import {select, Store} from '@ngrx/store';
import {selectColors, selectMove, StartMoveAction, State} from '../cube';
import {getColorFromNormal, getFacesFromPiecePosition, getFinalMovement} from '../cube/guessMoves';
import {MOVES} from '../cube/moves';

@Injectable({
    providedIn: 'root'
})
export class MoveService {

    move: number;
    colors: number[];

    constructor(private store: Store<{ state: State }>) {
        store.pipe(select(selectMove)).subscribe((next: number) => {
            this.move = next;
        });

        store.pipe(select(selectColors)).subscribe((next: number[]) => {
            this.colors = next;
        });
    }

    moveLayerOnTouch(event: any, {object, face}: Intersection, movementVector: any) {
        if (this.move === undefined) {
            const move = this.guessMoveFromEvent(event, object, face, movementVector);
            if (move !== undefined) {
                this.store.dispatch(new StartMoveAction(move));
            }
        }
    }

    guessMoveFromEvent(event: any, piece: Object3D, face: Face3, movementVector) {

        const color = getColorFromNormal(face.normal);
        const faces = getFacesFromPiecePosition(piece.position);
        const touchedFacePosition = this.getTouchedFacePositionInState(color, faces);

        let movement = this.getMovement3D(movementVector);

        let result = getFinalMovement(movement, touchedFacePosition);

        // FIXME
        if (result === undefined) {
            movement = this.getMovement3D({
                x: movement.indexOf('x') > -1 ? 0 : movementVector.x,
                y: movement.indexOf('y') > -1 ? 0 : movementVector.y,
                z: movement.indexOf('z') > -1 ? 0 : movementVector.z
            });

            result = getFinalMovement(movement, touchedFacePosition);
        }

        return result;
    }

    getMovement3D({x, y, z}) {
        let movement;
        if (Math.abs(x) > Math.max(Math.abs(y), Math.abs(z))) {
            movement = x > 0 ? 'x' : '-x';
        } else if (Math.abs(y) > Math.max(Math.abs(x), Math.abs(z))) {
            movement = y > 0 ? '-y' : 'y';
        } else {
            movement = z > 0 ? 'z' : '-z';
        }
        return movement;
    }

    guessMouseChange(current: Vector3, previous: Vector3) {
        const x = current.x - previous.x;
        const y = current.y - previous.y;
        const z = current.z - previous.z;
        return {x, y, z};
    }

    getTouchedFacePositionInState = (color: number, positions: number[]) => positions.find(p => this.colors[p] === color);

    getRandomMove = () => MOVES[Math.floor(Math.random() * MOVES.length)].value;


}
