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

const createOLLBaseConfiguration: () => PIECE[] = () => [{
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
    colors: [RED, RED, BLACK, BLACK, BLACK, BLACK, WHITE, WHITE, BLUE, BLUE, BLACK, BLACK],
    position: position8,
}, {
    colors: [BLACK, BLACK, GREY, GREY, GREY, GREY, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
    position: position9,
}, {
    colors: [BLACK, BLACK, BLACK, BLACK, YELLOW, YELLOW, BLACK, BLACK, BLACK, BLACK, BLACK, BLACK],
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

const setFaceColor: (piece: PIECE, i: number, color) => void = (piece, i, color) => {
    piece.colors[i] = color;
    piece.colors[i + 1] = color;
};

const setRightFaceColor = (piece: PIECE) => setFaceColor(piece, 0, YELLOW);
const setLeftFaceColor = (piece: PIECE) => setFaceColor(piece, 2, YELLOW);
const setUpFaceColor = (piece: PIECE) => setFaceColor(piece, 4, YELLOW);
// const setDownFaceColor = (piece: PIECE) => setFaceColor(piece, 6, YELLOW);
const setFrontFaceColor = (piece: PIECE) => setFaceColor(piece, 8, YELLOW);
const setBackFaceColor = (piece: PIECE) => setFaceColor(piece, 10, YELLOW);

const setLeftColorLeftTopFrontCorner = (pieces: PIECE[]) => setLeftFaceColor(pieces[0]);
const setFrontColorLeftTopFrontCorner = (pieces: PIECE[]) => setFrontFaceColor(pieces[0]);
const setUpColorLeftTopFrontCorner = (pieces: PIECE[]) => setUpFaceColor(pieces[0]);

const setFrontColorMiddleTopFrontEdge = (pieces: PIECE[]) => setFrontFaceColor(pieces[1]);
const setUpColorMiddleTopFrontEdge = (pieces: PIECE[]) => setUpFaceColor(pieces[1]);

const setRightColorRightTopFrontCorner = (pieces: PIECE[]) => setRightFaceColor(pieces[2]);
const setFrontColorRightTopFrontCorner = (pieces: PIECE[]) => setFrontFaceColor(pieces[2]);
const setUpColorRightTopFrontCorner = (pieces: PIECE[]) => setUpFaceColor(pieces[2]);

const setLeftColorLeftTopMiddleEdge = (pieces: PIECE[]) => setLeftFaceColor(pieces[9]);
const setUpColorLeftTopMiddleEdge = (pieces: PIECE[]) => setUpFaceColor(pieces[9]);

const setRightColorRightTopMiddleEdge = (pieces: PIECE[]) => setRightFaceColor(pieces[11]);
const setUpColorRightTopMiddleEdge = (pieces: PIECE[]) => setUpFaceColor(pieces[11]);

const setLeftColorLeftTopBackCorner = (pieces: PIECE[]) => setLeftFaceColor(pieces[18]);
const setBackColorLeftTopBackCorner = (pieces: PIECE[]) => setBackFaceColor(pieces[18]);
const setUpColorLeftTopBackCorner = (pieces: PIECE[]) => setUpFaceColor(pieces[18]);

const setBackColorMiddleTopBackEdge = (pieces: PIECE[]) => setBackFaceColor(pieces[19]);
const setUpColorMiddleTopBackEdge = (pieces: PIECE[]) => setUpFaceColor(pieces[19]);

const setRightColorRightTopBackCorner = (pieces: PIECE[]) => setRightFaceColor(pieces[20]);
const setBackColorRightTopBackCorner = (pieces: PIECE[]) => setBackFaceColor(pieces[20]);
const setUpColorRightTopBackCorner = (pieces: PIECE[]) => setUpFaceColor(pieces[20]);

const configurationOLL1 = createOLLBaseConfiguration();
setLeftColorLeftTopFrontCorner(configurationOLL1);
setFrontColorMiddleTopFrontEdge(configurationOLL1);
setRightColorRightTopFrontCorner(configurationOLL1);
setLeftColorLeftTopMiddleEdge(configurationOLL1);
setRightColorRightTopMiddleEdge(configurationOLL1);
setLeftColorLeftTopBackCorner(configurationOLL1);
setBackColorMiddleTopBackEdge(configurationOLL1);
setRightColorRightTopBackCorner(configurationOLL1);

const configurationOLL2 = createOLLBaseConfiguration();
setLeftColorLeftTopFrontCorner(configurationOLL2);
setFrontColorMiddleTopFrontEdge(configurationOLL2);
setFrontColorRightTopFrontCorner(configurationOLL2);
setLeftColorLeftTopMiddleEdge(configurationOLL2);
setRightColorRightTopMiddleEdge(configurationOLL2);
setLeftColorLeftTopBackCorner(configurationOLL2);
setBackColorMiddleTopBackEdge(configurationOLL2);
setBackColorRightTopBackCorner(configurationOLL2);

const configurationOLL3 = createOLLBaseConfiguration();
setLeftColorLeftTopFrontCorner(configurationOLL3);
setFrontColorMiddleTopFrontEdge(configurationOLL3);
setUpColorRightTopFrontCorner(configurationOLL3);
setLeftColorLeftTopMiddleEdge(configurationOLL3);
setRightColorRightTopMiddleEdge(configurationOLL3);
setBackColorLeftTopBackCorner(configurationOLL3);
setBackColorMiddleTopBackEdge(configurationOLL3);
setRightColorRightTopBackCorner(configurationOLL3);

const configurationOLL4 = createOLLBaseConfiguration();
setFrontColorLeftTopFrontCorner(configurationOLL4);
setFrontColorMiddleTopFrontEdge(configurationOLL4);
setRightColorRightTopFrontCorner(configurationOLL4);
setLeftColorLeftTopMiddleEdge(configurationOLL4);
setRightColorRightTopMiddleEdge(configurationOLL4);
setLeftColorLeftTopBackCorner(configurationOLL4);
setBackColorMiddleTopBackEdge(configurationOLL4);
setUpColorRightTopBackCorner(configurationOLL4);

const configurationOLL5 = createOLLBaseConfiguration();
setLeftColorLeftTopFrontCorner(configurationOLL5);
setUpColorMiddleTopFrontEdge(configurationOLL5);
setUpColorRightTopFrontCorner(configurationOLL5);
setLeftColorLeftTopMiddleEdge(configurationOLL5);
setUpColorRightTopMiddleEdge(configurationOLL5);
setBackColorLeftTopBackCorner(configurationOLL5);
setBackColorMiddleTopBackEdge(configurationOLL5);
setRightColorRightTopBackCorner(configurationOLL5);

const configurationOLL6 = createOLLBaseConfiguration();
setFrontColorLeftTopFrontCorner(configurationOLL6);
setFrontColorMiddleTopFrontEdge(configurationOLL6);
setRightColorRightTopFrontCorner(configurationOLL6);
setLeftColorLeftTopMiddleEdge(configurationOLL6);
setUpColorRightTopMiddleEdge(configurationOLL6);
setLeftColorLeftTopBackCorner(configurationOLL6);
setUpColorMiddleTopBackEdge(configurationOLL6);
setUpColorRightTopBackCorner(configurationOLL6);

const configurationOLL7 = createOLLBaseConfiguration();
setUpColorLeftTopFrontCorner(configurationOLL7);
setFrontColorMiddleTopFrontEdge(configurationOLL7);
setFrontColorRightTopFrontCorner(configurationOLL7);
setUpColorLeftTopMiddleEdge(configurationOLL7);
setRightColorRightTopMiddleEdge(configurationOLL7);
setBackColorLeftTopBackCorner(configurationOLL7);
setUpColorMiddleTopBackEdge(configurationOLL7);
setRightColorRightTopBackCorner(configurationOLL7);

const configurationOLL8 = createOLLBaseConfiguration();
setFrontColorLeftTopFrontCorner(configurationOLL8);
setUpColorMiddleTopFrontEdge(configurationOLL8);
setRightColorRightTopFrontCorner(configurationOLL8);
setUpColorLeftTopMiddleEdge(configurationOLL8);
setRightColorRightTopMiddleEdge(configurationOLL8);
setUpColorLeftTopBackCorner(configurationOLL8);
setBackColorMiddleTopBackEdge(configurationOLL8);
setBackColorRightTopBackCorner(configurationOLL8);

const configurationOLL9 = createOLLBaseConfiguration();
setFrontColorLeftTopFrontCorner(configurationOLL9);
setFrontColorMiddleTopFrontEdge(configurationOLL9);
setUpColorRightTopFrontCorner(configurationOLL9);
setUpColorLeftTopMiddleEdge(configurationOLL9);
setRightColorRightTopMiddleEdge(configurationOLL9);
setLeftColorLeftTopBackCorner(configurationOLL9);
setUpColorMiddleTopBackEdge(configurationOLL9);
setBackColorRightTopBackCorner(configurationOLL9);

const configurationOLL10 = createOLLBaseConfiguration();
setLeftColorLeftTopFrontCorner(configurationOLL10);
setUpColorMiddleTopFrontEdge(configurationOLL10);
setFrontColorRightTopFrontCorner(configurationOLL10);
setUpColorLeftTopMiddleEdge(configurationOLL10);
setRightColorRightTopMiddleEdge(configurationOLL10);
setBackColorLeftTopBackCorner(configurationOLL10);
setBackColorMiddleTopBackEdge(configurationOLL10);
setUpColorRightTopBackCorner(configurationOLL10);

const configurationOLL11 = createOLLBaseConfiguration();
setUpColorLeftTopFrontCorner(configurationOLL11);
setUpColorMiddleTopFrontEdge(configurationOLL11);
setFrontColorRightTopFrontCorner(configurationOLL11);
setLeftColorLeftTopMiddleEdge(configurationOLL11);
setUpColorRightTopMiddleEdge(configurationOLL11);
setBackColorLeftTopBackCorner(configurationOLL11);
setBackColorMiddleTopBackEdge(configurationOLL11);
setRightColorRightTopBackCorner(configurationOLL11);

const configurationOLL12 = createOLLBaseConfiguration();
setFrontColorLeftTopFrontCorner(configurationOLL12);
setFrontColorMiddleTopFrontEdge(configurationOLL12);
setRightColorRightTopFrontCorner(configurationOLL12);
setLeftColorLeftTopMiddleEdge(configurationOLL12);
setUpColorRightTopMiddleEdge(configurationOLL12);
setUpColorLeftTopBackCorner(configurationOLL12);
setUpColorMiddleTopBackEdge(configurationOLL12);
setBackColorRightTopBackCorner(configurationOLL12);

const configurationOLL13 = createOLLBaseConfiguration();
setLeftColorLeftTopFrontCorner(configurationOLL13);
setFrontColorMiddleTopFrontEdge(configurationOLL13);
setFrontColorRightTopFrontCorner(configurationOLL13);
setUpColorLeftTopMiddleEdge(configurationOLL13);
setUpColorRightTopMiddleEdge(configurationOLL13);
setBackColorLeftTopBackCorner(configurationOLL13);
setBackColorMiddleTopBackEdge(configurationOLL13);
setUpColorRightTopBackCorner(configurationOLL13);

const configurationOLL14 = createOLLBaseConfiguration();
setFrontColorLeftTopFrontCorner(configurationOLL14);
setFrontColorMiddleTopFrontEdge(configurationOLL14);
setUpColorRightTopFrontCorner(configurationOLL14);
setUpColorLeftTopMiddleEdge(configurationOLL14);
setUpColorRightTopMiddleEdge(configurationOLL14);
setLeftColorLeftTopBackCorner(configurationOLL14);
setBackColorMiddleTopBackEdge(configurationOLL14);
setBackColorLeftTopBackCorner(configurationOLL14);

const configurationOLL15 = createOLLBaseConfiguration();
setLeftColorLeftTopFrontCorner(configurationOLL15);
setFrontColorMiddleTopFrontEdge(configurationOLL15);
setUpColorRightTopFrontCorner(configurationOLL15);
setUpColorLeftTopMiddleEdge(configurationOLL15);
setUpColorRightTopMiddleEdge(configurationOLL15);
setBackColorLeftTopBackCorner(configurationOLL15);
setBackColorMiddleTopBackEdge(configurationOLL15);
setRightColorRightTopBackCorner(configurationOLL15);

const configurationOLL16 = createOLLBaseConfiguration();
setFrontColorLeftTopFrontCorner(configurationOLL16);
setFrontColorMiddleTopFrontEdge(configurationOLL16);
setRightColorRightTopFrontCorner(configurationOLL16);
setUpColorLeftTopMiddleEdge(configurationOLL16);
setUpColorRightTopMiddleEdge(configurationOLL16);
setLeftColorLeftTopBackCorner(configurationOLL16);
setBackColorMiddleTopBackEdge(configurationOLL16);
setUpColorRightTopBackCorner(configurationOLL16);

const configurationOLL17 = createOLLBaseConfiguration();
setLeftColorLeftTopFrontCorner(configurationOLL17);
setFrontColorMiddleTopFrontEdge(configurationOLL17);
setUpColorRightTopFrontCorner(configurationOLL17);
setLeftColorLeftTopMiddleEdge(configurationOLL17);
setRightColorRightTopMiddleEdge(configurationOLL17);
setUpColorLeftTopBackCorner(configurationOLL17);
setBackColorMiddleTopBackEdge(configurationOLL17);
setBackColorRightTopBackCorner(configurationOLL17);

const configurationOLL18 = createOLLBaseConfiguration();
setFrontColorLeftTopFrontCorner(configurationOLL18);
setFrontColorMiddleTopFrontEdge(configurationOLL18);
setFrontColorRightTopFrontCorner(configurationOLL18);
setLeftColorLeftTopMiddleEdge(configurationOLL18);
setRightColorRightTopMiddleEdge(configurationOLL18);
setUpColorLeftTopBackCorner(configurationOLL18);
setBackColorMiddleTopBackEdge(configurationOLL18);
setUpColorRightTopBackCorner(configurationOLL18);

const configurationOLL19 = createOLLBaseConfiguration();
setLeftColorLeftTopFrontCorner(configurationOLL19);
setFrontColorMiddleTopFrontEdge(configurationOLL19);
setRightColorRightTopFrontCorner(configurationOLL19);
setLeftColorLeftTopMiddleEdge(configurationOLL19);
setRightColorRightTopMiddleEdge(configurationOLL19);
setUpColorLeftTopBackCorner(configurationOLL19);
setBackColorMiddleTopBackEdge(configurationOLL19);
setUpColorRightTopBackCorner(configurationOLL19);

const configurationOLL20 = createOLLBaseConfiguration();
setUpColorLeftTopFrontCorner(configurationOLL20);
setFrontColorMiddleTopFrontEdge(configurationOLL20);
setUpColorRightTopFrontCorner(configurationOLL20);
setLeftColorLeftTopMiddleEdge(configurationOLL20);
setRightColorRightTopMiddleEdge(configurationOLL20);
setUpColorLeftTopBackCorner(configurationOLL20);
setBackColorMiddleTopBackEdge(configurationOLL20);
setUpColorRightTopBackCorner(configurationOLL20);

const configurationOLL21 = createOLLBaseConfiguration();
setFrontColorLeftTopFrontCorner(configurationOLL21);
setUpColorMiddleTopFrontEdge(configurationOLL21);
setFrontColorRightTopFrontCorner(configurationOLL21);
setUpColorLeftTopMiddleEdge(configurationOLL21);
setUpColorRightTopMiddleEdge(configurationOLL21);
setBackColorLeftTopBackCorner(configurationOLL21);
setUpColorMiddleTopBackEdge(configurationOLL21);
setBackColorRightTopBackCorner(configurationOLL21);

const configurationOLL22 = createOLLBaseConfiguration();
setLeftColorLeftTopFrontCorner(configurationOLL22);
setUpColorMiddleTopFrontEdge(configurationOLL22);
setFrontColorRightTopFrontCorner(configurationOLL22);
setUpColorLeftTopMiddleEdge(configurationOLL22);
setUpColorRightTopMiddleEdge(configurationOLL22);
setLeftColorLeftTopBackCorner(configurationOLL22);
setUpColorMiddleTopBackEdge(configurationOLL22);
setBackColorRightTopBackCorner(configurationOLL22);

const configurationOLL23 = createOLLBaseConfiguration();
setUpColorLeftTopFrontCorner(configurationOLL23);
setUpColorMiddleTopFrontEdge(configurationOLL23);
setUpColorRightTopFrontCorner(configurationOLL23);
setUpColorLeftTopMiddleEdge(configurationOLL23);
setUpColorRightTopMiddleEdge(configurationOLL23);
setBackColorLeftTopBackCorner(configurationOLL23);
setUpColorMiddleTopBackEdge(configurationOLL23);
setBackColorRightTopBackCorner(configurationOLL23);

const configurationOLL24 = createOLLBaseConfiguration();
setFrontColorLeftTopFrontCorner(configurationOLL24);
setUpColorMiddleTopFrontEdge(configurationOLL24);
setUpColorRightTopFrontCorner(configurationOLL24);
setUpColorLeftTopMiddleEdge(configurationOLL24);
setUpColorRightTopMiddleEdge(configurationOLL24);
setBackColorLeftTopBackCorner(configurationOLL24);
setUpColorMiddleTopBackEdge(configurationOLL24);
setUpColorRightTopBackCorner(configurationOLL24);

const configurationOLL25 = createOLLBaseConfiguration();
setUpColorLeftTopFrontCorner(configurationOLL25);
setUpColorMiddleTopFrontEdge(configurationOLL25);
setFrontColorRightTopFrontCorner(configurationOLL25);
setUpColorLeftTopMiddleEdge(configurationOLL25);
setUpColorRightTopMiddleEdge(configurationOLL25);
setLeftColorLeftTopBackCorner(configurationOLL25);
setUpColorMiddleTopBackEdge(configurationOLL25);
setUpColorRightTopBackCorner(configurationOLL25);

const configurationOLL26 = createOLLBaseConfiguration();
setFrontColorLeftTopFrontCorner(configurationOLL26);
setUpColorMiddleTopFrontEdge(configurationOLL26);
setRightColorRightTopFrontCorner(configurationOLL26);
setUpColorLeftTopMiddleEdge(configurationOLL26);
setUpColorRightTopMiddleEdge(configurationOLL26);
setLeftColorLeftTopBackCorner(configurationOLL26);
setUpColorMiddleTopBackEdge(configurationOLL26);
setUpColorRightTopBackCorner(configurationOLL26);

const configurationOLL27 = createOLLBaseConfiguration();
setUpColorLeftTopFrontCorner(configurationOLL27);
setUpColorMiddleTopFrontEdge(configurationOLL27);
setFrontColorRightTopFrontCorner(configurationOLL27);
setUpColorLeftTopMiddleEdge(configurationOLL27);
setUpColorRightTopMiddleEdge(configurationOLL27);
setBackColorLeftTopBackCorner(configurationOLL27);
setUpColorMiddleTopBackEdge(configurationOLL27);
setRightColorRightTopBackCorner(configurationOLL27);

const configurationOLL28 = createOLLBaseConfiguration();
setUpColorLeftTopFrontCorner(configurationOLL28);
setFrontColorMiddleTopFrontEdge(configurationOLL28);
setUpColorRightTopFrontCorner(configurationOLL28);
setUpColorLeftTopMiddleEdge(configurationOLL28);
setRightColorRightTopMiddleEdge(configurationOLL28);
setUpColorLeftTopBackCorner(configurationOLL28);
setUpColorMiddleTopBackEdge(configurationOLL28);
setUpColorRightTopBackCorner(configurationOLL28);

const configurationOLL29 = createOLLBaseConfiguration();
setFrontColorLeftTopFrontCorner(configurationOLL29);
setFrontColorMiddleTopFrontEdge(configurationOLL29);
setUpColorRightTopFrontCorner(configurationOLL29);
setUpColorLeftTopMiddleEdge(configurationOLL29);
setRightColorRightTopMiddleEdge(configurationOLL29);
setBackColorLeftTopBackCorner(configurationOLL29);
setUpColorMiddleTopBackEdge(configurationOLL29);
setUpColorRightTopBackCorner(configurationOLL29);

const configurationOLL30 = createOLLBaseConfiguration();
setLeftColorLeftTopFrontCorner(configurationOLL30);
setUpColorMiddleTopFrontEdge(configurationOLL30);
setRightColorRightTopFrontCorner(configurationOLL30);
setLeftColorLeftTopMiddleEdge(configurationOLL30);
setUpColorRightTopMiddleEdge(configurationOLL30);
setUpColorLeftTopBackCorner(configurationOLL30);
setBackColorMiddleTopBackEdge(configurationOLL30);
setUpColorRightTopBackCorner(configurationOLL30);

const configurationOLL31 = createOLLBaseConfiguration();
setUpColorLeftTopFrontCorner(configurationOLL31);
setUpColorMiddleTopFrontEdge(configurationOLL31);
setFrontColorRightTopFrontCorner(configurationOLL31);
setUpColorLeftTopMiddleEdge(configurationOLL31);
setRightColorRightTopMiddleEdge(configurationOLL31);
setUpColorLeftTopBackCorner(configurationOLL31);
setBackColorMiddleTopBackEdge(configurationOLL31);
setBackColorRightTopBackCorner(configurationOLL31);

const configurationOLL32 = createOLLBaseConfiguration();
setFrontColorLeftTopFrontCorner(configurationOLL32);
setUpColorMiddleTopFrontEdge(configurationOLL32);
setUpColorRightTopFrontCorner(configurationOLL32);
setLeftColorLeftTopMiddleEdge(configurationOLL32);
setUpColorRightTopMiddleEdge(configurationOLL32);
setBackColorLeftTopBackCorner(configurationOLL32);
setBackColorMiddleTopBackEdge(configurationOLL32);
setUpColorRightTopBackCorner(configurationOLL32);

const configurationOLL33 = createOLLBaseConfiguration();
setFrontColorLeftTopFrontCorner(configurationOLL33);
setFrontColorMiddleTopFrontEdge(configurationOLL33);
setUpColorRightTopFrontCorner(configurationOLL33);
setUpColorLeftTopMiddleEdge(configurationOLL33);
setUpColorRightTopMiddleEdge(configurationOLL33);
setBackColorLeftTopBackCorner(configurationOLL33);
setBackColorMiddleTopBackEdge(configurationOLL33);
setUpColorRightTopBackCorner(configurationOLL33);

const configurationOLL34 = createOLLBaseConfiguration();
setUpColorLeftTopFrontCorner(configurationOLL34);
setFrontColorMiddleTopFrontEdge(configurationOLL34);
setUpColorRightTopFrontCorner(configurationOLL34);
setUpColorLeftTopMiddleEdge(configurationOLL34);
setUpColorRightTopMiddleEdge(configurationOLL34);
setLeftColorLeftTopBackCorner(configurationOLL34);
setBackColorMiddleTopBackEdge(configurationOLL34);
setRightColorRightTopBackCorner(configurationOLL34);

const configurationOLL35 = createOLLBaseConfiguration();
setFrontColorLeftTopFrontCorner(configurationOLL35);
setUpColorMiddleTopFrontEdge(configurationOLL35);
setUpColorRightTopFrontCorner(configurationOLL35);
setLeftColorLeftTopMiddleEdge(configurationOLL35);
setUpColorRightTopMiddleEdge(configurationOLL35);
setUpColorLeftTopBackCorner(configurationOLL35);
setBackColorMiddleTopBackEdge(configurationOLL35);
setRightColorRightTopBackCorner(configurationOLL35);

const configurationOLL36 = createOLLBaseConfiguration();
setFrontColorLeftTopFrontCorner(configurationOLL36);
setUpColorMiddleTopFrontEdge(configurationOLL36);
setUpColorRightTopFrontCorner(configurationOLL36);
setUpColorLeftTopMiddleEdge(configurationOLL36);
setRightColorRightTopMiddleEdge(configurationOLL36);
setUpColorLeftTopBackCorner(configurationOLL36);
setBackColorMiddleTopBackEdge(configurationOLL36);
setRightColorRightTopBackCorner(configurationOLL36);

const configurationOLL37 = createOLLBaseConfiguration();
setFrontColorLeftTopFrontCorner(configurationOLL37);
setFrontColorMiddleTopFrontEdge(configurationOLL37);
setUpColorRightTopFrontCorner(configurationOLL37);
setUpColorLeftTopMiddleEdge(configurationOLL37);
setRightColorRightTopMiddleEdge(configurationOLL37);
setUpColorLeftTopBackCorner(configurationOLL37);
setUpColorMiddleTopBackEdge(configurationOLL37);
setRightColorRightTopBackCorner(configurationOLL37);

const configurationOLL38 = createOLLBaseConfiguration();
setUpColorLeftTopFrontCorner(configurationOLL38);
setFrontColorMiddleTopFrontEdge(configurationOLL38);
setRightColorRightTopFrontCorner(configurationOLL38);
setUpColorLeftTopMiddleEdge(configurationOLL38);
setRightColorRightTopMiddleEdge(configurationOLL38);
setBackColorLeftTopBackCorner(configurationOLL38);
setUpColorMiddleTopBackEdge(configurationOLL38);
setUpColorRightTopBackCorner(configurationOLL38);

const configurationOLL39 = createOLLBaseConfiguration();
setUpColorLeftTopFrontCorner(configurationOLL39);
setFrontColorMiddleTopFrontEdge(configurationOLL39);
setFrontColorRightTopFrontCorner(configurationOLL39);
setUpColorLeftTopMiddleEdge(configurationOLL39);
setUpColorRightTopMiddleEdge(configurationOLL39);
setLeftColorLeftTopBackCorner(configurationOLL39);
setBackColorMiddleTopBackEdge(configurationOLL39);
setUpColorRightTopBackCorner(configurationOLL39);

const configurationOLL40 = createOLLBaseConfiguration();
setLeftColorLeftTopFrontCorner(configurationOLL40);
setFrontColorMiddleTopFrontEdge(configurationOLL40);
setUpColorRightTopFrontCorner(configurationOLL40);
setUpColorLeftTopMiddleEdge(configurationOLL40);
setUpColorRightTopMiddleEdge(configurationOLL40);
setUpColorLeftTopBackCorner(configurationOLL40);
setBackColorMiddleTopBackEdge(configurationOLL40);
setBackColorRightTopBackCorner(configurationOLL40);

const configurationOLL41 = createOLLBaseConfiguration();
setUpColorLeftTopFrontCorner(configurationOLL41);
setFrontColorMiddleTopFrontEdge(configurationOLL41);
setUpColorRightTopFrontCorner(configurationOLL41);
setUpColorLeftTopMiddleEdge(configurationOLL41);
setRightColorRightTopMiddleEdge(configurationOLL41);
setBackColorLeftTopBackCorner(configurationOLL41);
setUpColorMiddleTopBackEdge(configurationOLL41);
setBackColorRightTopBackCorner(configurationOLL41);

const configurationOLL42 = createOLLBaseConfiguration();
setFrontColorLeftTopFrontCorner(configurationOLL42);
setUpColorMiddleTopFrontEdge(configurationOLL42);
setFrontColorRightTopFrontCorner(configurationOLL42);
setUpColorLeftTopMiddleEdge(configurationOLL42);
setRightColorRightTopMiddleEdge(configurationOLL42);
setUpColorLeftTopBackCorner(configurationOLL42);
setBackColorMiddleTopBackEdge(configurationOLL42);
setUpColorRightTopBackCorner(configurationOLL42);

const configurationOLL43 = createOLLBaseConfiguration();
setUpColorLeftTopFrontCorner(configurationOLL43);
setUpColorMiddleTopFrontEdge(configurationOLL43);
setRightColorRightTopFrontCorner(configurationOLL43);
setUpColorLeftTopMiddleEdge(configurationOLL43);
setRightColorRightTopMiddleEdge(configurationOLL43);
setUpColorLeftTopBackCorner(configurationOLL43);
setBackColorMiddleTopBackEdge(configurationOLL43);
setRightColorRightTopBackCorner(configurationOLL43);

const configurationOLL44 = createOLLBaseConfiguration();
setLeftColorLeftTopFrontCorner(configurationOLL44);
setUpColorMiddleTopFrontEdge(configurationOLL44);
setUpColorRightTopFrontCorner(configurationOLL44);
setLeftColorLeftTopMiddleEdge(configurationOLL44);
setUpColorRightTopMiddleEdge(configurationOLL44);
setLeftColorLeftTopBackCorner(configurationOLL44);
setBackColorMiddleTopBackEdge(configurationOLL44);
setUpColorRightTopBackCorner(configurationOLL44);

const configurationOLL45 = createOLLBaseConfiguration();
setLeftColorLeftTopFrontCorner(configurationOLL45);
setFrontColorMiddleTopFrontEdge(configurationOLL45);
setUpColorRightTopFrontCorner(configurationOLL45);
setUpColorLeftTopMiddleEdge(configurationOLL45);
setUpColorRightTopMiddleEdge(configurationOLL45);
setLeftColorLeftTopBackCorner(configurationOLL45);
setBackColorMiddleTopBackEdge(configurationOLL45);
setUpColorRightTopBackCorner(configurationOLL45);

const configurationOLL46 = createOLLBaseConfiguration();
setUpColorLeftTopFrontCorner(configurationOLL46);
setUpColorMiddleTopFrontEdge(configurationOLL46);
setRightColorRightTopFrontCorner(configurationOLL46);
setLeftColorLeftTopMiddleEdge(configurationOLL46);
setRightColorRightTopMiddleEdge(configurationOLL46);
setUpColorLeftTopBackCorner(configurationOLL46);
setUpColorMiddleTopBackEdge(configurationOLL46);
setRightColorRightTopBackCorner(configurationOLL46);

const configurationOLL47 = createOLLBaseConfiguration();
setFrontColorLeftTopFrontCorner(configurationOLL47);
setFrontColorMiddleTopFrontEdge(configurationOLL47);
setRightColorRightTopFrontCorner(configurationOLL47);
setLeftColorLeftTopMiddleEdge(configurationOLL47);
setUpColorRightTopMiddleEdge(configurationOLL47);
setBackColorLeftTopBackCorner(configurationOLL47);
setUpColorMiddleTopBackEdge(configurationOLL47);
setRightColorRightTopBackCorner(configurationOLL47);

const configurationOLL48 = createOLLBaseConfiguration();
setLeftColorLeftTopFrontCorner(configurationOLL48);
setFrontColorMiddleTopFrontEdge(configurationOLL48);
setFrontColorRightTopFrontCorner(configurationOLL48);
setUpColorLeftTopMiddleEdge(configurationOLL48);
setRightColorRightTopMiddleEdge(configurationOLL48);
setLeftColorLeftTopBackCorner(configurationOLL48);
setUpColorMiddleTopBackEdge(configurationOLL48);
setBackColorRightTopBackCorner(configurationOLL48);

const configurationOLL49 = createOLLBaseConfiguration();
setFrontColorLeftTopFrontCorner(configurationOLL49);
setUpColorMiddleTopFrontEdge(configurationOLL49);
setRightColorRightTopFrontCorner(configurationOLL49);
setUpColorLeftTopMiddleEdge(configurationOLL49);
setRightColorRightTopMiddleEdge(configurationOLL49);
setBackColorLeftTopBackCorner(configurationOLL49);
setBackColorMiddleTopBackEdge(configurationOLL49);
setRightColorRightTopBackCorner(configurationOLL49);

const configurationOLL50 = createOLLBaseConfiguration();
setLeftColorLeftTopFrontCorner(configurationOLL50);
setUpColorMiddleTopFrontEdge(configurationOLL50);
setFrontColorRightTopFrontCorner(configurationOLL50);
setLeftColorLeftTopMiddleEdge(configurationOLL50);
setUpColorRightTopMiddleEdge(configurationOLL50);
setLeftColorLeftTopBackCorner(configurationOLL50);
setBackColorMiddleTopBackEdge(configurationOLL50);
setBackColorRightTopBackCorner(configurationOLL50);

const configurationOLL51 = createOLLBaseConfiguration();
setLeftColorLeftTopFrontCorner(configurationOLL51);
setFrontColorMiddleTopFrontEdge(configurationOLL51);
setFrontColorRightTopFrontCorner(configurationOLL51);
setUpColorLeftTopMiddleEdge(configurationOLL51);
setUpColorRightTopMiddleEdge(configurationOLL51);
setLeftColorLeftTopBackCorner(configurationOLL51);
setBackColorMiddleTopBackEdge(configurationOLL51);
setBackColorRightTopBackCorner(configurationOLL51);

const configurationOLL52 = createOLLBaseConfiguration();
setLeftColorLeftTopFrontCorner(configurationOLL52);
setUpColorMiddleTopFrontEdge(configurationOLL52);
setFrontColorRightTopFrontCorner(configurationOLL52);
setLeftColorLeftTopMiddleEdge(configurationOLL52);
setRightColorRightTopMiddleEdge(configurationOLL52);
setLeftColorLeftTopBackCorner(configurationOLL52);
setUpColorMiddleTopBackEdge(configurationOLL52);
setBackColorRightTopBackCorner(configurationOLL52);

const configurationOLL53 = createOLLBaseConfiguration();
setFrontColorLeftTopFrontCorner(configurationOLL53);
setUpColorMiddleTopFrontEdge(configurationOLL53);
setFrontColorRightTopFrontCorner(configurationOLL53);
setUpColorLeftTopMiddleEdge(configurationOLL53);
setRightColorRightTopMiddleEdge(configurationOLL53);
setBackColorLeftTopBackCorner(configurationOLL53);
setBackColorMiddleTopBackEdge(configurationOLL53);
setBackColorRightTopBackCorner(configurationOLL53);

const configurationOLL54 = createOLLBaseConfiguration();
setFrontColorLeftTopFrontCorner(configurationOLL54);
setFrontColorMiddleTopFrontEdge(configurationOLL54);
setFrontColorRightTopFrontCorner(configurationOLL54);
setUpColorLeftTopMiddleEdge(configurationOLL54);
setRightColorRightTopMiddleEdge(configurationOLL54);
setBackColorLeftTopBackCorner(configurationOLL54);
setUpColorMiddleTopBackEdge(configurationOLL54);
setBackColorRightTopBackCorner(configurationOLL54);

const configurationOLL55 = createOLLBaseConfiguration();
setFrontColorLeftTopFrontCorner(configurationOLL55);
setFrontColorMiddleTopFrontEdge(configurationOLL55);
setFrontColorRightTopFrontCorner(configurationOLL55);
setUpColorLeftTopMiddleEdge(configurationOLL55);
setUpColorRightTopMiddleEdge(configurationOLL55);
setBackColorLeftTopBackCorner(configurationOLL55);
setBackColorMiddleTopBackEdge(configurationOLL55);
setBackColorRightTopBackCorner(configurationOLL55);

const configurationOLL56 = createOLLBaseConfiguration();
setLeftColorLeftTopFrontCorner(configurationOLL56);
setFrontColorMiddleTopFrontEdge(configurationOLL56);
setRightColorRightTopFrontCorner(configurationOLL56);
setUpColorLeftTopMiddleEdge(configurationOLL56);
setUpColorRightTopMiddleEdge(configurationOLL56);
setLeftColorLeftTopBackCorner(configurationOLL56);
setBackColorMiddleTopBackEdge(configurationOLL56);
setRightColorRightTopBackCorner(configurationOLL56);

const configurationOLL57 = createOLLBaseConfiguration();
setUpColorLeftTopFrontCorner(configurationOLL57);
setFrontColorMiddleTopFrontEdge(configurationOLL57);
setUpColorRightTopFrontCorner(configurationOLL57);
setUpColorLeftTopMiddleEdge(configurationOLL57);
setUpColorRightTopMiddleEdge(configurationOLL57);
setUpColorLeftTopBackCorner(configurationOLL57);
setBackColorMiddleTopBackEdge(configurationOLL57);
setUpColorRightTopBackCorner(configurationOLL57);

// R - L - U - D - F - B
export const CUBE_CONFIGURATIONS: PIECE[][] = [
    createSolvedConfiguration(), // 0
    configurationF2L1, configurationF2L2, configurationF2L3, configurationF2L4, configurationF2L5, configurationF2L6, configurationF2L7, configurationF2L8, configurationF2L9, configurationF2L10,
    configurationF2L11, configurationF2L12, configurationF2L13, configurationF2L14, configurationF2L15, configurationF2L16, configurationF2L17, configurationF2L18, configurationF2L19, configurationF2L20,
    configurationF2L21, configurationF2L22, configurationF2L23, configurationF2L24, configurationF2L25, configurationF2L26, configurationF2L27, configurationF2L28, configurationF2L29, configurationF2L30,
    configurationF2L31, configurationF2L32, configurationF2L33, configurationF2L34, configurationF2L35, configurationF2L36, configurationF2L37, configurationF2L38, configurationF2L39, configurationF2L40,
    configurationF2L41,
    configurationOLL1, configurationOLL2, configurationOLL3, configurationOLL4, configurationOLL5, configurationOLL6, configurationOLL7, configurationOLL8, configurationOLL9, configurationOLL10,
    configurationOLL11, configurationOLL12, configurationOLL13, configurationOLL14, configurationOLL15, configurationOLL16, configurationOLL17, configurationOLL18, configurationOLL19, configurationOLL20,
    configurationOLL21, configurationOLL22, configurationOLL23, configurationOLL24, configurationOLL25, configurationOLL26, configurationOLL27, configurationOLL28, configurationOLL29, configurationOLL30,
    configurationOLL31, configurationOLL32, configurationOLL33, configurationOLL34, configurationOLL35, configurationOLL36, configurationOLL37, configurationOLL38, configurationOLL39, configurationOLL40,
    configurationOLL41, configurationOLL42, configurationOLL43, configurationOLL44, configurationOLL45, configurationOLL46, configurationOLL47, configurationOLL48, configurationOLL49, configurationOLL50,
    configurationOLL51, configurationOLL52, configurationOLL53, configurationOLL54, configurationOLL55, configurationOLL56, configurationOLL57,
];

// Array.from({length: 57}, (_, id) => CUBE_CONFIGURATIONS.push(createOLLBaseConfiguration()));


// R - L - U - D - F - B


