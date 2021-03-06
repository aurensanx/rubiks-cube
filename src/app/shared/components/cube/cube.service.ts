import {Injectable} from '@angular/core';
import {Camera, Color, Mesh, Object3D, Scene} from 'three';
import {select, Store} from '@ngrx/store';
import {Subscription} from 'rxjs';
import {SceneUtils} from 'three/examples/jsm/utils/SceneUtils';
import {findMove, MoveDefinition, PiecesState, selectPieces, State} from '../../cube';
import {CameraService, SettingsService} from '../../services';

@Injectable({
    providedIn: 'root'
})
export class CubeService {

    subscription: Subscription;

    piecesState: PiecesState;

    constructor(private cameraService: CameraService, private settingsService: SettingsService,
                private store: Store<{ state: State }>) {

        this.subscription = store.pipe(select(selectPieces)).subscribe((next: PiecesState) => {
            this.piecesState = next;
        });
    }

    createCenterPivot: () => Object3D = () => {
        const centerPivot = new Object3D();
        centerPivot.position.set(0, 0, 0);
        centerPivot.updateMatrixWorld();
        return centerPivot;
    };

    moveLayer(move: number, pieces: Mesh[], centerPivot: Object3D, scene: Scene, camera: Camera) {
        const finalMove = findMove(move);

        if (finalMove.isCameraRotation) {
            this.rotateCamera(finalMove, camera, centerPivot, scene);
        } else {
            this.moveLayerPhysically(finalMove, pieces, centerPivot, scene);
        }

    }

    private moveLayerPhysically = ({cubeFace, x, y, z, axis, direction}: MoveDefinition,
                                   pieces: Mesh[], centerPivot: Object3D, scene: Scene) => {
        centerPivot.rotation.set(x, y, z);
        centerPivot.updateMatrixWorld();
        cubeFace.forEach(i => {
            SceneUtils.attach(pieces[this.piecesState[i]], scene, centerPivot);
        });
        centerPivot.rotation[axis] += Math.PI / 2 / this.settingsService.cubeSettings.moveSpeedCounts * direction;
        centerPivot.updateMatrixWorld();
        cubeFace.forEach(i => {
            SceneUtils.detach(pieces[this.piecesState[i]], centerPivot, scene);
        });
    };


    rotateCamera = ({cubeFace, x, y, z, axis, direction}: MoveDefinition,
                    camera: Camera, centerPivot: Object3D, scene: Scene) => {
        centerPivot.rotation.set(x, y, z);
        centerPivot.updateMatrixWorld();
        SceneUtils.attach(camera, scene, centerPivot);
        centerPivot.rotation[axis] += Math.PI / 2 / this.settingsService.cubeSettings.moveSpeedCounts * direction;
        centerPivot.updateMatrixWorld();
        SceneUtils.detach(camera, centerPivot, scene);
    };

}
