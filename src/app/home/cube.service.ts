import {Injectable} from '@angular/core';
import {createPiece} from '../three-components/models/pieces';
import {BOTTOM_CENTER, CUBE_CENTER, FRONT_CENTER, LEFT_CENTER, REAR_CENTER, RIGHT_CENTER, TOP_CENTER} from '../three-components/models';
import {Mesh, Object3D} from 'three';
import {select, Store} from '@ngrx/store';
import {Subscription} from 'rxjs';
import {SceneUtils} from 'three/examples/jsm/utils/SceneUtils';
import {moveSpeed, scene} from '../three-components';
import {CubeState, MoveState, selectMoveCube} from '@cube-store';

@Injectable({
    providedIn: 'root'
})
export class CubeService {

    centerPivot = new Object3D();

    centerPiece: Mesh;
    centers: Mesh[];

    subscription: Subscription;
    cube: CubeState;

    moveMap = {
        1: () => this.move([0, 1, 4, 5], 'y', 1),
        2: () => this.move([0, 1, 4, 5], 'y', -1),
        3: () => this.move([2, 3, 4, 5], 'x', 1),
        4: () => this.move([2, 3, 4, 5], 'x', -1),
    };

    constructor(private store: Store<{ state: MoveState }>) {

        this.subscription = store.pipe(select(selectMoveCube)).subscribe((next: CubeState) => {
            this.cube = next;
        });

        this.centerPivot.position.set(0, 0, 0);
        this.centerPivot.updateMatrixWorld();

        this.centerPiece = createPiece(CUBE_CENTER);
        this.centers = [createPiece(RIGHT_CENTER), createPiece(LEFT_CENTER), createPiece(TOP_CENTER),
            createPiece(BOTTOM_CENTER), createPiece(FRONT_CENTER), createPiece(REAR_CENTER)];
    }


    moveLayer(move: number) {
        this.moveMap[move]();
    }

    move = (faces, axis, direction) => {
        this.centerPivot.rotation.set(0, 0, 0);
        this.centerPivot.updateMatrixWorld();
        faces.forEach(i => {
            SceneUtils.attach(this.centers[this.cube[i]], scene, this.centerPivot);
        });
        this.centerPivot.rotation[axis] += Math.PI / 2 / moveSpeed * direction;
        this.centerPivot.updateMatrixWorld();
        faces.forEach(i => {
            SceneUtils.detach(this.centers[this.cube[i]], this.centerPivot, scene);
        });
    };

    createCube = () => {
        scene.add(this.centerPiece, ...this.centers);
    };

}
