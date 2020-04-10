import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

export const createControls = (camera, domElement) => {
    const controls = new OrbitControls(camera, domElement);
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


export const cubeSettings = {
    moveSpeed: 20,
    initialScrambleMoves: 10000,
    sensitivity: 0.005
};




