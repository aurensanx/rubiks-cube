import {Injectable} from '@angular/core';
import {Face3, Mesh} from 'three';
import {select, Store} from '@ngrx/store';
import {selectColors, selectMove, StartMoveAction, State} from '@cube-store';
import {getColorFromNormal, getFacesFromPiecePosition, getFinalMovement} from '../three-components/models/guessMoves';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

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

    moveLayerOnTouch(event: any, {object, face}, controls: OrbitControls) {
        if (this.move === undefined) {
            const move = this.guessMoveFromEvent(event, object, face, controls);
            if (move !== undefined) {
                this.store.dispatch(new StartMoveAction(move));
            }
        }
    }

    guessMoveFromEvent(event: any, piece: Mesh, face: Face3, controls: OrbitControls) {

        const color = getColorFromNormal(face.normal);
        const faces = getFacesFromPiecePosition(piece.position);
        const touchedFacePosition = this.getTouchedFacePositionInState(color, faces);
        // console.log(touchedFacePosition);

        // console.log(event.movementX, event.movementY);
        // console.log(controls.getPolarAngle());
        // console.log(controls.getAzimuthalAngle());

        const x = event.movementX * Math.cos(controls.getAzimuthalAngle()) +
            event.movementY * Math.cos(controls.getPolarAngle()) * Math.sin(controls.getAzimuthalAngle());
        const y = event.movementY * Math.sin(controls.getPolarAngle());
        const z = -event.movementX * Math.sin(controls.getAzimuthalAngle()) +
            event.movementY * Math.cos(controls.getPolarAngle()) * Math.cos(controls.getAzimuthalAngle());

        console.log(x, y, z);
        let movement;
        if (Math.abs(x) > Math.max(Math.abs(y), Math.abs(z))) {
            movement = x > 0 ? 'x' : '-x';
        } else if (Math.abs(y) > Math.max(Math.abs(x), Math.abs(z))) {
            movement = y > 0 ? 'y' : '-y';
        } else {
            movement = z > 0 ? 'z' : '-z';
        }

        const result = getFinalMovement(movement, touchedFacePosition);
        // console.log(result);

        return result;
    }

    getTouchedFacePositionInState = (color: number, positions: number[]) => positions.find(p => this.colors[p] === color);


}
