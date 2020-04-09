import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import * as THREE from 'three';
import {camera, raycaster, resizeRendererToDisplaySize, scene} from '../three-components';
import {select, Store} from '@ngrx/store';
import {Subscription} from 'rxjs';
import {CubeService} from './cube.service';
import {createControls, cubeSettings} from '../three-components/controls';
import {MoveService} from './move.service';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import {selectMove, State, StopMoveAction} from '@cube-store';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class HomePage implements OnInit, OnDestroy {

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

    subscription: Subscription;

    constructor(private cubeService: CubeService, private moveService: MoveService, private store: Store<{ state: State }>) {
        this.subscription = store.pipe(select(selectMove)).subscribe((next: number) => {
            this.move = next;
        });
    }

    ngOnInit() {

        this.canvas = document.querySelector('#c');
        this.renderer = new THREE.WebGLRenderer({canvas: this.canvas, antialias: true});

        this.intersection.objects = this.cubeService.createCube();
        // Plane, that helps to determinate an intersection position
        this.intersection.plane = new THREE.Mesh(new THREE.PlaneBufferGeometry(500, 500, 8, 8),
            new THREE.MeshBasicMaterial({color: 0xffffff}));
        this.intersection.plane.visible = false;
        scene.add(this.intersection.plane);

        this.controls = createControls(camera, this.renderer.domElement);
        this.controls.update();

        this.animate();

        this.canvas.addEventListener('mousedown', ev => this.onDocumentMouseDown(ev), false);
        // this.canvas.addEventListener('touchdown', ev => this.onDocumentMouseDown(ev), false);
        this.canvas.addEventListener('mousemove', ev => this.onDocumentMouseMove(ev), false);
        // this.canvas.addEventListener('touchmove', ev => this.onDocumentMouseMove(ev), false);
        this.canvas.addEventListener('mouseup', () => this.onDocumentMouseUp(), false);
        // this.canvas.addEventListener('touchup', () => this.onDocumentMouseUp(), false);

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

        if (this.move !== undefined) {
            this.cubeService.moveLayer(this.move);
            this.moveCount++;
            if (this.moveCount === cubeSettings.moveSpeed) {
                this.store.dispatch(new StopMoveAction(this.move));
                this.moveCount = 0;
            }
        }

        this.controls.update();
        this.renderer.render(scene, camera);

    };

    onDocumentMouseDown(event) {
        // Get mouse position
        const mouseX = (event.clientX / this.canvas.width) * 2 - 1;
        const mouseY = -(event.clientY / this.canvas.height) * 2 + 1;

        // Get 3D vector from 3D mouse position using 'unproject' function
        const vector = new THREE.Vector3(mouseX, mouseY, 1);
        vector.unproject(camera);

        // Set the raycaster position
        raycaster.set(camera.position, vector.sub(camera.position).normalize());

        // Find all intersected objects
        const intersects = raycaster.intersectObjects(this.intersection.objects);

        if (intersects.length > 0) {
            // Disable the controls
            this.controls.enabled = false;

            // Set the selection - first intersected object
            this.intersection.selection = intersects[0];

            // Calculate the offset
            // intersects = raycaster.intersectObject(this.intersection.plane);
            // this.intersection.offset.copy(intersects[0].point).sub(this.intersection.plane.position);
        }

    }

    onDocumentMouseMove(event: MouseEvent) {

        event.preventDefault();

        if (this.intersection.selection && Math.abs(event.movementX || event.movementY) > cubeSettings.sensitivity) {
            this.moveService.moveLayerOnTouch(event, this.intersection.selection, this.controls);
        }

        // Get mouse position
        // const mouseX = (event.clientX / this.canvas.width) * 2 - 1;
        // const mouseY = -(event.clientY / this.canvas.height) * 2 + 1;

        // Get 3D vector from 3D mouse position using 'unproject' function
        // const vector = new THREE.Vector3(mouseX, mouseY, 1);
        // vector.unproject(camera);

        // Set the raycaster position
        // raycaster.set( camera.position, vector.sub( camera.position ).normalize() );
        //
        // if (this.intersection.selection) {
        //     // Check the position where the plane is intersected
        //     const intersects = raycaster.intersectObject(this.intersection.plane);
        //     // Reposition the object based on the intersection point with the plane
        //     this.intersection.selection.position.copy(intersects[0].point.sub(this.intersection.offset));
        // } else {
        //     // Update position of the plane if need
        //     const intersects = raycaster.intersectObjects(this.intersection.objects);
        //     if (intersects.length > 0) {
        //         this.intersection.plane.position.copy(intersects[0].object.position);
        //         this.intersection.plane.lookAt(camera.position);
        //     }
        // }
    }

    onDocumentMouseUp() {
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

}
