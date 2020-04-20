import {PIECE} from './pieces';


const BLUE = 0x0000FF;
const GREEN = 0x0FF000;
const WHITE = 0xFFFFFF;
const YELLOW = 0xFFFF00;
const RED = 0xFF0000;
const ORANGE = 0xFFA500;
const BLACK = 0X00000;
const GREY = 0XC0C0C0;

const position0 = [-1, 1, 1];
const position1 = [0, 1, 1];
const position2 = [1, 1, 1];
const position3 = [-1, 0, 1];
const position4 = [0, 0, 1];
const position5 = [1, 0, 1];
const position6 = [-1, -1, 1];
const position7 = [0, -1, 1];
const position8 = [1, -1, 1];
const position9 = [-1, 1, 0];
const position10 = [0, 1, 0];
const position11 = [1, 1, 0];
const position12 = [-1, 0, 0];
const position13 = [0, 0, 0];
const position14 = [1, 0, 0];
const position15 = [-1, -1, 0];
const position16 = [0, -1, 0];
const position17 = [1, -1, 0];
const position18 = [-1, 1, -1];
const position19 = [0, 1, -1];
const position20 = [1, 1, -1];
const position21 = [-1, 0, -1];
const position22 = [0, 0, -1];
const position23 = [1, 0, -1];
const position24 = [-1, -1, -1];
const position25 = [0, -1, -1];
const position26 = [1, -1, -1];

