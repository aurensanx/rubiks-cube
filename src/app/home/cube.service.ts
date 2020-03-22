import {Injectable} from '@angular/core';
import {createPiece} from '../three-components/models/pieces';
import {Mesh, Object3D} from 'three';
import {select, Store} from '@ngrx/store';
import {Subscription} from 'rxjs';
import {SceneUtils} from 'three/examples/jsm/utils/SceneUtils';
import {FACES, PIECES, scene} from '../three-components';
import {CubeState, MoveState, selectMoveCube} from '@cube-store';
import {cubeSettings} from '../three-components/controls';

@Injectable({
    providedIn: 'root'
})
export class CubeService {

    centerPivot = new Object3D();

    pieces: Mesh[];

    subscription: Subscription;
    cube: CubeState;

    moveMap = {
        133: () => this.move(FACES.UP, 0, 1, 0, 'y', -1),
        134: () => this.move(FACES.UP, 0, 1, 0, 'y', 1),
        2: () => this.move(FACES.DOWN, 0, -1, 0, 'y', 1),
        3: () => this.move(FACES.DOWN, 0, -1, 0, 'y', -1),
        4: () => this.move(FACES.RIGHT, 1, 0, 0, 'x', -1),
        5: () => this.move(FACES.RIGHT, 1, 0, 0, 'x', 1),
        6: () => this.move(FACES.LEFT, -1, 0, 0, 'x', 1),
        7: () => this.move(FACES.LEFT, -1, 0, 0, 'x', -1),
        8: () => this.move(FACES.FRONT, 0, 0, 1, 'z', -1),
        9: () => this.move(FACES.FRONT, 0, 0, 1, 'z', 1),
        10: () => this.move(FACES.BACK, 0, 0, -1, 'z', 1),
        11: () => this.move(FACES.BACK, 0, 0, -1, 'z', -1),
    };  

    constructor(private store: Store<{ state: MoveState }>) {

        this.subscription = store.pipe(select(selectMoveCube)).subscribe((next: CubeState) => {
            this.cube = next;
        });

        this.centerPivot.position.set(0, 0, 0);
        this.centerPivot.updateMatrixWorld();

        this.pieces = PIECES.map((p, i) => createPiece(p, i));
    }


    moveLayer(move: number) {
        this.moveMap[move]();
    }

    move = (pieces, x, y, z, axis, direction) => {
        this.centerPivot.rotation.set(x, y, z);
        this.centerPivot.updateMatrixWorld();
        pieces.forEach(i => {
            SceneUtils.attach(this.pieces[this.cube[i]], scene, this.centerPivot);
        });
        this.centerPivot.rotation[axis] += Math.PI / 2 / cubeSettings.moveSpeed * direction;
        this.centerPivot.updateMatrixWorld();
        pieces.forEach(i => {
            SceneUtils.detach(this.pieces[this.cube[i]], this.centerPivot, scene);
        });
    };

    createCube = () => {
        scene.add(...this.pieces);
        return this.pieces;
    };

}
