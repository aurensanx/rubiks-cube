import {PIECE} from './pieces';


export const BLUE = 0x0000FF;
export const GREEN = 0x0FF000;
export const WHITE = 0xFFFFFF;
export const YELLOW = 0xFFFF00;
export const RED = 0xFF0000;
export const ORANGE = 0xFFA500;
export const BLACK = 0X00000;
export const GREY = 0XC0C0C0;

export const position0 = [-1, 1, 1];
export const position1 = [0, 1, 1];
export const position2 = [1, 1, 1];
export const position3 = [-1, 0, 1];
export const position4 = [0, 0, 1];
export const position5 = [1, 0, 1];
export const position6 = [-1, -1, 1];
export const position7 = [0, -1, 1];
export const position8 = [1, -1, 1];
export const position9 = [-1, 1, 0];
export const position10 = [0, 1, 0];
export const position11 = [1, 1, 0];
export const position12 = [-1, 0, 0];
export const position13 = [0, 0, 0];
export const position14 = [1, 0, 0];
export const position15 = [-1, -1, 0];
export const position16 = [0, -1, 0];
export const position17 = [1, -1, 0];
export const position18 = [-1, 1, -1];
export const position19 = [0, 1, -1];
export const position20 = [1, 1, -1];
export const position21 = [-1, 0, -1];
export const position22 = [0, 0, -1];
export const position23 = [1, 0, -1];
export const position24 = [-1, -1, -1];
export const position25 = [0, -1, -1];
export const position26 = [1, -1, -1];

// R - L - U - D - F - B
const createSolvedConfiguration: () => PIECE[] = () => [{
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
}];


