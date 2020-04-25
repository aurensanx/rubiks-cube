import {AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges} from '@angular/core';
import {Subscription} from 'rxjs';
import {CubeService} from './cube.service';
import {select, Store} from '@ngrx/store';
import {createCube, getRandomMove, InitCubeAction, selectMove, StartMoveAction, State, StopMoveAction} from '../../cube';
import {Mesh, MeshBasicMaterial, Object3D, PerspectiveCamera, PlaneBufferGeometry, Scene, Vector3, WebGLRenderer} from 'three';
import {CameraService, MoveService, SettingsService} from '../../services';

@Component({
    selector: 'app-cube',
    templateUrl: './cube.component.html',
    styleUrls: ['./cube.component.scss'],
})
export class CubeComponent implements AfterViewInit, OnDestroy, OnChanges {

    @Input() isPlay: boolean;
    @Input() cubeConfiguration: number;
    @Input() resetCube: boolean;

    scene: Scene;
    camera: PerspectiveCamera;
    centerPivot: Object3D;
    canvas: HTMLCanvasElement;

    renderer = null;
    controls = null;
    intersection = {
        objects: [],
        selection: null,
        plane: null,
    };

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

    ngAfterViewInit() {

        this.scene = this.cameraService.createScene();
        this.camera = this.cameraService.createCamera(this.isPlay);
        this.centerPivot = this.cubeService.createCenterPivot();

        this.canvas = document.querySelector(`#c`);
        this.renderer = new WebGLRenderer({canvas: this.canvas, antialias: true});

        // Plane, that helps to determinate an intersection position
        this.intersection.plane = new Mesh(new PlaneBufferGeometry(500, 500, 8, 8),
            new MeshBasicMaterial({color: 0xffffff}));
        this.intersection.plane.visible = false;
        this.scene.add(this.intersection.plane);

        this.controls = this.cameraService.createControls(this.camera, this.renderer.domElement);
        this.controls.update();
        this.controls.enabled = false;

        this.initCube();

        this.animate();

        if (this.isPlay) {
            // TODO animación cámara al entrar
            setTimeout(() => {
                this.scramble();
            }, 1000);
        }

    }

    ngOnDestroy() {
        this.move = undefined;
        this.subscription.unsubscribe();
    }

    ngOnChanges({resetCube}: SimpleChanges) {
        if (resetCube && !resetCube.isFirstChange()) {
            this.initCube();
        }
    }

    initCube() {

        this.scene.remove(...this.intersection.objects);
        this.cameraService.setInitialPosition(this.camera, this.isPlay);

        this.moveCount = 0;
        this.isScramble = false;

        this.intersection.objects = createCube(this.cubeConfiguration);

        this.store.dispatch(new InitCubeAction());
        this.scene.add(...this.intersection.objects);


        // this.cameraService.fitCameraToSelection(this.camera, this.controls, this.intersection.objects);

    }

    animate = () => {
        requestAnimationFrame(this.animate);

        if (this.cameraService.resizeRendererToDisplaySize(this.renderer)) {
            const c = this.renderer.domElement;
            this.camera.aspect = c.clientWidth / c.clientHeight;
            this.camera.updateProjectionMatrix();
        }

        if (this.move !== undefined) {
            this.cubeService.moveLayer(this.move, this.intersection.objects, this.centerPivot, this.scene, this.camera);
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
                this.controls.enabled = true;
            }, 100);
        }, 3000);
    }

}
