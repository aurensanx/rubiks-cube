import {Injectable} from '@angular/core';
import {createPiece} from '../three-components/models/pieces';
import {Mesh, Object3D} from 'three';
import {select, Store} from '@ngrx/store';
import {Subscription} from 'rxjs';
import {SceneUtils} from 'three/examples/jsm/utils/SceneUtils';
import {CUBE, scene} from '../three-components';
import {cubeSettings} from '../three-components/controls';
import {MoveDefinition, MOVES} from '../three-components/models/moves';
import {PiecesState, selectPieces, State} from '@cube-store';

@Injectable({
    providedIn: 'root'
})
export class CubeService {

    subscription: Subscription;

    centerPivot = new Object3D();
    pieces: Mesh[];
    piecesState: PiecesState;

    constructor(private store: Store<{ state: State }>) {

        this.subscription = store.pipe(select(selectPieces)).subscribe((next: PiecesState) => {
            this.piecesState = next;
        });

        this.centerPivot.position.set(0, 0, 0);
        this.centerPivot.updateMatrixWorld();

        this.pieces = CUBE.PIECES.map(createPiece);
    }

    createCube = () => {
        scene.add(...this.pieces);
        return this.pieces;
    };


    moveLayer(move: number) {
        // TODO enviar objeto?
        // tslint:disable-next-line:no-bitwise
        // const finalMove = MOVES.find(m => _.some(m.value, v => (move & v) === v));
        const finalMove = MOVES.find(m => move === m.value);
        this.movePhysically(finalMove);
    }

    private movePhysically = ({cubeFace, x, y, z, axis, direction}: MoveDefinition) => {
        this.centerPivot.rotation.set(x, y, z);
        this.centerPivot.updateMatrixWorld();
        cubeFace.forEach(i => {
            SceneUtils.attach(this.pieces[this.piecesState[i]], scene, this.centerPivot);
        });
        this.centerPivot.rotation[axis] += Math.PI / 2 / cubeSettings.moveSpeed * direction;
        this.centerPivot.updateMatrixWorld();
        cubeFace.forEach(i => {
            SceneUtils.detach(this.pieces[this.piecesState[i]], this.centerPivot, scene);
        });
        // console.log(this.pieces[this.cube[cubeFace[0]]].rotation);
    };


}
