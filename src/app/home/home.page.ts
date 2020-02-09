import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import * as THREE from 'three';
import {camera, createCube, moveCenterLayerVertically, scene} from '../three-components';
import {TrackballControls} from 'three/examples/jsm/controls/TrackballControls';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class HomePage implements OnInit {

    renderer = null;
    controls = null;

    constructor() {
    }

    ngOnInit() {

        const canvas: HTMLCanvasElement = document.querySelector('#c');
        this.renderer = new THREE.WebGLRenderer({canvas, antialias: true});

        scene.add(createCube());

        this.controls = new TrackballControls(camera, this.renderer.domElement);
        // this.controls.noZoom = true;
        this.controls.rotateSpeed = 2;
        this.controls.update();


        const animate = () => {
            requestAnimationFrame(animate);

            if (this.resizeRendererToDisplaySize(this.renderer)) {
                const c = this.renderer.domElement;
                camera.aspect = c.clientWidth / c.clientHeight;
                camera.updateProjectionMatrix();
            }

            moveCenterLayerVertically();

            this.controls.update();
            this.renderer.render(scene, camera);
        };

        animate();

    }

    resizeRendererToDisplaySize(renderer) {
        const canvas = renderer.domElement;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        const needResize = canvas.width !== width || canvas.height !== height;
        if (needResize) {
            renderer.setSize(width, height, false);
        }
        return needResize;
    }

}
