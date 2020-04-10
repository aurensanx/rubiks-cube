import {Injectable} from '@angular/core';
import * as THREE from 'three';
import {PerspectiveCamera, Raycaster, Scene} from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

@Injectable({
    providedIn: 'root'
})
export class CameraService {

    camera: PerspectiveCamera;
    scene: Scene;
    raycaster: Raycaster;

    cubeSettings = {
        moveSpeed: 20,
        initialScrambleMoves: 10000,
        sensitivity: 0.005
    };

    constructor() {
        this.camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.scene = new THREE.Scene();
        this.raycaster = new THREE.Raycaster();
        this.scene.background = new THREE.Color(0x221D2E);
    }

    createControls = domElement => {
        const controls = new OrbitControls(this.camera, domElement);
        controls.enableZoom = true;
        controls.enablePan = false;
        controls.enableDamping = true;
        controls.dampingFactor = 0.1;
        controls.rotateSpeed = 0.05;
        // const controls = new TrackballControls(camera, domElement);
        // controls.noZoom = true;
        // controls.noPan = true;
        // controls.rotateSpeed = 1;
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

    updateProjectionMatrix = renderer => {
        if (this.resizeRendererToDisplaySize(renderer)) {
            const c = renderer.domElement;
            this.camera.aspect = c.clientWidth / c.clientHeight;
            this.camera.updateProjectionMatrix();
        }
    };

    updateRenderer = renderer => {
        renderer.render(this.scene, this.camera);
    };

    getTouchPosition = (event: TouchEvent) => new THREE.Vector3((event.touches[0].clientX / window.innerWidth) * 2 - 1,
        -(event.touches[0].clientY / window.innerHeight) * 2 + 1, 0.5);

}
