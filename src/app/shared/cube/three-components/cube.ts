import {createPiece} from './pieces';
import {CUBE_CONFIGURATIONS} from './configurations';

const DIMENSION = 3;

const NUMBER_OF_PIECES = Math.pow(DIMENSION, 2) * 3;
const NUMBER_OF_FACES = Math.pow(DIMENSION, 2) * 6;


export const CUBE = {
    DIMENSION,
    NUMBER_OF_PIECES,
    NUMBER_OF_FACES,
};


export const createCube = cubeConfiguration => CUBE_CONFIGURATIONS[cubeConfiguration].map(createPiece);