const setGreyLeftTopFrontCorner: (pieces: PIECE[]) => void = (pieces: PIECE[]) => {
    pieces[0].colors = [BLACK, BLACK, GREY, GREY, GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK];
};
const setGreyMiddleTopFrontCorner: (pieces: PIECE[]) => void = (pieces: PIECE[]) => {
    pieces[1].colors = [BLACK, BLACK, BLACK, BLACK, GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK];
};
const setGreyRightTopFrontCorner: (pieces: PIECE[]) => void = (pieces: PIECE[]) => {
    pieces[2].colors = [GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK];
};
const setGreyLeftTopMiddleCorner: (pieces: PIECE[]) => void = (pieces: PIECE[]) => {
    pieces[9].colors = [BLACK, BLACK, GREY, GREY, GREY, GREY, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK];
};
const setGreyMiddleTopMiddleCorner: (pieces: PIECE[]) => void = (pieces: PIECE[]) => {
    pieces[10].colors = [BLACK, BLACK, BLACK, BLACK, GREY, GREY, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK];
};
const setGreyRightTopMiddleCorner: (pieces: PIECE[]) => void = (pieces: PIECE[]) => {
    pieces[11].colors = [GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK];
};
const setGreyLeftTopBackCorner: (pieces: PIECE[]) => void = (pieces: PIECE[]) => {
    pieces[18].colors = [BLACK, BLACK, GREY, GREY, GREY, GREY, BLACK, BLACK, BLACK, BLACK, GREY, GREY];
};
const setGreyMiddleTopBackCorner: (pieces: PIECE[]) => void = (pieces: PIECE[]) => {
    pieces[19].colors = [BLACK, BLACK, BLACK, BLACK, GREY, GREY, BLACK, BLACK, BLACK, BLACK, GREY, GREY];
};
const setGreyRightTopBackCorner: (pieces: PIECE[]) => void = (pieces: PIECE[]) => {
    pieces[20].colors = [GREY, GREY, BLACK, BLACK, GREY, GREY, BLACK, BLACK, BLACK, BLACK, GREY, GREY];
};
const setGreyRightMiddleFrontEdge: (pieces: PIECE[]) => void = (pieces: PIECE[]) => {
    pieces[5].colors = [GREY, GREY, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, GREY, GREY, BLACK, BLACK];
};
const setBlueRedWhiteRightBottomFrontCorner: (pieces: PIECE[]) => void = (pieces: PIECE[]) => {
    pieces[8].colors = [BLUE, BLUE, BLACK, BLACK, BLACK, BLACK, RED, RED, WHITE, WHITE, BLACK, BLACK];
};
const setWhiteBlueRedRightBottomFrontCorner: (pieces: PIECE[]) => void = (pieces: PIECE[]) => {
    pieces[8].colors = [WHITE, WHITE, BLACK, BLACK, BLACK, BLACK, BLUE, BLUE, RED, RED, BLACK, BLACK];
};
const setGreyRightBottomFrontCorner: (pieces: PIECE[]) => void = (pieces: PIECE[]) => {
    pieces[8].colors = [GREY, GREY, BLACK, BLACK, BLACK, BLACK, GREY, GREY, GREY, GREY, BLACK, BLACK];
};
const setRedBlueMiddleTopFrontEdge: (pieces: PIECE[]) => void = (pieces: PIECE[]) => {
    pieces[1].colors = [BLACK, BLACK, BLACK, BLACK, RED, RED, BLACK, BLACK, BLUE, BLUE, BLACK, BLACK];
};
const setBlueRedMiddleTopFrontEdge: (pieces: PIECE[]) => void = (pieces: PIECE[]) => {
    pieces[1].colors = [BLACK, BLACK, BLACK, BLACK, BLUE, BLUE, BLACK, BLACK, RED, RED, BLACK, BLACK];
};
const setBlueWhiteRedRightTopFrontCorner: (pieces: PIECE[]) => void = (pieces: PIECE[]) => {
    pieces[2].colors = [BLUE, BLUE, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK, RED, RED, BLACK, BLACK];
};
const setRedBlueWhiteRightTopFrontCorner: (pieces: PIECE[]) => void = (pieces: PIECE[]) => {
    pieces[2].colors = [RED, RED, BLACK, BLACK, BLUE, BLUE, BLACK, BLACK, WHITE, WHITE, BLACK, BLACK];
};
const setWhiteRedBlueRightTopFrontCorner: (pieces: PIECE[]) => void = (pieces: PIECE[]) => {
    pieces[2].colors = [WHITE, WHITE, BLACK, BLACK, RED, RED, BLACK, BLACK, BLUE, BLUE, BLACK, BLACK];
};
const setBlueRedRightMiddleFrontEdge: (pieces: PIECE[]) => void = (pieces: PIECE[]) => {
    pieces[5].colors = [BLUE, BLUE, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK, RED, RED, BLACK, BLACK];
};
const setBlueRedLeftTopMiddleEdge: (pieces: PIECE[]) => void = (pieces: PIECE[]) => {
    pieces[9].colors = [BLACK, BLACK, BLUE, BLUE, RED, RED, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK];
};
const setRedBlueLeftTopMiddleEdge: (pieces: PIECE[]) => void = (pieces: PIECE[]) => {
    pieces[9].colors = [BLACK, BLACK, RED, RED, BLUE, BLUE, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK];
};
const setRedBlueRightTopMiddleEdge: (pieces: PIECE[]) => void = (pieces: PIECE[]) => {
    pieces[11].colors = [RED, RED, BLACK, BLACK, BLUE, BLUE, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK];
};
const setBlueRedRightTopMiddleEdge: (pieces: PIECE[]) => void = (pieces: PIECE[]) => {
    pieces[11].colors = [BLUE, BLUE, BLACK, BLACK, RED, RED, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK];
};
const setRedBlueMiddleTopBackEdge: (pieces: PIECE[]) => void = (pieces: PIECE[]) => {
    pieces[19].colors = [BLACK, BLACK, BLACK, BLACK, RED, RED, BLACK, BLACK, BLACK, BLACK, BLUE, BLUE];
};
const setBlueRedMiddleTopBackEdge: (pieces: PIECE[]) => void = (pieces: PIECE[]) => {
    pieces[19].colors = [BLACK, BLACK, BLACK, BLACK, BLUE, BLUE, BLACK, BLACK, BLACK, BLACK, RED, RED];
};


