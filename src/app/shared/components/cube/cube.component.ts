import {Component, OnDestroy, OnInit} from '@angular/core';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import {Subscription} from 'rxjs';
import {CubeService} from './cube.service';
import {select, Store} from '@ngrx/store';
import {createCube, getRandomMove, InitCubeAction, selectMove, StartMoveAction, State, StopMoveAction} from '../../cube';
import {Color, Mesh, MeshBasicMaterial, Object3D, PerspectiveCamera, PlaneBufferGeometry, Scene, Vector3, WebGLRenderer} from 'three';
import {CameraService, MoveService, SettingsService} from '../../services';

@Component({
    selector: 'app-cube',
    templateUrl: './cube.component.html',
    styleUrls: ['./cube.component.scss'],
})
export class CubeComponent implements OnInit, OnDestroy {

    scene: Scene;
    camera: PerspectiveCamera;

    centerPivot: Object3D;

    renderer = null;
    controls: OrbitControls = null;
    intersection = {
        objects: [],
        selection: null,
        plane: null,
    };

    canvas: HTMLCanvasElement;

    move: number;
    moveCount: number;

    isScramble: boolean;

    touch3D: Vector3;

    subscription: Subscription;

    constructor(private cubeService: CubeService, private cameraService: CameraService,
                private moveService: MoveService, private settingsService: SettingsService,
                private store: Store<{ state: State }>) {

        this.subscription = store.pipe(select(selectMove)).subscribe((next: number) => {
            this.move = next;
            if (this.isScramble && this.move === undefined) {
                this.store.dispatch(new StartMoveAction(getRandomMove()));
            }
        });
    }

    ngOnInit() {

        this.scene = new Scene();
        this.scene.background = new Color(0x383A3E);
        this.camera = new PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.z = 16;
        this.centerPivot = new Object3D();
        this.centerPivot.position.set(0, 0, 0);
        this.centerPivot.updateMatrixWorld();

        this.moveCount = 0;
        this.isScramble = false;

        this.canvas = document.querySelector('#c');
        this.renderer = new WebGLRenderer({canvas: this.canvas, antialias: true});

        this.intersection.objects = createCube();

        this.store.dispatch(new InitCubeAction());
        this.scene.add(...this.intersection.objects);

        // Plane, that helps to determinate an intersection position
        this.intersection.plane = new Mesh(new PlaneBufferGeometry(500, 500, 8, 8),
            new MeshBasicMaterial({color: 0xffffff}));
        this.intersection.plane.visible = false;
        this.scene.add(this.intersection.plane);

        this.controls = this.cameraService.createControls(this.camera, this.renderer.domElement);
        this.controls.update();

        this.animate();

        // TODO animación cámara al entrar
        setTimeout(() => {
            this.scramble();
        }, 1000);

    }

    ngOnDestroy() {
        this.move = undefined;
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
            this.cubeService.moveLayer(this.move, this.intersection.objects, this.centerPivot, this.scene);
            this.moveCount++;
            if (this.moveCount === this.settingsService.cubeSettings.moveSpeedCounts) {
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
                this.settingsService.cubeSettings.sensitivityNormalized) {
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
        const moveSpeedCounts = this.settingsService.cubeSettings.moveSpeedCounts;
        this.settingsService.cubeSettings.moveSpeedCounts = 1;
        this.isScramble = true;
        this.store.dispatch(new StartMoveAction(getRandomMove()));

        setTimeout(() => {
            this.isScramble = false;
            setTimeout(() => {
                this.settingsService.cubeSettings.moveSpeedCounts = moveSpeedCounts;
                this.addTouchEvents();
            }, 100);
        }, 3000);
    }

}