// R - L - U - D - F - B
export const CUBE_CONFIGURATIONS: PIECE[][] = [
    // 0
    [{
        colors: [BLACK, BLACK, ORANGE, ORANGE, YELLOW, YELLOW, BLACK, BLACK, BLUE, BLUE, BLACK, BLACK],
        position: position0,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, YELLOW, YELLOW, BLACK, BLACK, BLUE, BLUE, BLACK, BLACK],
        position: position1,
    }, {
        colors: [RED, RED, BLACK, BLACK, YELLOW, YELLOW, BLACK, BLACK, BLUE, BLUE, BLACK, BLACK],
        position: position2,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, BLACK, BLACK, BLUE, BLUE, BLACK, BLACK],
        position: position3,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLUE, BLUE, BLACK, BLACK],
        position: position4,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLUE, BLUE, BLACK, BLACK],
        position: position5,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, WHITE, WHITE, BLUE, BLUE, BLACK, BLACK],
        position: position6,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLUE, BLUE, BLACK, BLACK],
        position: position7,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLUE, BLUE, BLACK, BLACK],
        position: position8,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, YELLOW, YELLOW, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position9,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, YELLOW, YELLOW, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position10,
    }, {
        colors: [RED, RED, BLACK, BLACK, YELLOW, YELLOW, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position11,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position12,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position13,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position14,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, BLACK, BLACK],
        position: position15,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, BLACK, BLACK],
        position: position16,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, BLACK, BLACK],
        position: position17,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, YELLOW, YELLOW, BLACK, BLACK, BLACK, BLACK, GREEN, GREEN],
        position: position18,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, YELLOW, YELLOW, BLACK, BLACK, BLACK, BLACK, GREEN, GREEN],
        position: position19,
    }, {
        colors: [RED, RED, BLACK, BLACK, YELLOW, YELLOW, BLACK, BLACK, BLACK, BLACK, GREEN, GREEN],
        position: position20,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, GREEN, GREEN],
        position: position21,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, GREEN, GREEN],
        position: position22,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, GREEN, GREEN],
        position: position23,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, GREEN, GREEN],
        position: position24,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, GREEN, GREEN],
        position: position25,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, GREEN, GREEN],
        position: position26,
    }],

    // 1

    [{
        colors: [BLACK, BLACK, GREY, GREY, GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK],
        position: position0,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK],
        position: position1,
    }, {
        colors: [GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK],
        position: position2,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, BLACK, BLACK, BLUE, BLUE, BLACK, BLACK],
        position: position3,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLUE, BLUE, BLACK, BLACK],
        position: position4,
    }, {
        colors: [BLUE, BLUE, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, RED, RED, BLACK, BLACK],
        position: position5,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, WHITE, WHITE, BLUE, BLUE, BLACK, BLACK],
        position: position6,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLUE, BLUE, BLACK, BLACK],
        position: position7,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLUE, BLUE, BLACK, BLACK],
        position: position8,
    }, {
        colors: [BLACK, BLACK, GREY, GREY, GREY, GREY, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position9,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, GREY, GREY, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position10,
    }, {
        colors: [GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position11,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position12,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position13,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position14,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, BLACK, BLACK],
        position: position15,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, BLACK, BLACK],
        position: position16,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, BLACK, BLACK],
        position: position17,
    }, {
        colors: [BLACK, BLACK, GREY, GREY, GREY, GREY, BLACK, BLACK, BLACK, BLACK, GREY, GREY],
        position: position18,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, GREY, GREY, BLACK, BLACK, BLACK, BLACK, GREY, GREY],
        position: position19,
    }, {
        colors: [GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK, BLACK, BLACK, GREY, GREY],
        position: position20,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, GREEN, GREEN],
        position: position21,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, GREEN, GREEN],
        position: position22,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, GREEN, GREEN],
        position: position23,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, GREEN, GREEN],
        position: position24,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, GREEN, GREEN],
        position: position25,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, GREEN, GREEN],
        position: position26,
    }],

    // 2
    [{
        colors: [BLACK, BLACK, GREY, GREY, GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK],
        position: position0,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, RED, RED, BLACK, BLACK, BLUE, BLUE, BLACK, BLACK],
        position: position1,
    }, {
        colors: [GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK],
        position: position2,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, BLACK, BLACK, BLUE, BLUE, BLACK, BLACK],
        position: position3,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLUE, BLUE, BLACK, BLACK],
        position: position4,
    }, {
        colors: [GREY, GREY, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, GREY, GREY, BLACK, BLACK],
        position: position5,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, WHITE, WHITE, BLUE, BLUE, BLACK, BLACK],
        position: position6,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLUE, BLUE, BLACK, BLACK],
        position: position7,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLUE, BLUE, BLACK, BLACK],
        position: position8,
    }, {
        colors: [BLACK, BLACK, GREY, GREY, GREY, GREY, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position9,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, GREY, GREY, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position10,
    }, {
        colors: [GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position11,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position12,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position13,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position14,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, BLACK, BLACK],
        position: position15,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, BLACK, BLACK],
        position: position16,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, BLACK, BLACK],
        position: position17,
    }, {
        colors: [BLACK, BLACK, GREY, GREY, GREY, GREY, BLACK, BLACK, BLACK, BLACK, GREY, GREY],
        position: position18,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, GREY, GREY, BLACK, BLACK, BLACK, BLACK, GREY, GREY],
        position: position19,
    }, {
        colors: [GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK, BLACK, BLACK, GREY, GREY],
        position: position20,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, GREEN, GREEN],
        position: position21,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, GREEN, GREEN],
        position: position22,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, GREEN, GREEN],
        position: position23,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, GREEN, GREEN],
        position: position24,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, GREEN, GREEN],
        position: position25,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, GREEN, GREEN],
        position: position26,
    }],

    // 3
    [{
        colors: [BLACK, BLACK, GREY, GREY, GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK],
        position: position0,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK],
        position: position1,
    }, {
        colors: [GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK],
        position: position2,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, BLACK, BLACK, BLUE, BLUE, BLACK, BLACK],
        position: position3,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLUE, BLUE, BLACK, BLACK],
        position: position4,
    }, {
        colors: [GREY, GREY, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, GREY, GREY, BLACK, BLACK],
        position: position5,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, WHITE, WHITE, BLUE, BLUE, BLACK, BLACK],
        position: position6,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLUE, BLUE, BLACK, BLACK],
        position: position7,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLUE, BLUE, BLACK, BLACK],
        position: position8,
    }, {
        colors: [BLACK, BLACK, GREY, GREY, GREY, GREY, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position9,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, GREY, GREY, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position10,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLUE, BLUE, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position11,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position12,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position13,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position14,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, BLACK, BLACK],
        position: position15,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, BLACK, BLACK],
        position: position16,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, BLACK, BLACK],
        position: position17,
    }, {
        colors: [BLACK, BLACK, GREY, GREY, GREY, GREY, BLACK, BLACK, BLACK, BLACK, GREY, GREY],
        position: position18,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, GREY, GREY, BLACK, BLACK, BLACK, BLACK, GREY, GREY],
        position: position19,
    }, {
        colors: [GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK, BLACK, BLACK, GREY, GREY],
        position: position20,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, GREEN, GREEN],
        position: position21,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, GREEN, GREEN],
        position: position22,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, GREEN, GREEN],
        position: position23,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, GREEN, GREEN],
        position: position24,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, GREEN, GREEN],
        position: position25,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, GREEN, GREEN],
        position: position26,
    }],

    // 4
    [{
        colors: [BLACK, BLACK, GREY, GREY, GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK],
        position: position0,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK],
        position: position1,
    }, {
        colors: [GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK],
        position: position2,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, BLACK, BLACK, BLUE, BLUE, BLACK, BLACK],
        position: position3,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLUE, BLUE, BLACK, BLACK],
        position: position4,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLUE, BLUE, BLACK, BLACK],
        position: position5,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, WHITE, WHITE, BLUE, BLUE, BLACK, BLACK],
        position: position6,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLUE, BLUE, BLACK, BLACK],
        position: position7,
    }, {
        colors: [BLUE, BLUE, BLACK, BLACK, BLACK, BLACK, RED, RED, WHITE, WHITE, BLACK, BLACK],
        position: position8,
    }, {
        colors: [BLACK, BLACK, GREY, GREY, GREY, GREY, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position9,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, GREY, GREY, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position10,
    }, {
        colors: [GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position11,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position12,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position13,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position14,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, BLACK, BLACK],
        position: position15,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, BLACK, BLACK],
        position: position16,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, BLACK, BLACK],
        position: position17,
    }, {
        colors: [BLACK, BLACK, GREY, GREY, GREY, GREY, BLACK, BLACK, BLACK, BLACK, GREY, GREY],
        position: position18,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, GREY, GREY, BLACK, BLACK, BLACK, BLACK, GREY, GREY],
        position: position19,
    }, {
        colors: [GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK, BLACK, BLACK, GREY, GREY],
        position: position20,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, GREEN, GREEN],
        position: position21,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, GREEN, GREEN],
        position: position22,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, GREEN, GREEN],
        position: position23,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, GREEN, GREEN],
        position: position24,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, GREEN, GREEN],
        position: position25,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, GREEN, GREEN],
        position: position26,
    }],

    // 5
    [{
        colors: [BLACK, BLACK, GREY, GREY, GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK],
        position: position0,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK],
        position: position1,
    }, {
        colors: [GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK],
        position: position2,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, BLACK, BLACK, BLUE, BLUE, BLACK, BLACK],
        position: position3,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLUE, BLUE, BLACK, BLACK],
        position: position4,
    }, {
        colors: [BLUE, BLUE, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, RED, RED, BLACK, BLACK],
        position: position5,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, WHITE, WHITE, BLUE, BLUE, BLACK, BLACK],
        position: position6,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLUE, BLUE, BLACK, BLACK],
        position: position7,
    }, {
        colors: [BLUE, BLUE, BLACK, BLACK, BLACK, BLACK, RED, RED, WHITE, WHITE, BLACK, BLACK],
        position: position8,
    }, {
        colors: [BLACK, BLACK, GREY, GREY, GREY, GREY, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position9,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, GREY, GREY, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position10,
    }, {
        colors: [GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position11,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position12,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position13,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position14,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, BLACK, BLACK],
        position: position15,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, BLACK, BLACK],
        position: position16,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, BLACK, BLACK],
        position: position17,
    }, {
        colors: [BLACK, BLACK, GREY, GREY, GREY, GREY, BLACK, BLACK, BLACK, BLACK, GREY, GREY],
        position: position18,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, GREY, GREY, BLACK, BLACK, BLACK, BLACK, GREY, GREY],
        position: position19,
    }, {
        colors: [GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK, BLACK, BLACK, GREY, GREY],
        position: position20,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, GREEN, GREEN],
        position: position21,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, GREEN, GREEN],
        position: position22,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, GREEN, GREEN],
        position: position23,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, GREEN, GREEN],
        position: position24,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, GREEN, GREEN],
        position: position25,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, GREEN, GREEN],
        position: position26,
    }],

    // 6
    [{
        colors: [BLACK, BLACK, GREY, GREY, GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK],
        position: position0,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, RED, RED, BLACK, BLACK, BLUE, BLUE, BLACK, BLACK],
        position: position1,
    }, {
        colors: [GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK],
        position: position2,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, BLACK, BLACK, BLUE, BLUE, BLACK, BLACK],
        position: position3,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLUE, BLUE, BLACK, BLACK],
        position: position4,
    }, {
        colors: [GREY, GREY, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, GREY, GREY, BLACK, BLACK],
        position: position5,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, WHITE, WHITE, BLUE, BLUE, BLACK, BLACK],
        position: position6,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLUE, BLUE, BLACK, BLACK],
        position: position7,
    }, {
        colors: [BLUE, BLUE, BLACK, BLACK, BLACK, BLACK, RED, RED, WHITE, WHITE, BLACK, BLACK],
        position: position8,
    }, {
        colors: [BLACK, BLACK, GREY, GREY, GREY, GREY, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position9,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, GREY, GREY, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position10,
    }, {
        colors: [GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position11,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position12,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position13,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position14,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, BLACK, BLACK],
        position: position15,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, BLACK, BLACK],
        position: position16,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, BLACK, BLACK],
        position: position17,
    }, {
        colors: [BLACK, BLACK, GREY, GREY, GREY, GREY, BLACK, BLACK, BLACK, BLACK, GREY, GREY],
        position: position18,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, GREY, GREY, BLACK, BLACK, BLACK, BLACK, GREY, GREY],
        position: position19,
    }, {
        colors: [GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK, BLACK, BLACK, GREY, GREY],
        position: position20,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, GREEN, GREEN],
        position: position21,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, GREEN, GREEN],
        position: position22,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, GREEN, GREEN],
        position: position23,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, GREEN, GREEN],
        position: position24,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, GREEN, GREEN],
        position: position25,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, GREEN, GREEN],
        position: position26,
    }],

    // 7
    [{
        colors: [BLACK, BLACK, GREY, GREY, GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK],
        position: position0,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK],
        position: position1,
    }, {
        colors: [GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK],
        position: position2,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, BLACK, BLACK, BLUE, BLUE, BLACK, BLACK],
        position: position3,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLUE, BLUE, BLACK, BLACK],
        position: position4,
    }, {
        colors: [GREY, GREY, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, GREY, GREY, BLACK, BLACK],
        position: position5,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, WHITE, WHITE, BLUE, BLUE, BLACK, BLACK],
        position: position6,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLUE, BLUE, BLACK, BLACK],
        position: position7,
    }, {
        colors: [BLUE, BLUE, BLACK, BLACK, BLACK, BLACK, RED, RED, WHITE, WHITE, BLACK, BLACK],
        position: position8,
    }, {
        colors: [BLACK, BLACK, GREY, GREY, GREY, GREY, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position9,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, GREY, GREY, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position10,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLUE, BLUE, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position11,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position12,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position13,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position14,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, BLACK, BLACK],
        position: position15,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, BLACK, BLACK],
        position: position16,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, BLACK, BLACK],
        position: position17,
    }, {
        colors: [BLACK, BLACK, GREY, GREY, GREY, GREY, BLACK, BLACK, BLACK, BLACK, GREY, GREY],
        position: position18,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, GREY, GREY, BLACK, BLACK, BLACK, BLACK, GREY, GREY],
        position: position19,
    }, {
        colors: [GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK, BLACK, BLACK, GREY, GREY],
        position: position20,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, GREEN, GREEN],
        position: position21,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, GREEN, GREEN],
        position: position22,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, GREEN, GREEN],
        position: position23,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, GREEN, GREEN],
        position: position24,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, GREEN, GREEN],
        position: position25,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, GREEN, GREEN],
        position: position26,
    }],

    // 8
    [{
        colors: [BLACK, BLACK, GREY, GREY, GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK],
        position: position0,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK],
        position: position1,
    }, {
        colors: [GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK],
        position: position2,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, BLACK, BLACK, BLUE, BLUE, BLACK, BLACK],
        position: position3,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLUE, BLUE, BLACK, BLACK],
        position: position4,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLUE, BLUE, BLACK, BLACK],
        position: position5,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, WHITE, WHITE, BLUE, BLUE, BLACK, BLACK],
        position: position6,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLUE, BLUE, BLACK, BLACK],
        position: position7,
    }, {
        colors: [WHITE, WHITE, BLACK, BLACK, BLACK, BLACK, BLUE, BLUE, RED, RED, BLACK, BLACK],
        position: position8,
    }, {
        colors: [BLACK, BLACK, GREY, GREY, GREY, GREY, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position9,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, GREY, GREY, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position10,
    }, {
        colors: [GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position11,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position12,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position13,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position14,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, BLACK, BLACK],
        position: position15,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, BLACK, BLACK],
        position: position16,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, BLACK, BLACK],
        position: position17,
    }, {
        colors: [BLACK, BLACK, GREY, GREY, GREY, GREY, BLACK, BLACK, BLACK, BLACK, GREY, GREY],
        position: position18,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, GREY, GREY, BLACK, BLACK, BLACK, BLACK, GREY, GREY],
        position: position19,
    }, {
        colors: [GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK, BLACK, BLACK, GREY, GREY],
        position: position20,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, GREEN, GREEN],
        position: position21,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, GREEN, GREEN],
        position: position22,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, GREEN, GREEN],
        position: position23,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, GREEN, GREEN],
        position: position24,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, GREEN, GREEN],
        position: position25,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, GREEN, GREEN],
        position: position26,
    }],
    // 9
    [{
        colors: [BLACK, BLACK, GREY, GREY, GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK],
        position: position0,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK],
        position: position1,
    }, {
        colors: [GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK],
        position: position2,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, BLACK, BLACK, BLUE, BLUE, BLACK, BLACK],
        position: position3,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLUE, BLUE, BLACK, BLACK],
        position: position4,
    }, {
        colors: [BLUE, BLUE, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, RED, RED, BLACK, BLACK],
        position: position5,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, WHITE, WHITE, BLUE, BLUE, BLACK, BLACK],
        position: position6,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLUE, BLUE, BLACK, BLACK],
        position: position7,
    }, {
        colors: [WHITE, WHITE, BLACK, BLACK, BLACK, BLACK, BLUE, BLUE, RED, RED, BLACK, BLACK],
        position: position8,
    }, {
        colors: [BLACK, BLACK, GREY, GREY, GREY, GREY, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position9,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, GREY, GREY, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position10,
    }, {
        colors: [GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position11,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position12,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position13,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position14,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, BLACK, BLACK],
        position: position15,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, BLACK, BLACK],
        position: position16,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, BLACK, BLACK],
        position: position17,
    }, {
        colors: [BLACK, BLACK, GREY, GREY, GREY, GREY, BLACK, BLACK, BLACK, BLACK, GREY, GREY],
        position: position18,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, GREY, GREY, BLACK, BLACK, BLACK, BLACK, GREY, GREY],
        position: position19,
    }, {
        colors: [GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK, BLACK, BLACK, GREY, GREY],
        position: position20,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, GREEN, GREEN],
        position: position21,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, GREEN, GREEN],
        position: position22,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, GREEN, GREEN],
        position: position23,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, GREEN, GREEN],
        position: position24,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, GREEN, GREEN],
        position: position25,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, GREEN, GREEN],
        position: position26,
    }],

    // 10
    [{
        colors: [BLACK, BLACK, GREY, GREY, GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK],
        position: position0,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, RED, RED, BLACK, BLACK, BLUE, BLUE, BLACK, BLACK],
        position: position1,
    }, {
        colors: [GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK],
        position: position2,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, BLACK, BLACK, BLUE, BLUE, BLACK, BLACK],
        position: position3,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLUE, BLUE, BLACK, BLACK],
        position: position4,
    }, {
        colors: [GREY, GREY, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, GREY, GREY, BLACK, BLACK],
        position: position5,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, WHITE, WHITE, BLUE, BLUE, BLACK, BLACK],
        position: position6,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLUE, BLUE, BLACK, BLACK],
        position: position7,
    }, {
        colors: [WHITE, WHITE, BLACK, BLACK, BLACK, BLACK, BLUE, BLUE, RED, RED, BLACK, BLACK],
        position: position8,
    }, {
        colors: [BLACK, BLACK, GREY, GREY, GREY, GREY, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position9,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, GREY, GREY, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position10,
    }, {
        colors: [GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position11,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position12,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position13,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position14,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, BLACK, BLACK],
        position: position15,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, BLACK, BLACK],
        position: position16,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, BLACK, BLACK],
        position: position17,
    }, {
        colors: [BLACK, BLACK, GREY, GREY, GREY, GREY, BLACK, BLACK, BLACK, BLACK, GREY, GREY],
        position: position18,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, GREY, GREY, BLACK, BLACK, BLACK, BLACK, GREY, GREY],
        position: position19,
    }, {
        colors: [GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK, BLACK, BLACK, GREY, GREY],
        position: position20,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, GREEN, GREEN],
        position: position21,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, GREEN, GREEN],
        position: position22,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, GREEN, GREEN],
        position: position23,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, GREEN, GREEN],
        position: position24,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, GREEN, GREEN],
        position: position25,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, GREEN, GREEN],
        position: position26,
    }],

    // 11
    [{
        colors: [BLACK, BLACK, GREY, GREY, GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK],
        position: position0,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK],
        position: position1,
    }, {
        colors: [GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK],
        position: position2,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, BLACK, BLACK, BLUE, BLUE, BLACK, BLACK],
        position: position3,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLUE, BLUE, BLACK, BLACK],
        position: position4,
    }, {
        colors: [GREY, GREY, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, GREY, GREY, BLACK, BLACK],
        position: position5,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, WHITE, WHITE, BLUE, BLUE, BLACK, BLACK],
        position: position6,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLUE, BLUE, BLACK, BLACK],
        position: position7,
    }, {
        colors: [WHITE, WHITE, BLACK, BLACK, BLACK, BLACK, BLUE, BLUE, RED, RED, BLACK, BLACK],
        position: position8,
    }, {
        colors: [BLACK, BLACK, GREY, GREY, GREY, GREY, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position9,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, GREY, GREY, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position10,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLUE, BLUE, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position11,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position12,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position13,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position14,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, BLACK, BLACK],
        position: position15,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, BLACK, BLACK],
        position: position16,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, BLACK, BLACK],
        position: position17,
    }, {
        colors: [BLACK, BLACK, GREY, GREY, GREY, GREY, BLACK, BLACK, BLACK, BLACK, GREY, GREY],
        position: position18,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, GREY, GREY, BLACK, BLACK, BLACK, BLACK, GREY, GREY],
        position: position19,
    }, {
        colors: [GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK, BLACK, BLACK, GREY, GREY],
        position: position20,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, GREEN, GREEN],
        position: position21,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, GREEN, GREEN],
        position: position22,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, GREEN, GREEN],
        position: position23,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, GREEN, GREEN],
        position: position24,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, GREEN, GREEN],
        position: position25,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, GREEN, GREEN],
        position: position26,
    }],

    // 12
    [{
        colors: [BLACK, BLACK, GREY, GREY, GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK],
        position: position0,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK],
        position: position1,
    }, {
        colors: [BLUE, BLUE, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, RED, RED, BLACK, BLACK],
        position: position2,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, BLACK, BLACK, BLUE, BLUE, BLACK, BLACK],
        position: position3,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLUE, BLUE, BLACK, BLACK],
        position: position4,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLUE, BLUE, BLACK, BLACK],
        position: position5,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, WHITE, WHITE, BLUE, BLUE, BLACK, BLACK],
        position: position6,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLUE, BLUE, BLACK, BLACK],
        position: position7,
    }, {
        colors: [GREY, GREY, BLACK, BLACK, BLACK, BLACK, GREY, GREY, GREY, GREY, BLACK, BLACK],
        position: position8,
    }, {
        colors: [BLACK, BLACK, GREY, GREY, GREY, GREY, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position9,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, GREY, GREY, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position10,
    }, {
        colors: [GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position11,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position12,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position13,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position14,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, BLACK, BLACK],
        position: position15,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, BLACK, BLACK],
        position: position16,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, BLACK, BLACK],
        position: position17,
    }, {
        colors: [BLACK, BLACK, GREY, GREY, GREY, GREY, BLACK, BLACK, BLACK, BLACK, GREY, GREY],
        position: position18,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, GREY, GREY, BLACK, BLACK, BLACK, BLACK, GREY, GREY],
        position: position19,
    }, {
        colors: [GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK, BLACK, BLACK, GREY, GREY],
        position: position20,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, GREEN, GREEN],
        position: position21,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, GREEN, GREEN],
        position: position22,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, GREEN, GREEN],
        position: position23,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, GREEN, GREEN],
        position: position24,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, GREEN, GREEN],
        position: position25,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, GREEN, GREEN],
        position: position26,
    }],

    // 13
    [{
        colors: [BLACK, BLACK, GREY, GREY, GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK],
        position: position0,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK],
        position: position1,
    }, {
        colors: [BLUE, BLUE, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, RED, RED, BLACK, BLACK],
        position: position2,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, BLACK, BLACK, BLUE, BLUE, BLACK, BLACK],
        position: position3,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLUE, BLUE, BLACK, BLACK],
        position: position4,
    }, {
        colors: [BLUE, BLUE, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, RED, RED, BLACK, BLACK],
        position: position5,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, WHITE, WHITE, BLUE, BLUE, BLACK, BLACK],
        position: position6,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLUE, BLUE, BLACK, BLACK],
        position: position7,
    }, {
        colors: [GREY, GREY, BLACK, BLACK, BLACK, BLACK, GREY, GREY, GREY, GREY, BLACK, BLACK],
        position: position8,
    }, {
        colors: [BLACK, BLACK, GREY, GREY, GREY, GREY, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position9,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, GREY, GREY, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position10,
    }, {
        colors: [GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position11,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position12,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position13,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position14,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, BLACK, BLACK],
        position: position15,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, BLACK, BLACK],
        position: position16,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, BLACK, BLACK],
        position: position17,
    }, {
        colors: [BLACK, BLACK, GREY, GREY, GREY, GREY, BLACK, BLACK, BLACK, BLACK, GREY, GREY],
        position: position18,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, GREY, GREY, BLACK, BLACK, BLACK, BLACK, GREY, GREY],
        position: position19,
    }, {
        colors: [GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK, BLACK, BLACK, GREY, GREY],
        position: position20,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, GREEN, GREEN],
        position: position21,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, GREEN, GREEN],
        position: position22,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, GREEN, GREEN],
        position: position23,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, GREEN, GREEN],
        position: position24,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, GREEN, GREEN],
        position: position25,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, GREEN, GREEN],
        position: position26,
    }],

    // 14
    [{
        colors: [BLACK, BLACK, GREY, GREY, GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK],
        position: position0,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, RED, RED, BLACK, BLACK, BLUE, BLUE, BLACK, BLACK],
        position: position1,
    }, {
        colors: [BLUE, BLUE, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, RED, RED, BLACK, BLACK],
        position: position2,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, BLACK, BLACK, BLUE, BLUE, BLACK, BLACK],
        position: position3,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLUE, BLUE, BLACK, BLACK],
        position: position4,
    }, {
        colors: [GREY, GREY, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, GREY, GREY, BLACK, BLACK],
        position: position5,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, WHITE, WHITE, BLUE, BLUE, BLACK, BLACK],
        position: position6,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLUE, BLUE, BLACK, BLACK],
        position: position7,
    }, {
        colors: [GREY, GREY, BLACK, BLACK, BLACK, BLACK, GREY, GREY, GREY, GREY, BLACK, BLACK],
        position: position8,
    }, {
        colors: [BLACK, BLACK, GREY, GREY, GREY, GREY, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position9,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, GREY, GREY, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position10,
    }, {
        colors: [GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position11,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position12,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position13,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position14,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, BLACK, BLACK],
        position: position15,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, BLACK, BLACK],
        position: position16,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, BLACK, BLACK],
        position: position17,
    }, {
        colors: [BLACK, BLACK, GREY, GREY, GREY, GREY, BLACK, BLACK, BLACK, BLACK, GREY, GREY],
        position: position18,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, GREY, GREY, BLACK, BLACK, BLACK, BLACK, GREY, GREY],
        position: position19,
    }, {
        colors: [GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK, BLACK, BLACK, GREY, GREY],
        position: position20,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, GREEN, GREEN],
        position: position21,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, GREEN, GREEN],
        position: position22,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, GREEN, GREEN],
        position: position23,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, GREEN, GREEN],
        position: position24,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, GREEN, GREEN],
        position: position25,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, GREEN, GREEN],
        position: position26,
    }],

    // 15
    [{
        colors: [BLACK, BLACK, GREY, GREY, GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK],
        position: position0,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK],
        position: position1,
    }, {
        colors: [BLUE, BLUE, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, RED, RED, BLACK, BLACK],
        position: position2,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, BLACK, BLACK, BLUE, BLUE, BLACK, BLACK],
        position: position3,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLUE, BLUE, BLACK, BLACK],
        position: position4,
    }, {
        colors: [GREY, GREY, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, GREY, GREY, BLACK, BLACK],
        position: position5,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, WHITE, WHITE, BLUE, BLUE, BLACK, BLACK],
        position: position6,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLUE, BLUE, BLACK, BLACK],
        position: position7,
    }, {
        colors: [GREY, GREY, BLACK, BLACK, BLACK, BLACK, GREY, GREY, GREY, GREY, BLACK, BLACK],
        position: position8,
    }, {
        colors: [BLACK, BLACK, BLUE, BLUE, RED, RED, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position9,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, GREY, GREY, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position10,
    }, {
        colors: [GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position11,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position12,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position13,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position14,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, BLACK, BLACK],
        position: position15,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, BLACK, BLACK],
        position: position16,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, BLACK, BLACK],
        position: position17,
    }, {
        colors: [BLACK, BLACK, GREY, GREY, GREY, GREY, BLACK, BLACK, BLACK, BLACK, GREY, GREY],
        position: position18,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, GREY, GREY, BLACK, BLACK, BLACK, BLACK, GREY, GREY],
        position: position19,
    }, {
        colors: [GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK, BLACK, BLACK, GREY, GREY],
        position: position20,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, GREEN, GREEN],
        position: position21,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, GREEN, GREEN],
        position: position22,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, GREEN, GREEN],
        position: position23,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, GREEN, GREEN],
        position: position24,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, GREEN, GREEN],
        position: position25,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, GREEN, GREEN],
        position: position26,
    }],

    // 16
    [{
        colors: [BLACK, BLACK, GREY, GREY, GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK],
        position: position0,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK],
        position: position1,
    }, {
        colors: [BLUE, BLUE, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, RED, RED, BLACK, BLACK],
        position: position2,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, BLACK, BLACK, BLUE, BLUE, BLACK, BLACK],
        position: position3,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLUE, BLUE, BLACK, BLACK],
        position: position4,
    }, {
        colors: [GREY, GREY, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, GREY, GREY, BLACK, BLACK],
        position: position5,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, WHITE, WHITE, BLUE, BLUE, BLACK, BLACK],
        position: position6,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLUE, BLUE, BLACK, BLACK],
        position: position7,
    }, {
        colors: [GREY, GREY, BLACK, BLACK, BLACK, BLACK, GREY, GREY, GREY, GREY, BLACK, BLACK],
        position: position8,
    }, {
        colors: [BLACK, BLACK, GREY, GREY, GREY, GREY, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position9,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, GREY, GREY, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position10,
    }, {
        colors: [GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position11,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position12,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position13,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
        position: position14,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, BLACK, BLACK],
        position: position15,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, BLACK, BLACK],
        position: position16,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, BLACK, BLACK],
        position: position17,
    }, {
        colors: [BLACK, BLACK, GREY, GREY, GREY, GREY, BLACK, BLACK, BLACK, BLACK, GREY, GREY],
        position: position18,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, RED, RED, BLACK, BLACK, BLACK, BLACK, BLUE, BLUE],
        position: position19,
    }, {
        colors: [GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK, BLACK, BLACK, GREY, GREY],
        position: position20,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, GREEN, GREEN],
        position: position21,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, GREEN, GREEN],
        position: position22,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, GREEN, GREEN],
        position: position23,
    }, {
        colors: [BLACK, BLACK, ORANGE, ORANGE, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, GREEN, GREEN],
        position: position24,
    }, {
        colors: [BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, GREEN, GREEN],
        position: position25,
    }, {
        colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, GREEN, GREEN],
        position: position26,
    }],
];
