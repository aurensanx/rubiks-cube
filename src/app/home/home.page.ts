import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import * as THREE from 'three';
import {
    camera,
    createCube,
    moveCenterLayerHorizontally,
    moveCenterLayerVertically,
    resizeRendererToDisplaySize,
    scene
} from '../three-components';
import {TrackballControls} from 'three/examples/jsm/controls/TrackballControls';
import {select, Store} from '@ngrx/store';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class HomePage implements OnInit, OnDestroy {

    renderer = null;
    controls = null;
    move: string;

    subscription: Subscription;

    constructor(private store: Store<{ move: string }>) {
        this.subscription = store.pipe(select('move')).subscribe((next: string) => {
            this.move = next;
        });
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

            if (resizeRendererToDisplaySize(this.renderer)) {
                const c = this.renderer.domElement;
                camera.aspect = c.clientWidth / c.clientHeight;
                camera.updateProjectionMatrix();
            }

            if (this.move === 'v') {
                moveCenterLayerVertically();
            } else if (this.move === 'h') {
                moveCenterLayerHorizontally();
            }

            this.controls.update();
            this.renderer.render(scene, camera);
        };

        animate();

    }


    ngOnDestroy() {
        this.subscription.unsubscribe();
    }


}
