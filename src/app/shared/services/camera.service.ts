import {Injectable} from '@angular/core';
import {Box3, Camera, Color, Object3D, PerspectiveCamera, Raycaster, Scene, Vector3} from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import {SettingsService} from './settings.service';
import {TrackballControls} from 'three/examples/jsm/controls/TrackballControls';
import {MoveDefinition} from '../cube';

@Injectable({
    providedIn: 'root'
})
export class CameraService {

    raycaster: Raycaster;

    constructor(private settingsService: SettingsService) {
        this.raycaster = new Raycaster();
    }

    createScene: () => Scene = () => {
        const scene = new Scene();
        scene.background = new Color(0x383A3E);
        return scene;
    };

    createCamera: (isPlay: boolean) => PerspectiveCamera = isPlay => {
        const camera = new PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 1000000);
        this.setInitialPosition(camera, isPlay);
        return camera;
    };

    setInitialPosition(camera: PerspectiveCamera, isPlay: boolean) {
        camera.position.z = 16;
        camera.position.x = 8;
        camera.position.y = 8;
        // FIXME
        camera.zoom = isPlay ? 1.2 : 1.8;
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
            controls.noZoom = false;
            controls.noPan = true;
            controls.rotateSpeed = 1;
        }
        return controls;
    };

    resizeRendererToDisplaySize = renderer => {
        const canvas = renderer.domElement;
        const needResize = canvas.width !== canvas.clientWidth || canvas.height !== canvas.clientHeight;
        if (needResize) {
            renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
        }
        return needResize;
    };



    // fitCameraToSelection(camera, controls, selection, fitOffset = 2.5) {
    //
    //     const box = new Box3();
    //
    //     for (const object of selection) {
    //         box.expandByObject(object);
    //     }
    //
    //     const size = box.getSize(new Vector3());
    //     const center = box.getCenter(new Vector3());
    //
    //     const maxSize = Math.max(size.x, size.y, size.z);
    //     const fitHeightDistance = maxSize / (2 * Math.atan(Math.PI * camera.fov / 360));
    //     const fitWidthDistance = fitHeightDistance / camera.aspect;
    //     const distance = fitOffset * Math.max(fitHeightDistance, fitWidthDistance);
    //
    //     const direction = controls.target.clone()
    //         .sub(camera.position)
    //         .normalize()
    //         .multiplyScalar(distance);
    //
    //     controls.maxDistance = distance * 10;
    //     controls.target.copy(center);
    //
    //     camera.near = distance / 100;
    //     camera.far = distance * 100;
    //     camera.updateProjectionMatrix();
    //
    //     camera.position.copy(controls.target).sub(direction);
    //
    //     controls.update();
    //
    // }

    getTouchPosition = (event: TouchEvent) => new Vector3((event.touches[0].clientX / window.innerWidth) * 2 - 1,
        -(event.touches[0].clientY / window.innerHeight) * 2 + 1, 0.5);

}