const createGreyTopLayer: (pieces: PIECE[]) => PIECE[] = (pieces: PIECE[]) => {
    setGreyLeftTopFrontCorner(pieces);
    setGreyMiddleTopFrontCorner(pieces);
    setGreyRightTopFrontCorner(pieces);
    setGreyLeftTopMiddleCorner(pieces);
    setGreyMiddleTopMiddleCorner(pieces);
    setGreyRightTopMiddleCorner(pieces);
    setGreyLeftTopBackCorner(pieces);
    setGreyMiddleTopBackCorner(pieces);
    setGreyRightTopBackCorner(pieces);
    return pieces;
};

const configurationF2L1 = createSolvedConfiguration();
createGreyTopLayer(configurationF2L1);
setBlueRedRightMiddleFrontEdge(configurationF2L1);

const configurationF2L2 = createSolvedConfiguration();
createGreyTopLayer(configurationF2L2);
setGreyRightMiddleFrontEdge(configurationF2L2);
setRedBlueMiddleTopFrontEdge(configurationF2L2);

const configurationF2L3 = createSolvedConfiguration();
createGreyTopLayer(configurationF2L3);
setGreyRightMiddleFrontEdge(configurationF2L3);
setRedBlueRightTopMiddleEdge(configurationF2L3);

const configurationF2L4 = createSolvedConfiguration();
createGreyTopLayer(configurationF2L4);
setBlueRedWhiteRightBottomFrontCorner(configurationF2L4);

const configurationF2L5 = createSolvedConfiguration();
createGreyTopLayer(configurationF2L5);
setBlueRedRightMiddleFrontEdge(configurationF2L5);
setBlueRedWhiteRightBottomFrontCorner(configurationF2L5);

const configurationF2L6 = createSolvedConfiguration();
createGreyTopLayer(configurationF2L6);
setGreyRightMiddleFrontEdge(configurationF2L6);
setRedBlueMiddleTopFrontEdge(configurationF2L6);
setBlueRedWhiteRightBottomFrontCorner(configurationF2L6);

const configurationF2L7 = createSolvedConfiguration();
createGreyTopLayer(configurationF2L7);
setGreyRightMiddleFrontEdge(configurationF2L7);
setRedBlueRightTopMiddleEdge(configurationF2L7);
setBlueRedWhiteRightBottomFrontCorner(configurationF2L7);

const configurationF2L8 = createSolvedConfiguration();
createGreyTopLayer(configurationF2L8);
setWhiteBlueRedRightBottomFrontCorner(configurationF2L8);

const configurationF2L9 = createSolvedConfiguration();
createGreyTopLayer(configurationF2L9);
setBlueRedRightMiddleFrontEdge(configurationF2L9);
setWhiteBlueRedRightBottomFrontCorner(configurationF2L9);

const configurationF2L10 = createSolvedConfiguration();
createGreyTopLayer(configurationF2L10);
setGreyRightMiddleFrontEdge(configurationF2L10);
setRedBlueMiddleTopFrontEdge(configurationF2L10);
setWhiteBlueRedRightBottomFrontCorner(configurationF2L10);

const configurationF2L11 = createSolvedConfiguration();
createGreyTopLayer(configurationF2L11);
setGreyRightMiddleFrontEdge(configurationF2L11);
setRedBlueRightTopMiddleEdge(configurationF2L11);
setWhiteBlueRedRightBottomFrontCorner(configurationF2L11);

const configurationF2L12 = createSolvedConfiguration();
createGreyTopLayer(configurationF2L12);
setGreyRightBottomFrontCorner(configurationF2L12);
setBlueWhiteRedRightTopFrontCorner(configurationF2L12);

