import {Injectable} from '@angular/core';
import {createPiece} from '../three-components/models/pieces';
import {BOTTOM_CENTER, CUBE_CENTER, FRONT_CENTER, LEFT_CENTER, REAR_CENTER, RIGHT_CENTER, TOP_CENTER} from '../three-components/models';
import {Mesh, Object3D} from 'three';
import {select, Store} from '@ngrx/store';
import {Subscription} from 'rxjs';
import {CubeState} from '../store/state';
import {SceneUtils} from 'three/examples/jsm/utils/SceneUtils';
import {scene} from '../three-components';

@Injectable({
    providedIn: 'root'
})
export class CubeService {

    centerPivot = new Object3D();

    centerPiece: Mesh;
    centers: Mesh[];

    subscription: Subscription;
    cube: [number, number, number, number, number, number];

    moveMap = {
        0: () => this.moveCenterLayerHorizontally(),
        1: () => this.moveCenterLayerVertically(),
    };

    constructor(private store: Store<{ state: CubeState }>) {

        this.subscription = store.pipe(select('state')).subscribe((next: CubeState) => {
            this.cube = next.cube;
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

    moveCenterLayerHorizontally = () => {
        this.move([0, 1, 4, 5], 'y');
    };

    moveCenterLayerVertically = () => {
        this.move([2, 3, 4, 5], 'x');
    };

    move = (faces, axis) => {
        this.centerPivot.rotation.set(0, 0, 0);
        this.centerPivot.updateMatrixWorld();
        faces.forEach(i => {
            SceneUtils.attach(this.centers[this.cube[i]], scene, this.centerPivot);
        });
        this.centerPivot.rotation[axis] += Math.PI / 2;
        this.centerPivot.updateMatrixWorld();
        faces.forEach(i => {
            SceneUtils.detach(this.centers[this.cube[i]], this.centerPivot, scene);
        });
    };

    createCube = () => {
        scene.add(this.centerPiece, ...this.centers);
    };

}
