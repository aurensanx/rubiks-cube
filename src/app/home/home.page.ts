import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import * as THREE from 'three';
import {Vector3} from 'three';
import {select, Store} from '@ngrx/store';
import {Subscription} from 'rxjs';
import {CubeService} from './cube.service';
import {MoveService} from './move.service';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import {selectMove, StartMoveAction, State, StopMoveAction} from '@cube-store';
import {CameraService} from '../commons/camera.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class HomePage implements OnInit, OnDestroy {

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 1000);

    renderer = null;
    controls: OrbitControls = null;
    intersection = {
        objects: [],
        selection: null,
        plane: null,
        offset: new THREE.Vector3(),
    };

    canvas: HTMLCanvasElement;

    move: number;
    moveCount = 0;

    isScramble: boolean;

    touch3D: Vector3;

    subscription: Subscription;

    constructor(private cubeService: CubeService, private cameraService: CameraService,
                private moveService: MoveService, private store: Store<{ state: State }>) {

        this.subscription = store.pipe(select(selectMove)).subscribe((next: number) => {
            this.move = next;
            if (this.isScramble && this.move === undefined) {
                this.store.dispatch(new StartMoveAction(this.moveService.getRandomMove()));
            }
        });
    }

    ngOnInit() {

        this.scene.background = new THREE.Color(0x221D2E);
        this.camera.position.z = 16;

        this.canvas = document.querySelector('#c');
        this.renderer = new THREE.WebGLRenderer({canvas: this.canvas, antialias: true});

        this.intersection.objects = this.cubeService.createCube(this.scene);
        // Plane, that helps to determinate an intersection position
        this.intersection.plane = new THREE.Mesh(new THREE.PlaneBufferGeometry(500, 500, 8, 8),
            new THREE.MeshBasicMaterial({color: 0xffffff}));
        this.intersection.plane.visible = false;
        this.scene.add(this.intersection.plane);

        this.controls = this.cameraService.createControls(this.camera, this.renderer.domElement);
        this.controls.update();

        this.animate();

        this.addTouchEvents();

        // TODO animación cámara al entrar
        setTimeout(() => {
            this.scramble();
        }, 1000);

    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    animate = () => {
        requestAnimationFrame(this.animate);

        if (this.cameraService.resizeRendererToDisplaySize(this.renderer)) {
            const c = this.renderer.domElement;
            this.camera.aspect = c.clientWidth / c.clientHeight;
            this.camera.updateProjectionMatrix();
        }

        if (this.move !== undefined) {
            this.cubeService.moveLayer(this.move, this.scene);
            this.moveCount++;
            if (this.moveCount === this.cameraService.cubeSettings.moveSpeed) {
                this.store.dispatch(new StopMoveAction(this.move));
                this.moveCount = 0;
            }
        }

        this.controls.update();
        this.renderer.render(this.scene, this.camera);

    };

    addTouchEvents() {
        this.canvas.addEventListener('touchstart', (ev: TouchEvent) => this.onDocumentMouseDown(ev), false);
        this.canvas.addEventListener('touchmove', ev => this.onDocumentTouchMove(ev), false);
        this.canvas.addEventListener('touchend', () => this.onDocumentMouseUp(), false);
    }

    onDocumentMouseDown(event: TouchEvent) {
        this.touch3D = undefined;
        const vector = this.cameraService.getTouchPosition(event);
        vector.unproject(this.camera);
        this.cameraService.raycaster.set(this.camera.position, vector.sub(this.camera.position).normalize());
        const intersects = this.cameraService.raycaster.intersectObjects(this.intersection.objects);

        if (intersects.length > 0) {
            this.controls.enabled = false;
            this.intersection.selection = intersects[0];
        }
    }

    onDocumentTouchMove(event: TouchEvent) {
        event.preventDefault();
        const touch3D = this.cameraService.getTouchPosition(event);
        touch3D.unproject(this.camera);
        this.cameraService.raycaster.set(this.camera.position, touch3D.sub(this.camera.position).normalize());

        if (this.intersection.selection) {

            const movementVector = this.moveService.guessMouseChange(touch3D, this.touch3D ? this.touch3D : touch3D);

            if (Math.max(Math.abs(movementVector.x), Math.abs(movementVector.y), Math.abs(movementVector.z)) >
                this.cameraService.cubeSettings.sensitivity) {
                this.moveService.moveLayerOnTouch(event, this.intersection.selection, movementVector);
            }
        }
        this.touch3D = touch3D;
    }

    onDocumentMouseUp() {
        this.touch3D = undefined;
        this.intersection.selection = null;
        // Enable the controls
        this.controls.enabled = true;
    }

    // this.gesture = (await import('../../utils/gesture')).createGesture({
    //     el: document,
    //     gestureName: 'menu-swipe',
    //     gesturePriority: 30,
    //     threshold: 10,
    //     canStart: ev => this.canStart(ev),
    //     onWillStart: () => this.onWillStart(),
    //     onStart: () => this.onStart(),
    //     onMove: ev => this.onMove(ev),
    //     onEnd: ev => this.onEnd(ev),
    // });

    scramble() {
        const moveSpeed = this.cameraService.cubeSettings.moveSpeed;
        this.cameraService.cubeSettings.moveSpeed = 1;
        this.isScramble = true;
        this.store.dispatch(new StartMoveAction(this.moveService.getRandomMove()));

        setTimeout(() => {
            this.isScramble = false;
            setTimeout(() => {
                this.cameraService.cubeSettings.moveSpeed = moveSpeed;
            }, 100);
        }, 3000);
    }

}