const configurationF2L13 = createSolvedConfiguration();
createGreyTopLayer(configurationF2L13);
setGreyRightBottomFrontCorner(configurationF2L13);
setBlueRedRightMiddleFrontEdge(configurationF2L13);
setBlueWhiteRedRightTopFrontCorner(configurationF2L13);

const configurationF2L14 = createSolvedConfiguration();
createGreyTopLayer(configurationF2L14);
setGreyRightBottomFrontCorner(configurationF2L14);
setBlueWhiteRedRightTopFrontCorner(configurationF2L14);
setGreyRightMiddleFrontEdge(configurationF2L14);
setRedBlueMiddleTopFrontEdge(configurationF2L14);

const configurationF2L15 = createSolvedConfiguration();
createGreyTopLayer(configurationF2L15);
setGreyRightBottomFrontCorner(configurationF2L15);
setGreyRightMiddleFrontEdge(configurationF2L15);
setBlueWhiteRedRightTopFrontCorner(configurationF2L15);
setBlueRedLeftTopMiddleEdge(configurationF2L15);

const configurationF2L16 = createSolvedConfiguration();
createGreyTopLayer(configurationF2L16);
setGreyRightBottomFrontCorner(configurationF2L16);
setGreyRightMiddleFrontEdge(configurationF2L16);
setBlueWhiteRedRightTopFrontCorner(configurationF2L16);
setRedBlueMiddleTopBackEdge(configurationF2L16);

const configurationF2L17 = createSolvedConfiguration();
createGreyTopLayer(configurationF2L17);
setGreyRightBottomFrontCorner(configurationF2L17);
setGreyRightMiddleFrontEdge(configurationF2L17);
setBlueWhiteRedRightTopFrontCorner(configurationF2L17);
setBlueRedRightTopMiddleEdge(configurationF2L17);

const configurationF2L18 = createSolvedConfiguration();
createGreyTopLayer(configurationF2L18);
setGreyRightBottomFrontCorner(configurationF2L18);
setGreyRightMiddleFrontEdge(configurationF2L18);
setBlueWhiteRedRightTopFrontCorner(configurationF2L18);
setBlueRedMiddleTopFrontEdge(configurationF2L18);

const configurationF2L19 = createSolvedConfiguration();
createGreyTopLayer(configurationF2L19);
setGreyRightBottomFrontCorner(configurationF2L19);
setGreyRightMiddleFrontEdge(configurationF2L19);
setBlueWhiteRedRightTopFrontCorner(configurationF2L19);
setRedBlueLeftTopMiddleEdge(configurationF2L19);

const configurationF2L20 = createSolvedConfiguration();
createGreyTopLayer(configurationF2L20);
setGreyRightBottomFrontCorner(configurationF2L20);
setGreyRightMiddleFrontEdge(configurationF2L20);
setBlueWhiteRedRightTopFrontCorner(configurationF2L20);
setBlueRedMiddleTopBackEdge(configurationF2L20);

const configurationF2L21 = createSolvedConfiguration();
createGreyTopLayer(configurationF2L21);
setGreyRightBottomFrontCorner(configurationF2L21);
setGreyRightMiddleFrontEdge(configurationF2L21);
setBlueWhiteRedRightTopFrontCorner(configurationF2L21);
setRedBlueRightTopMiddleEdge(configurationF2L21);

const configurationF2L22 = createSolvedConfiguration();
createGreyTopLayer(configurationF2L22);
setGreyRightBottomFrontCorner(configurationF2L22);
setRedBlueWhiteRightTopFrontCorner(configurationF2L22);

const configurationF2L23 = createSolvedConfiguration();
createGreyTopLayer(configurationF2L23);
setGreyRightBottomFrontCorner(configurationF2L23);
setBlueRedRightMiddleFrontEdge(configurationF2L23);
setRedBlueWhiteRightTopFrontCorner(configurationF2L23);

