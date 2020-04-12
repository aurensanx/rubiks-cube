import {Injectable} from '@angular/core';
import {Raycaster, Vector3} from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import {SettingsService} from './settings.service';
import {TrackballControls} from 'three/examples/jsm/controls/TrackballControls';

@Injectable({
    providedIn: 'root'
})
export class CameraService {

    raycaster: Raycaster;

    constructor(private settingsService: SettingsService) {
        this.raycaster = new Raycaster();
    }

    createControls = (camera, domElement) => {
        let controls;
        if (this.settingsService.cubeSettings.controls === 'orbit') {
            controls = new OrbitControls(camera, domElement);
            controls.enableZoom = true;
            controls.enablePan = false;
            controls.enableDamping = true;
            controls.dampingFactor = 0.1;
            controls.rotateSpeed = 0.05;
        } else {
            controls = new TrackballControls(camera, domElement);
            controls.noZoom = true;
            controls.noPan = true;
            controls.rotateSpeed = 1;
        }
        return controls;
    };

    resizeRendererToDisplaySize = renderer => {
        const canvas = renderer.domElement;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
            renderer.setSize(width, height, false);
        }
        return needResize;
    };

    getTouchPosition = (event: TouchEvent) => new Vector3((event.touches[0].clientX / window.innerWidth) * 2 - 1,
        -(event.touches[0].clientY / window.innerHeight) * 2 + 1, 0.5);

}
