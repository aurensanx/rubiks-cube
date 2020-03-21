import {TrackballControls} from 'three/examples/jsm/controls/TrackballControls';

export const createControls = (camera, domElement) => {
    const controls = new TrackballControls(camera, domElement);
    controls.noZoom = true;
    controls.noPan = true;
    controls.rotateSpeed = 2;
    return controls;
};

export const cubeSettings = {
    moveSpeed: 50,
    initialScrambleMoves: 10000,
};