const configurationF2L24 = createSolvedConfiguration();
createGreyTopLayer(configurationF2L24);
setGreyRightBottomFrontCorner(configurationF2L24);
setGreyRightMiddleFrontEdge(configurationF2L24);
setRedBlueMiddleTopFrontEdge(configurationF2L24);
setRedBlueWhiteRightTopFrontCorner(configurationF2L24);

const configurationF2L25 = createSolvedConfiguration();
createGreyTopLayer(configurationF2L25);
setGreyRightBottomFrontCorner(configurationF2L25);
setGreyRightMiddleFrontEdge(configurationF2L25);
setBlueRedLeftTopMiddleEdge(configurationF2L25);
setRedBlueWhiteRightTopFrontCorner(configurationF2L25);

const configurationF2L26 = createSolvedConfiguration();
createGreyTopLayer(configurationF2L26);
setGreyRightBottomFrontCorner(configurationF2L26);
setGreyRightMiddleFrontEdge(configurationF2L26);
setRedBlueMiddleTopBackEdge(configurationF2L26);
setRedBlueWhiteRightTopFrontCorner(configurationF2L26);

const configurationF2L27 = createSolvedConfiguration();
createGreyTopLayer(configurationF2L27);
setGreyRightBottomFrontCorner(configurationF2L27);
setGreyRightMiddleFrontEdge(configurationF2L27);
setBlueRedRightTopMiddleEdge(configurationF2L27);
setRedBlueWhiteRightTopFrontCorner(configurationF2L27);

const configurationF2L28 = createSolvedConfiguration();
createGreyTopLayer(configurationF2L28);
setGreyRightBottomFrontCorner(configurationF2L28);
setGreyRightMiddleFrontEdge(configurationF2L28);
setBlueRedMiddleTopFrontEdge(configurationF2L28);
setRedBlueWhiteRightTopFrontCorner(configurationF2L28);

const configurationF2L29 = createSolvedConfiguration();
createGreyTopLayer(configurationF2L29);
setGreyRightBottomFrontCorner(configurationF2L29);
setGreyRightMiddleFrontEdge(configurationF2L29);
setRedBlueLeftTopMiddleEdge(configurationF2L29);
setRedBlueWhiteRightTopFrontCorner(configurationF2L29);

const configurationF2L30 = createSolvedConfiguration();
createGreyTopLayer(configurationF2L30);
setGreyRightBottomFrontCorner(configurationF2L30);
setGreyRightMiddleFrontEdge(configurationF2L30);
setBlueRedMiddleTopBackEdge(configurationF2L30);
setRedBlueWhiteRightTopFrontCorner(configurationF2L30);

const configurationF2L31 = createSolvedConfiguration();
createGreyTopLayer(configurationF2L31);
setGreyRightBottomFrontCorner(configurationF2L31);
setGreyRightMiddleFrontEdge(configurationF2L31);
setRedBlueRightTopMiddleEdge(configurationF2L31);
setRedBlueWhiteRightTopFrontCorner(configurationF2L31);

const configurationF2L32 = createSolvedConfiguration();
createGreyTopLayer(configurationF2L32);
setGreyRightBottomFrontCorner(configurationF2L32);
setWhiteRedBlueRightTopFrontCorner(configurationF2L32);

const configurationF2L33 = createSolvedConfiguration();
createGreyTopLayer(configurationF2L33);
setGreyRightBottomFrontCorner(configurationF2L33);
setBlueRedRightMiddleFrontEdge(configurationF2L33);
setWhiteRedBlueRightTopFrontCorner(configurationF2L33);

const configurationF2L34 = createSolvedConfiguration();
createGreyTopLayer(configurationF2L34);
setGreyRightBottomFrontCorner(configurationF2L34);
setGreyRightMiddleFrontEdge(configurationF2L34);
setRedBlueMiddleTopFrontEdge(configurationF2L34);
setWhiteRedBlueRightTopFrontCorner(configurationF2L34);

