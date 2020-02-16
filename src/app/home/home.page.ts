import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import * as THREE from 'three';
import {camera, moveSpeed, resizeRendererToDisplaySize, scene} from '../three-components';
import {select, Store} from '@ngrx/store';
import {Subscription} from 'rxjs';
import {CubeService} from './cube.service';
import {createControls} from '../three-components/controls';
import {StopMoveAction} from '../store/action';
import {MoveState, selectMoveMove} from '../store/state';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class HomePage implements OnInit, OnDestroy {

    renderer = null;
    controls = null;
    move: number;
    moveCount = 0;

    subscription: Subscription;

    constructor(private cubeService: CubeService, private store: Store<{ state: MoveState }>) {
        this.subscription = store.pipe(select(selectMoveMove)).subscribe((next: number) => {
            this.move = next;
        });
    }

    ngOnInit() {

        const canvas: HTMLCanvasElement = document.querySelector('#c');
        this.renderer = new THREE.WebGLRenderer({canvas, antialias: true});

        this.cubeService.createCube();

        this.controls = createControls(camera, this.renderer.domElement);
        this.controls.update();

        this.animate();

    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    animate = () => {
        requestAnimationFrame(this.animate);

        if (resizeRendererToDisplaySize(this.renderer)) {
            const c = this.renderer.domElement;
            camera.aspect = c.clientWidth / c.clientHeight;
            camera.updateProjectionMatrix();
        }

        if (this.move) {
            this.cubeService.moveLayer(this.move);
            this.moveCount++;
            if (this.moveCount === moveSpeed) {
                this.store.dispatch(new StopMoveAction(this.move));
                this.moveCount = 0;
            }
        }

        this.controls.update();
        this.renderer.render(scene, camera);

    };

}
