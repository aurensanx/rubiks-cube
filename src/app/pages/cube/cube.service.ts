import {Injectable} from '@angular/core';
import {Mesh, Object3D, Scene} from 'three';
import {select, Store} from '@ngrx/store';
import {Subscription} from 'rxjs';
import {SceneUtils} from 'three/examples/jsm/utils/SceneUtils';
import {MoveDefinition, MOVES} from '../../three-components/moves';
import {PiecesState, selectPieces, State} from '@cube-store';
import {CameraService} from '../../commons/camera.service';
import {SettingsService} from '../settings/settings.service';

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


    moveLayer(move: number, pieces: Mesh[], centerPivot: Object3D, scene: Scene) {
        const finalMove = MOVES.find(m => move === m.value);
        this.movePhysically(finalMove, pieces, centerPivot, scene);
    }

    private movePhysically = ({cubeFace, x, y, z, axis, direction}: MoveDefinition,
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


}
