import {COLORS, createPiece, PIECE} from './pieces';
import * as THREE from 'three';

const CUBE_CENTER: PIECE = {
    colors: [COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK,
        COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK],
    position: [0, 0, 0],
};
const RIGHT_CENTER: PIECE = {
    colors: [COLORS.RED, COLORS.RED, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK,
        COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK],
    position: [1, 0, 0],
};

const LEFT_CENTER: PIECE = {
    colors: [COLORS.BLACK, COLORS.BLACK, COLORS.ORANGE, COLORS.ORANGE, COLORS.BLACK, COLORS.BLACK,
        COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK],
    position: [-1, 0, 0],
};

const TOP_CENTER: PIECE = {
    colors: [COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.WHITE, COLORS.WHITE,
        COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK],
    position: [0, 1, 0],
};

const BOTTOM_CENTER: PIECE = {
    colors: [COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK,
        COLORS.YELLOW, COLORS.YELLOW, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK],
    position: [0, -1, 0],
};

const FRONT_CENTER: PIECE = {
    colors: [COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK,
        COLORS.BLACK, COLORS.BLACK, COLORS.GREEN, COLORS.GREEN, COLORS.BLACK, COLORS.BLACK],
    position: [0, 0, 1],
};

const REAR_CENTER: PIECE = {
    colors: [COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK,
        COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLUE, COLORS.BLUE],
    position: [0, 0, -1],
};


const centerPivot = new THREE.Group();
centerPivot.position.set(0, 0, 0);

const movablePivot = new THREE.Group();

const centerPiece = createPiece(CUBE_CENTER);
const rightCenter = createPiece(RIGHT_CENTER);
const leftCenter = createPiece(LEFT_CENTER);
const frontCenter = createPiece(FRONT_CENTER);
const rearCenter = createPiece(REAR_CENTER);
const topCenter = createPiece(TOP_CENTER);
const bottomCenter = createPiece(BOTTOM_CENTER);

export const moveCenterLayerHorizontally = () => {
    centerPivot.add(topCenter, bottomCenter);
    movablePivot.remove(centerPiece, rightCenter, leftCenter, topCenter, bottomCenter, frontCenter, rearCenter);
    movablePivot.add(centerPiece, rightCenter, leftCenter, frontCenter, rearCenter);
    movablePivot.rotation.y += 0.01;
};

export const moveCenterLayerVertically = () => {
    centerPivot.add(rightCenter, leftCenter);
    movablePivot.remove(centerPiece, rightCenter, leftCenter, topCenter, bottomCenter, frontCenter, rearCenter);
    movablePivot.add(centerPiece, topCenter, bottomCenter, frontCenter, rearCenter);
    movablePivot.rotation.x += 0.01;
};

export const createCube = () => {
    centerPivot.add(centerPiece, rightCenter, leftCenter, frontCenter, rearCenter, topCenter, bottomCenter);
    centerPivot.add(movablePivot);
    return centerPivot;
};






