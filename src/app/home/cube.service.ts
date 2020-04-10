import {Injectable} from '@angular/core';
import {createPiece} from '../three-components/pieces';
import {Mesh, Object3D} from 'three';
import {select, Store} from '@ngrx/store';
import {Subscription} from 'rxjs';
import {SceneUtils} from 'three/examples/jsm/utils/SceneUtils';
import {CUBE} from '../three-components';
import {MoveDefinition, MOVES} from '../three-components/moves';
import {PiecesState, selectPieces, State} from '@cube-store';
import {CameraService} from '../commons/camera.service';

@Injectable({
    providedIn: 'root'
})
export class CubeService {

    subscription: Subscription;

    centerPivot = new Object3D();
    pieces: Mesh[];
    piecesState: PiecesState;

    constructor(private cameraService: CameraService, private store: Store<{ state: State }>) {

        this.subscription = store.pipe(select(selectPieces)).subscribe((next: PiecesState) => {
            this.piecesState = next;
        });

        this.centerPivot.position.set(0, 0, 0);
        this.centerPivot.updateMatrixWorld();

        this.pieces = CUBE.PIECES.map(createPiece);
    }

    createCube = scene => {
        scene.add(...this.pieces);
        return this.pieces;
    };


    moveLayer(move: number, scene) {
        // TODO enviar objeto?
        // tslint:disable-next-line:no-bitwise
        // const finalMove = MOVES.find(m => _.some(m.value, v => (move & v) === v));
        const finalMove = MOVES.find(m => move === m.value);
        this.movePhysically(finalMove, scene);
    }

    private movePhysically = ({cubeFace, x, y, z, axis, direction}: MoveDefinition, scene) => {
        this.centerPivot.rotation.set(x, y, z);
        this.centerPivot.updateMatrixWorld();
        cubeFace.forEach(i => {
            SceneUtils.attach(this.pieces[this.piecesState[i]], scene, this.centerPivot);
        });
        this.centerPivot.rotation[axis] += Math.PI / 2 / this.cameraService.cubeSettings.moveSpeed * direction;
        this.centerPivot.updateMatrixWorld();
        cubeFace.forEach(i => {
            SceneUtils.detach(this.pieces[this.piecesState[i]], this.centerPivot, scene);
        });
        // console.log(this.pieces[this.cube[cubeFace[0]]].rotation);
    };


}
