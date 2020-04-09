import {PIECE} from './pieces';

const DIMENSION = 3;

const NUMBER_OF_PIECE_FACES = Math.pow(DIMENSION, 2) * 6;

const COLORS = {
    BLUE: 0x0000FF,
    GREEN: 0x0FF000,
    WHITE: 0xFFFFFF,
    YELLOW: 0xFFFF00,
    RED: 0xFF0000,
    ORANGE: 0xFFA500,
    BLACK: 0X00000,
};

const PIECES: PIECE[] = [
    {
        colors: [COLORS.BLACK, COLORS.BLACK, COLORS.GREEN, COLORS.GREEN, COLORS.WHITE, COLORS.WHITE,
            COLORS.BLACK, COLORS.BLACK, COLORS.RED, COLORS.RED, COLORS.BLACK, COLORS.BLACK],
        position: [-1, 1, 1],
    }, {
        colors: [COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.WHITE, COLORS.WHITE,
            COLORS.BLACK, COLORS.BLACK, COLORS.RED, COLORS.RED, COLORS.BLACK, COLORS.BLACK],
        position: [0, 1, 1],
    }, {
        colors: [COLORS.BLUE, COLORS.BLUE, COLORS.BLACK, COLORS.BLACK, COLORS.WHITE, COLORS.WHITE,
            COLORS.BLACK, COLORS.BLACK, COLORS.RED, COLORS.RED, COLORS.BLACK, COLORS.BLACK],
        position: [1, 1, 1],
    }, {
        colors: [COLORS.BLACK, COLORS.BLACK, COLORS.GREEN, COLORS.GREEN, COLORS.BLACK, COLORS.BLACK,
            COLORS.BLACK, COLORS.BLACK, COLORS.RED, COLORS.RED, COLORS.BLACK, COLORS.BLACK],
        position: [-1, 0, 1],
    }, {
        colors: [COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK,
            COLORS.BLACK, COLORS.BLACK, COLORS.RED, COLORS.RED, COLORS.BLACK, COLORS.BLACK],
        position: [0, 0, 1],
    }, {
        colors: [COLORS.BLUE, COLORS.BLUE, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK,
            COLORS.BLACK, COLORS.BLACK, COLORS.RED, COLORS.RED, COLORS.BLACK, COLORS.BLACK],
        position: [1, 0, 1],
    }, {
        colors: [COLORS.BLACK, COLORS.BLACK, COLORS.GREEN, COLORS.GREEN, COLORS.BLACK, COLORS.BLACK,
            COLORS.YELLOW, COLORS.YELLOW, COLORS.RED, COLORS.RED, COLORS.BLACK, COLORS.BLACK],
        position: [-1, -1, 1],
    }, {
        colors: [COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK,
            COLORS.YELLOW, COLORS.YELLOW, COLORS.RED, COLORS.RED, COLORS.BLACK, COLORS.BLACK],
        position: [0, -1, 1],
    }, {
        colors: [COLORS.BLUE, COLORS.BLUE, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK,
            COLORS.YELLOW, COLORS.YELLOW, COLORS.RED, COLORS.RED, COLORS.BLACK, COLORS.BLACK],
        position: [1, -1, 1],
    }, {
        colors: [COLORS.BLACK, COLORS.BLACK, COLORS.GREEN, COLORS.GREEN, COLORS.WHITE, COLORS.WHITE,
            COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK],
        position: [-1, 1, 0],
    }, {
        colors: [COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.WHITE, COLORS.WHITE,
            COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK],
        position: [0, 1, 0],
    }, {
        colors: [COLORS.BLUE, COLORS.BLUE, COLORS.BLACK, COLORS.BLACK, COLORS.WHITE, COLORS.WHITE,
            COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK],
        position: [1, 1, 0],
    }, {
        colors: [COLORS.BLACK, COLORS.BLACK, COLORS.GREEN, COLORS.GREEN, COLORS.BLACK, COLORS.BLACK,
            COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK],
        position: [-1, 0, 0],
    }, {
        colors: [COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK,
            COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK],
        position: [0, 0, 0],
    }, {
        colors: [COLORS.BLUE, COLORS.BLUE, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK,
            COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK],
        position: [1, 0, 0],
    }, {
        colors: [COLORS.BLACK, COLORS.BLACK, COLORS.GREEN, COLORS.GREEN, COLORS.BLACK, COLORS.BLACK,
            COLORS.YELLOW, COLORS.YELLOW, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK],
        position: [-1, -1, 0],
    }, {
        colors: [COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK,
            COLORS.YELLOW, COLORS.YELLOW, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK],
        position: [0, -1, 0],
    }, {
        colors: [COLORS.BLUE, COLORS.BLUE, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK,
            COLORS.YELLOW, COLORS.YELLOW, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK],
        position: [1, -1, 0],
    }, {
        colors: [COLORS.BLACK, COLORS.BLACK, COLORS.GREEN, COLORS.GREEN, COLORS.WHITE, COLORS.WHITE,
            COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.ORANGE, COLORS.ORANGE],
        position: [-1, 1, -1],
    }, {
        colors: [COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.WHITE, COLORS.WHITE,
            COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.ORANGE, COLORS.ORANGE],
        position: [0, 1, -1],
    }, {
        colors: [COLORS.BLUE, COLORS.BLUE, COLORS.BLACK, COLORS.BLACK, COLORS.WHITE, COLORS.WHITE,
            COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.ORANGE, COLORS.ORANGE],
        position: [1, 1, -1],
    }, {
        colors: [COLORS.BLACK, COLORS.BLACK, COLORS.GREEN, COLORS.GREEN, COLORS.BLACK, COLORS.BLACK,
            COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.ORANGE, COLORS.ORANGE],
        position: [-1, 0, -1],
    }, {
        colors: [COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK,
            COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.ORANGE, COLORS.ORANGE],
        position: [0, 0, -1],
    }, {
        colors: [COLORS.BLUE, COLORS.BLUE, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK,
            COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.ORANGE, COLORS.ORANGE],
        position: [1, 0, -1],
    }, {
        colors: [COLORS.BLACK, COLORS.BLACK, COLORS.GREEN, COLORS.GREEN, COLORS.BLACK, COLORS.BLACK,
            COLORS.YELLOW, COLORS.YELLOW, COLORS.BLACK, COLORS.BLACK, COLORS.ORANGE, COLORS.ORANGE],
        position: [-1, -1, -1],
    }, {
        colors: [COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK,
            COLORS.YELLOW, COLORS.YELLOW, COLORS.BLACK, COLORS.BLACK, COLORS.ORANGE, COLORS.ORANGE],
        position: [0, -1, -1],
    }, {
        colors: [COLORS.BLUE, COLORS.BLUE, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK, COLORS.BLACK,
            COLORS.YELLOW, COLORS.YELLOW, COLORS.BLACK, COLORS.BLACK, COLORS.ORANGE, COLORS.ORANGE],
        position: [1, -1, -1],
    }
];


const FACES = {
    UP: [0, 1, 2, 9, 10, 11, 18, 19, 20],
    DOWN: [6, 7, 8, 15, 16, 17, 24, 25, 26],
    RIGHT: [2, 5, 8, 11, 14, 17, 20, 23, 26],
    LEFT: [0, 3, 6, 9, 12, 15, 18, 21, 24],
    FRONT: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    BACK: [18, 19, 20, 21, 22, 23, 24, 25, 26],
    E: [3, 4, 5, 12, 13, 14, 21, 22, 23],
    M: [1, 4, 7, 10, 13, 16, 19, 22, 25],
    V: [9, 10, 11, 13, 14, 17, 16, 15, 12],
};


export const CUBE = {
    DIMENSION,
    NUMBER_OF_PIECE_FACES,
    COLORS,
    PIECES,
    FACES,
};


// el cubo son 27 piezas
// la cara UP siempre está en las posiciones 0, 1, 2, 9,10, 11, 18, 19, 20
// cuando se hace un movimiento cambia el orden de las piezas en el array del cubo,
// entonces cuando se mueve la cara de arriba cada vez son unas piezas diferentes


// problema, qué cara se ha seleccionado con el ratón?





