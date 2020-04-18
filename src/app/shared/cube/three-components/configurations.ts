import {PIECE} from './pieces';


const BLUE = 0x0000FF;
const GREEN = 0x0FF000;
const WHITE = 0xFFFFFF;
const YELLOW = 0xFFFF00;
const RED = 0xFF0000;
const ORANGE = 0xFFA500;
const BLACK = 0X00000;
const GREY = 0XC0C0C0;

// R - L - U - D - F - B
export const CUBE_CONFIGURATIONS: PIECE[][] = [
    // 0
    [{
        colors: [BLACK, BLACK, GREEN, GREEN, WHITE, WHITE, BLACK, BLACK, RED, RED, BLACK, BLACK],
        position: [-1, 1, 1],
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, RED, RED, BLACK, BLACK],
        position: [0, 1, 1],
    }, {
        colors: [BLUE, BLUE, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, RED, RED, BLACK, BLACK],
        position: [1, 1, 1],
    }, {
        colors: [BLACK, BLACK, GREEN, GREEN, BLACK, BLACK, BLACK, BLACK, RED, RED, BLACK, BLACK],
        position: [-1, 0, 1],
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, RED, RED, BLACK, BLACK],
        position: [0, 0, 1],
    }, {
        colors: [BLUE, BLUE, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, RED, RED, BLACK, BLACK],
        position: [1, 0, 1],
    }, {
        colors: [BLACK, BLACK, GREEN, GREEN, BLACK, BLACK, YELLOW, YELLOW, RED, RED, BLACK, BLACK],
        position: [-1, -1, 1],
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, YELLOW, YELLOW, RED, RED, BLACK, BLACK],
        position: [0, -1, 1],
    }, {
        colors: [BLUE, BLUE, BLACK, BLACK, BLACK, BLACK, YELLOW, YELLOW, RED, RED, BLACK, BLACK],
        position: [1, -1, 1],
    }, {
        colors: [BLACK, BLACK, GREEN, GREEN, WHITE, WHITE, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: [-1, 1, 0],
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: [0, 1, 0],
    }, {
        colors: [BLUE, BLUE, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: [1, 1, 0],
    }, {
        colors: [BLACK, BLACK, GREEN, GREEN, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: [-1, 0, 0],
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: [0, 0, 0],
    }, {
        colors: [BLUE, BLUE, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: [1, 0, 0],
    }, {
        colors: [BLACK, BLACK, GREEN, GREEN, BLACK, BLACK, YELLOW, YELLOW, BLACK, BLACK, BLACK, BLACK],
        position: [-1, -1, 0],
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, YELLOW, YELLOW, BLACK, BLACK, BLACK, BLACK],
        position: [0, -1, 0],
    }, {
        colors: [BLUE, BLUE, BLACK, BLACK, BLACK, BLACK, YELLOW, YELLOW, BLACK, BLACK, BLACK, BLACK],
        position: [1, -1, 0],
    }, {
        colors: [BLACK, BLACK, GREEN, GREEN, WHITE, WHITE, BLACK, BLACK, BLACK, BLACK, ORANGE, ORANGE],
        position: [-1, 1, -1],
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, BLACK, BLACK, ORANGE, ORANGE],
        position: [0, 1, -1],
    }, {
        colors: [BLUE, BLUE, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, BLACK, BLACK, ORANGE, ORANGE],
        position: [1, 1, -1],
    }, {
        colors: [BLACK, BLACK, GREEN, GREEN, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, ORANGE, ORANGE],
        position: [-1, 0, -1],
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, ORANGE, ORANGE],
        position: [0, 0, -1],
    }, {
        colors: [BLUE, BLUE, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, ORANGE, ORANGE],
        position: [1, 0, -1],
    }, {
        colors: [BLACK, BLACK, GREEN, GREEN, BLACK, BLACK, YELLOW, YELLOW, BLACK, BLACK, ORANGE, ORANGE],
        position: [-1, -1, -1],
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, YELLOW, YELLOW, BLACK, BLACK, ORANGE, ORANGE],
        position: [0, -1, -1],
    }, {
        colors: [BLUE, BLUE, BLACK, BLACK, BLACK, BLACK, YELLOW, YELLOW, BLACK, BLACK, ORANGE, ORANGE],
        position: [1, -1, -1],
    }],

    // 1

    [{
        colors: [BLACK, BLACK, GREY, GREY, GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK],
        position: [-1, 1, 1],
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK],
        position: [0, 1, 1],
    }, {
        colors: [GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK],
        position: [1, 1, 1],
    }, {
        colors: [BLACK, BLACK, GREEN, GREEN, BLACK, BLACK, BLACK, BLACK, RED, RED, BLACK, BLACK],
        position: [-1, 0, 1],
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, RED, RED, BLACK, BLACK],
        position: [0, 0, 1],
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLUE, BLUE, BLACK, BLACK],
        position: [1, 0, 1],
    }, {
        colors: [BLACK, BLACK, GREEN, GREEN, BLACK, BLACK, YELLOW, YELLOW, RED, RED, BLACK, BLACK],
        position: [-1, -1, 1],
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, YELLOW, YELLOW, RED, RED, BLACK, BLACK],
        position: [0, -1, 1],
    }, {
        colors: [BLUE, BLUE, BLACK, BLACK, BLACK, BLACK, YELLOW, YELLOW, RED, RED, BLACK, BLACK],
        position: [1, -1, 1],
    }, {
        colors: [BLACK, BLACK, GREY, GREY, GREY, GREY, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: [-1, 1, 0],
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, GREY, GREY, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: [0, 1, 0],
    }, {
        colors: [GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: [1, 1, 0],
    }, {
        colors: [BLACK, BLACK, GREEN, GREEN, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: [-1, 0, 0],
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: [0, 0, 0],
    }, {
        colors: [BLUE, BLUE, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: [1, 0, 0],
    }, {
        colors: [BLACK, BLACK, GREEN, GREEN, BLACK, BLACK, YELLOW, YELLOW, BLACK, BLACK, BLACK, BLACK],
        position: [-1, -1, 0],
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, YELLOW, YELLOW, BLACK, BLACK, BLACK, BLACK],
        position: [0, -1, 0],
    }, {
        colors: [BLUE, BLUE, BLACK, BLACK, BLACK, BLACK, YELLOW, YELLOW, BLACK, BLACK, BLACK, BLACK],
        position: [1, -1, 0],
    }, {
        colors: [BLACK, BLACK, GREY, GREY, GREY, GREY, BLACK, BLACK, BLACK, BLACK, GREY, GREY],
        position: [-1, 1, -1],
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, GREY, GREY, BLACK, BLACK, BLACK, BLACK, GREY, GREY],
        position: [0, 1, -1],
    }, {
        colors: [GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK, BLACK, BLACK, GREY, GREY],
        position: [1, 1, -1],
    }, {
        colors: [BLACK, BLACK, GREEN, GREEN, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, ORANGE, ORANGE],
        position: [-1, 0, -1],
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, ORANGE, ORANGE],
        position: [0, 0, -1],
    }, {
        colors: [BLUE, BLUE, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, ORANGE, ORANGE],
        position: [1, 0, -1],
    }, {
        colors: [BLACK, BLACK, GREEN, GREEN, BLACK, BLACK, YELLOW, YELLOW, BLACK, BLACK, ORANGE, ORANGE],
        position: [-1, -1, -1],
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, YELLOW, YELLOW, BLACK, BLACK, ORANGE, ORANGE],
        position: [0, -1, -1],
    }, {
        colors: [BLUE, BLUE, BLACK, BLACK, BLACK, BLACK, YELLOW, YELLOW, BLACK, BLACK, ORANGE, ORANGE],
        position: [1, -1, -1],
    }]
];
