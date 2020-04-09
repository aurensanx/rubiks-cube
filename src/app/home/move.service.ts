import {Injectable} from '@angular/core';
import {Face3, Mesh} from 'three';
import {select, Store} from '@ngrx/store';
import {MOVES, MOVES_BIT_DEFINITION} from '../three-components/models/moves';
import * as _ from 'lodash';
import {selectColors, selectMove, StartMoveAction, State} from '@cube-store';
import {getColorFromNormal, getFacesFromPiecePosition} from '../three-components/models/guessMoves';
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
        console.log(controls.getPolarAngle());
        console.log(controls.getAzimuthalAngle());

        return 0;
    }

    getTouchedFacePositionInState = (color: number, positions: number[]) => positions.find(p => this.colors[p] === color);

    guessMoveFromEventOLD(event: any, piece: Mesh, face: Face3) {
        // TODO
        // const movementX = event.movementX * Math.cos(camera.rotation.x) + event.movementY * Math.sin(camera.rotation.y);
        // const movementY = event.movementX * Math.sin(camera.rotation.x) + event.movementY * Math.cos(camera.rotation.y);

        console.log(piece.rotation);
        console.log(face.normal);
        const xNormal =
            // face.normal.x * Math.cos(piece.rotation.y) * Math.cos(piece.rotation.z)
            // - face.normal.x * Math.sin(piece.rotation.x) * Math.sin(piece.rotation.y) * Math.sin(piece.rotation.z)
            // + face.normal.z * Math.sin(piece.rotation.y) * Math.cos(piece.rotation.z)
            // + face.normal.z * Math.sin(piece.rotation.x) * Math.cos(piece.rotation.y) * Math.cos(piece.rotation.z)
            // - face.normal.y * Math.cos(piece.rotation.y) * Math.sin(piece.rotation.z)
            // + face.normal.y * Math.sin(piece.rotation.x) * Math.sin(piece.rotation.y) * Math.cos(piece.rotation.z);
            face.normal.x * Math.cos(piece.rotation.z) * Math.cos(piece.rotation.y) +
            face.normal.y * Math.sin(piece.rotation.z) * Math.cos(piece.rotation.x) +
            -face.normal.z * Math.sin(piece.rotation.y) * Math.cos(piece.rotation.z) +
            face.normal.z * Math.sin(piece.rotation.x) * Math.sin(piece.rotation.z) +
            face.normal.y * Math.sin(piece.rotation.x) * Math.sin(piece.rotation.y);

        console.log(xNormal);
        const yNormal = face.normal.y * Math.sin(piece.rotation.x) + face.normal.z * Math.cos(piece.rotation.x);
        const zNormal =
            face.normal.z * Math.cos(piece.rotation.x) * Math.cos(piece.rotation.y) +
            face.normal.y * Math.sin(piece.rotation.x) * Math.cos(piece.rotation.z) +
            -face.normal.x * Math.sin(piece.rotation.y) * Math.cos(piece.rotation.x) +
            face.normal.x * Math.sin(piece.rotation.z) * Math.sin(piece.rotation.x) +
            face.normal.y * Math.sin(piece.rotation.z) * Math.sin(piece.rotation.y);
        // console.log(zNormal);
        const movementX = event.movementX;
        const movementY = event.movementY; // * Math.cos(controls.getAzimuthalAngle());
        // 0 -> vertical, 1 -> horizontal
        const direction = +(Math.abs(movementX) > Math.abs(event.movementY));
        const orientation = (direction && +(movementX > 0)) + (!direction && +(movementY > 0));

        const move = orientation * MOVES_BIT_DEFINITION.NEGATIVE + (+!orientation * MOVES_BIT_DEFINITION.POSITIVE) +
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

        // tslint:disable-next-line:no-bitwise
        const finalMove = MOVES.find(m => _.some(m.value, v => (move & v) === v));
        // FIXME
        return finalMove ? finalMove.value[0] : undefined;
    }
}
