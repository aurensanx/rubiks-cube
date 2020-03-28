import {Injectable} from '@angular/core';
import {createPiece} from '../three-components/models/pieces';
import {Mesh, Object3D} from 'three';
import {select, Store} from '@ngrx/store';
import {Subscription} from 'rxjs';
import {SceneUtils} from 'three/examples/jsm/utils/SceneUtils';
import {PIECES, scene} from '../three-components';
import {CubeState, MoveState, selectMoveCube} from '@cube-store';
import {cubeSettings} from '../three-components/controls';
import {MoveDefinition, MOVES} from '../three-components/models/moves';

@Injectable({
    providedIn: 'root'
})
export class CubeService {

    subscription: Subscription;

    centerPivot = new Object3D();
    pieces: Mesh[];
    cube: CubeState;

    constructor(private store: Store<{ state: MoveState }>) {

        this.subscription = store.pipe(select(selectMoveCube)).subscribe((next: CubeState) => {
            this.cube = next;
        });

        this.centerPivot.position.set(0, 0, 0);
        this.centerPivot.updateMatrixWorld();

        this.pieces = PIECES.map(createPiece);
    }

    createCube = () => {
        scene.add(...this.pieces);
        return this.pieces;
    };


    moveLayer(move: number) {
        // TODO enviar objeto?
        // tslint:disable-next-line:no-bitwise
        // const finalMove = MOVES.find(m => (move & m.value) === m.value);
        const finalMove = MOVES.find(m => move  ===  m.value);
        this.movePhysically(finalMove);
    }

    private movePhysically = ({cubeFace, x, y, z, axis, direction}: MoveDefinition) => {
        this.centerPivot.rotation.set(x, y, z);
        this.centerPivot.updateMatrixWorld();
        cubeFace.forEach(i => {
            SceneUtils.attach(this.pieces[this.cube[i]], scene, this.centerPivot);
        });
        this.centerPivot.rotation[axis] += Math.PI / 2 / cubeSettings.moveSpeed * direction;
        this.centerPivot.updateMatrixWorld();
        cubeFace.forEach(i => {
            SceneUtils.detach(this.pieces[this.cube[i]], this.centerPivot, scene);
        });
    };


}