const configurationF2L35 = createSolvedConfiguration();
createGreyTopLayer(configurationF2L35);
setGreyRightBottomFrontCorner(configurationF2L35);
setGreyRightMiddleFrontEdge(configurationF2L35);
setBlueRedLeftTopMiddleEdge(configurationF2L35);
setWhiteRedBlueRightTopFrontCorner(configurationF2L35);

const configurationF2L36 = createSolvedConfiguration();
createGreyTopLayer(configurationF2L36);
setGreyRightBottomFrontCorner(configurationF2L36);
setGreyRightMiddleFrontEdge(configurationF2L36);
setRedBlueMiddleTopBackEdge(configurationF2L36);
setWhiteRedBlueRightTopFrontCorner(configurationF2L36);

const configurationF2L37 = createSolvedConfiguration();
createGreyTopLayer(configurationF2L37);
setGreyRightBottomFrontCorner(configurationF2L37);
setGreyRightMiddleFrontEdge(configurationF2L37);
setBlueRedRightTopMiddleEdge(configurationF2L37);
setWhiteRedBlueRightTopFrontCorner(configurationF2L37);

const configurationF2L38 = createSolvedConfiguration();
createGreyTopLayer(configurationF2L38);
setGreyRightBottomFrontCorner(configurationF2L38);
setGreyRightMiddleFrontEdge(configurationF2L38);
setBlueRedMiddleTopFrontEdge(configurationF2L38);
setWhiteRedBlueRightTopFrontCorner(configurationF2L38);

const configurationF2L39 = createSolvedConfiguration();
createGreyTopLayer(configurationF2L39);
setGreyRightBottomFrontCorner(configurationF2L39);
setGreyRightMiddleFrontEdge(configurationF2L39);
setRedBlueLeftTopMiddleEdge(configurationF2L39);
setWhiteRedBlueRightTopFrontCorner(configurationF2L39);

const configurationF2L40 = createSolvedConfiguration();
createGreyTopLayer(configurationF2L40);
setGreyRightBottomFrontCorner(configurationF2L40);
setGreyRightMiddleFrontEdge(configurationF2L40);
setBlueRedMiddleTopBackEdge(configurationF2L40);
setWhiteRedBlueRightTopFrontCorner(configurationF2L40);

const configurationF2L41 = createSolvedConfiguration();
createGreyTopLayer(configurationF2L41);
setGreyRightBottomFrontCorner(configurationF2L41);
setGreyRightMiddleFrontEdge(configurationF2L41);
setRedBlueRightTopMiddleEdge(configurationF2L41);
setWhiteRedBlueRightTopFrontCorner(configurationF2L41);

// R - L - U - D - F - B
export const CUBE_CONFIGURATIONS: PIECE[][] = [
    createSolvedConfiguration(), // 0
    configurationF2L1, configurationF2L2, configurationF2L3, configurationF2L4, configurationF2L5, configurationF2L6, configurationF2L7, configurationF2L8, configurationF2L9, configurationF2L10,
    configurationF2L11, configurationF2L12, configurationF2L13, configurationF2L14, configurationF2L15, configurationF2L16, configurationF2L17, configurationF2L18, configurationF2L19, configurationF2L20,
    configurationF2L21, configurationF2L22, configurationF2L23, configurationF2L24, configurationF2L25, configurationF2L26, configurationF2L27, configurationF2L28, configurationF2L29, configurationF2L30,
    configurationF2L31, configurationF2L32, configurationF2L33, configurationF2L34, configurationF2L35, configurationF2L36, configurationF2L37, configurationF2L38, configurationF2L39, configurationF2L40,
    configurationF2L41,
];

// Array.from({length: 57}, (_, id) => CUBE_CONFIGURATIONS.push(createOLLBaseConfiguration()));


// R - L - U - D - F - B


