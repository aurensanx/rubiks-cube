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

const setRightFaceColor = (piece: PIECE, color) => setFaceColor(piece, 0, color);
const setLeftFaceColor = (piece: PIECE, color) => setFaceColor(piece, 2, color);
const setUpFaceColor = (piece: PIECE, color) => setFaceColor(piece, 4, color);
// const setDownFaceColor = (piece: PIECE) => setFaceColor(piece, 6, YELLOW);
const setFrontFaceColor = (piece: PIECE, color) => setFaceColor(piece, 8, color);
const setBackFaceColor = (piece: PIECE, color) => setFaceColor(piece, 10, color);

const setLeftColorLeftTopFrontCorner = (pieces: PIECE[], color) => setLeftFaceColor(pieces[0], color);
const setFrontColorLeftTopFrontCorner = (pieces: PIECE[], color) => setFrontFaceColor(pieces[0], color);
const setUpColorLeftTopFrontCorner = (pieces: PIECE[], color) => setUpFaceColor(pieces[0], color);

const setFrontColorMiddleTopFrontEdge = (pieces: PIECE[], color) => setFrontFaceColor(pieces[1], color);
const setUpColorMiddleTopFrontEdge = (pieces: PIECE[], color) => setUpFaceColor(pieces[1], color);

const setRightColorRightTopFrontCorner = (pieces: PIECE[], color) => setRightFaceColor(pieces[2], color);
const setFrontColorRightTopFrontCorner = (pieces: PIECE[], color) => setFrontFaceColor(pieces[2], color);
const setUpColorRightTopFrontCorner = (pieces: PIECE[], color) => setUpFaceColor(pieces[2], color);

const setLeftColorLeftTopMiddleEdge = (pieces: PIECE[], color) => setLeftFaceColor(pieces[9], color);
const setUpColorLeftTopMiddleEdge = (pieces: PIECE[], color) => setUpFaceColor(pieces[9], color);

const setRightColorRightTopMiddleEdge = (pieces: PIECE[], color) => setRightFaceColor(pieces[11], color);
const setUpColorRightTopMiddleEdge = (pieces: PIECE[], color) => setUpFaceColor(pieces[11], color);

const setLeftColorLeftTopBackCorner = (pieces: PIECE[], color) => setLeftFaceColor(pieces[18], color);
const setBackColorLeftTopBackCorner = (pieces: PIECE[], color) => setBackFaceColor(pieces[18], color);
const setUpColorLeftTopBackCorner = (pieces: PIECE[], color) => setUpFaceColor(pieces[18], color);

const setBackColorMiddleTopBackEdge = (pieces: PIECE[], color) => setBackFaceColor(pieces[19], color);
const setUpColorMiddleTopBackEdge = (pieces: PIECE[], color) => setUpFaceColor(pieces[19], color);

const setRightColorRightTopBackCorner = (pieces: PIECE[], color) => setRightFaceColor(pieces[20], color);
const setBackColorRightTopBackCorner = (pieces: PIECE[], color) => setBackFaceColor(pieces[20], color);
const setUpColorRightTopBackCorner = (pieces: PIECE[], color) => setUpFaceColor(pieces[20], color);

const configurationOLL1 = createOLLBaseConfiguration();
setLeftColorLeftTopFrontCorner(configurationOLL1, YELLOW);
setFrontColorMiddleTopFrontEdge(configurationOLL1, YELLOW);
setRightColorRightTopFrontCorner(configurationOLL1, YELLOW);
setLeftColorLeftTopMiddleEdge(configurationOLL1, YELLOW);
setRightColorRightTopMiddleEdge(configurationOLL1, YELLOW);
setLeftColorLeftTopBackCorner(configurationOLL1, YELLOW);
setBackColorMiddleTopBackEdge(configurationOLL1, YELLOW);
setRightColorRightTopBackCorner(configurationOLL1, YELLOW);

const configurationOLL2 = createOLLBaseConfiguration();
setLeftColorLeftTopFrontCorner(configurationOLL2, YELLOW);
setFrontColorMiddleTopFrontEdge(configurationOLL2, YELLOW);
setFrontColorRightTopFrontCorner(configurationOLL2, YELLOW);
setLeftColorLeftTopMiddleEdge(configurationOLL2, YELLOW);
setRightColorRightTopMiddleEdge(configurationOLL2, YELLOW);
setLeftColorLeftTopBackCorner(configurationOLL2, YELLOW);
setBackColorMiddleTopBackEdge(configurationOLL2, YELLOW);
setBackColorRightTopBackCorner(configurationOLL2, YELLOW);

const configurationOLL3 = createOLLBaseConfiguration();
setLeftColorLeftTopFrontCorner(configurationOLL3, YELLOW);
setFrontColorMiddleTopFrontEdge(configurationOLL3, YELLOW);
setUpColorRightTopFrontCorner(configurationOLL3, YELLOW);
setLeftColorLeftTopMiddleEdge(configurationOLL3, YELLOW);
setRightColorRightTopMiddleEdge(configurationOLL3, YELLOW);
setBackColorLeftTopBackCorner(configurationOLL3, YELLOW);
setBackColorMiddleTopBackEdge(configurationOLL3, YELLOW);
setRightColorRightTopBackCorner(configurationOLL3, YELLOW);

const configurationOLL4 = createOLLBaseConfiguration();
setFrontColorLeftTopFrontCorner(configurationOLL4, YELLOW);
setFrontColorMiddleTopFrontEdge(configurationOLL4, YELLOW);
setRightColorRightTopFrontCorner(configurationOLL4, YELLOW);
setLeftColorLeftTopMiddleEdge(configurationOLL4, YELLOW);
setRightColorRightTopMiddleEdge(configurationOLL4, YELLOW);
setLeftColorLeftTopBackCorner(configurationOLL4, YELLOW);
setBackColorMiddleTopBackEdge(configurationOLL4, YELLOW);
setUpColorRightTopBackCorner(configurationOLL4, YELLOW);

const configurationOLL5 = createOLLBaseConfiguration();
setLeftColorLeftTopFrontCorner(configurationOLL5, YELLOW);
setUpColorMiddleTopFrontEdge(configurationOLL5, YELLOW);
setUpColorRightTopFrontCorner(configurationOLL5, YELLOW);
setLeftColorLeftTopMiddleEdge(configurationOLL5, YELLOW);
setUpColorRightTopMiddleEdge(configurationOLL5, YELLOW);
setBackColorLeftTopBackCorner(configurationOLL5, YELLOW);
setBackColorMiddleTopBackEdge(configurationOLL5, YELLOW);
setRightColorRightTopBackCorner(configurationOLL5, YELLOW);

const configurationOLL6 = createOLLBaseConfiguration();
setFrontColorLeftTopFrontCorner(configurationOLL6, YELLOW);
setFrontColorMiddleTopFrontEdge(configurationOLL6, YELLOW);
setRightColorRightTopFrontCorner(configurationOLL6, YELLOW);
setLeftColorLeftTopMiddleEdge(configurationOLL6, YELLOW);
setUpColorRightTopMiddleEdge(configurationOLL6, YELLOW);
setLeftColorLeftTopBackCorner(configurationOLL6, YELLOW);
setUpColorMiddleTopBackEdge(configurationOLL6, YELLOW);
setUpColorRightTopBackCorner(configurationOLL6, YELLOW);

const configurationOLL7 = createOLLBaseConfiguration();
setUpColorLeftTopFrontCorner(configurationOLL7, YELLOW);
setFrontColorMiddleTopFrontEdge(configurationOLL7, YELLOW);
setFrontColorRightTopFrontCorner(configurationOLL7, YELLOW);
setUpColorLeftTopMiddleEdge(configurationOLL7, YELLOW);
setRightColorRightTopMiddleEdge(configurationOLL7, YELLOW);
setBackColorLeftTopBackCorner(configurationOLL7, YELLOW);
setUpColorMiddleTopBackEdge(configurationOLL7, YELLOW);
setRightColorRightTopBackCorner(configurationOLL7, YELLOW);

const configurationOLL8 = createOLLBaseConfiguration();
setFrontColorLeftTopFrontCorner(configurationOLL8, YELLOW);
setUpColorMiddleTopFrontEdge(configurationOLL8, YELLOW);
setRightColorRightTopFrontCorner(configurationOLL8, YELLOW);
setUpColorLeftTopMiddleEdge(configurationOLL8, YELLOW);
setRightColorRightTopMiddleEdge(configurationOLL8, YELLOW);
setUpColorLeftTopBackCorner(configurationOLL8, YELLOW);
setBackColorMiddleTopBackEdge(configurationOLL8, YELLOW);
setBackColorRightTopBackCorner(configurationOLL8, YELLOW);

const configurationOLL9 = createOLLBaseConfiguration();
setFrontColorLeftTopFrontCorner(configurationOLL9, YELLOW);
setFrontColorMiddleTopFrontEdge(configurationOLL9, YELLOW);
setUpColorRightTopFrontCorner(configurationOLL9, YELLOW);
setUpColorLeftTopMiddleEdge(configurationOLL9, YELLOW);
setRightColorRightTopMiddleEdge(configurationOLL9, YELLOW);
setLeftColorLeftTopBackCorner(configurationOLL9, YELLOW);
setUpColorMiddleTopBackEdge(configurationOLL9, YELLOW);
setBackColorRightTopBackCorner(configurationOLL9, YELLOW);

const configurationOLL10 = createOLLBaseConfiguration();
setLeftColorLeftTopFrontCorner(configurationOLL10, YELLOW);
setUpColorMiddleTopFrontEdge(configurationOLL10, YELLOW);
setFrontColorRightTopFrontCorner(configurationOLL10, YELLOW);
setUpColorLeftTopMiddleEdge(configurationOLL10, YELLOW);
setRightColorRightTopMiddleEdge(configurationOLL10, YELLOW);
setBackColorLeftTopBackCorner(configurationOLL10, YELLOW);
setBackColorMiddleTopBackEdge(configurationOLL10, YELLOW);
setUpColorRightTopBackCorner(configurationOLL10, YELLOW);

const configurationOLL11 = createOLLBaseConfiguration();
setUpColorLeftTopFrontCorner(configurationOLL11, YELLOW);
setUpColorMiddleTopFrontEdge(configurationOLL11, YELLOW);
setFrontColorRightTopFrontCorner(configurationOLL11, YELLOW);
setLeftColorLeftTopMiddleEdge(configurationOLL11, YELLOW);
setUpColorRightTopMiddleEdge(configurationOLL11, YELLOW);
setBackColorLeftTopBackCorner(configurationOLL11, YELLOW);
setBackColorMiddleTopBackEdge(configurationOLL11, YELLOW);
setRightColorRightTopBackCorner(configurationOLL11, YELLOW);

const configurationOLL12 = createOLLBaseConfiguration();
setFrontColorLeftTopFrontCorner(configurationOLL12, YELLOW);
setFrontColorMiddleTopFrontEdge(configurationOLL12, YELLOW);
setRightColorRightTopFrontCorner(configurationOLL12, YELLOW);
setLeftColorLeftTopMiddleEdge(configurationOLL12, YELLOW);
setUpColorRightTopMiddleEdge(configurationOLL12, YELLOW);
setUpColorLeftTopBackCorner(configurationOLL12, YELLOW);
setUpColorMiddleTopBackEdge(configurationOLL12, YELLOW);
setBackColorRightTopBackCorner(configurationOLL12, YELLOW);

const configurationOLL13 = createOLLBaseConfiguration();
setLeftColorLeftTopFrontCorner(configurationOLL13, YELLOW);
setFrontColorMiddleTopFrontEdge(configurationOLL13, YELLOW);
setFrontColorRightTopFrontCorner(configurationOLL13, YELLOW);
setUpColorLeftTopMiddleEdge(configurationOLL13, YELLOW);
setUpColorRightTopMiddleEdge(configurationOLL13, YELLOW);
setBackColorLeftTopBackCorner(configurationOLL13, YELLOW);
setBackColorMiddleTopBackEdge(configurationOLL13, YELLOW);
setUpColorRightTopBackCorner(configurationOLL13, YELLOW);

const configurationOLL14 = createOLLBaseConfiguration();
setFrontColorLeftTopFrontCorner(configurationOLL14, YELLOW);
setFrontColorMiddleTopFrontEdge(configurationOLL14, YELLOW);
setUpColorRightTopFrontCorner(configurationOLL14, YELLOW);
setUpColorLeftTopMiddleEdge(configurationOLL14, YELLOW);
setUpColorRightTopMiddleEdge(configurationOLL14, YELLOW);
setLeftColorLeftTopBackCorner(configurationOLL14, YELLOW);
setBackColorMiddleTopBackEdge(configurationOLL14, YELLOW);
setBackColorLeftTopBackCorner(configurationOLL14, YELLOW);

const configurationOLL15 = createOLLBaseConfiguration();
setLeftColorLeftTopFrontCorner(configurationOLL15, YELLOW);
setFrontColorMiddleTopFrontEdge(configurationOLL15, YELLOW);
setUpColorRightTopFrontCorner(configurationOLL15, YELLOW);
setUpColorLeftTopMiddleEdge(configurationOLL15, YELLOW);
setUpColorRightTopMiddleEdge(configurationOLL15, YELLOW);
setBackColorLeftTopBackCorner(configurationOLL15, YELLOW);
setBackColorMiddleTopBackEdge(configurationOLL15, YELLOW);
setRightColorRightTopBackCorner(configurationOLL15, YELLOW);

const configurationOLL16 = createOLLBaseConfiguration();
setFrontColorLeftTopFrontCorner(configurationOLL16, YELLOW);
setFrontColorMiddleTopFrontEdge(configurationOLL16, YELLOW);
setRightColorRightTopFrontCorner(configurationOLL16, YELLOW);
setUpColorLeftTopMiddleEdge(configurationOLL16, YELLOW);
setUpColorRightTopMiddleEdge(configurationOLL16, YELLOW);
setLeftColorLeftTopBackCorner(configurationOLL16, YELLOW);
setBackColorMiddleTopBackEdge(configurationOLL16, YELLOW);
setUpColorRightTopBackCorner(configurationOLL16, YELLOW);

const configurationOLL17 = createOLLBaseConfiguration();
setLeftColorLeftTopFrontCorner(configurationOLL17, YELLOW);
setFrontColorMiddleTopFrontEdge(configurationOLL17, YELLOW);
setUpColorRightTopFrontCorner(configurationOLL17, YELLOW);
setLeftColorLeftTopMiddleEdge(configurationOLL17, YELLOW);
setRightColorRightTopMiddleEdge(configurationOLL17, YELLOW);
setUpColorLeftTopBackCorner(configurationOLL17, YELLOW);
setBackColorMiddleTopBackEdge(configurationOLL17, YELLOW);
setBackColorRightTopBackCorner(configurationOLL17, YELLOW);

const configurationOLL18 = createOLLBaseConfiguration();
setFrontColorLeftTopFrontCorner(configurationOLL18, YELLOW);
setFrontColorMiddleTopFrontEdge(configurationOLL18, YELLOW);
setFrontColorRightTopFrontCorner(configurationOLL18, YELLOW);
setLeftColorLeftTopMiddleEdge(configurationOLL18, YELLOW);
setRightColorRightTopMiddleEdge(configurationOLL18, YELLOW);
setUpColorLeftTopBackCorner(configurationOLL18, YELLOW);
setBackColorMiddleTopBackEdge(configurationOLL18, YELLOW);
setUpColorRightTopBackCorner(configurationOLL18, YELLOW);

const configurationOLL19 = createOLLBaseConfiguration();
setLeftColorLeftTopFrontCorner(configurationOLL19, YELLOW);
setFrontColorMiddleTopFrontEdge(configurationOLL19, YELLOW);
setRightColorRightTopFrontCorner(configurationOLL19, YELLOW);
setLeftColorLeftTopMiddleEdge(configurationOLL19, YELLOW);
setRightColorRightTopMiddleEdge(configurationOLL19, YELLOW);
setUpColorLeftTopBackCorner(configurationOLL19, YELLOW);
setBackColorMiddleTopBackEdge(configurationOLL19, YELLOW);
setUpColorRightTopBackCorner(configurationOLL19, YELLOW);

const configurationOLL20 = createOLLBaseConfiguration();
setUpColorLeftTopFrontCorner(configurationOLL20, YELLOW);
setFrontColorMiddleTopFrontEdge(configurationOLL20, YELLOW);
setUpColorRightTopFrontCorner(configurationOLL20, YELLOW);
setLeftColorLeftTopMiddleEdge(configurationOLL20, YELLOW);
setRightColorRightTopMiddleEdge(configurationOLL20, YELLOW);
setUpColorLeftTopBackCorner(configurationOLL20, YELLOW);
setBackColorMiddleTopBackEdge(configurationOLL20, YELLOW);
setUpColorRightTopBackCorner(configurationOLL20, YELLOW);

const configurationOLL21 = createOLLBaseConfiguration();
setFrontColorLeftTopFrontCorner(configurationOLL21, YELLOW);
setUpColorMiddleTopFrontEdge(configurationOLL21, YELLOW);
setFrontColorRightTopFrontCorner(configurationOLL21, YELLOW);
setUpColorLeftTopMiddleEdge(configurationOLL21, YELLOW);
setUpColorRightTopMiddleEdge(configurationOLL21, YELLOW);
setBackColorLeftTopBackCorner(configurationOLL21, YELLOW);
setUpColorMiddleTopBackEdge(configurationOLL21, YELLOW);
setBackColorRightTopBackCorner(configurationOLL21, YELLOW);

const configurationOLL22 = createOLLBaseConfiguration();
setLeftColorLeftTopFrontCorner(configurationOLL22, YELLOW);
setUpColorMiddleTopFrontEdge(configurationOLL22, YELLOW);
setFrontColorRightTopFrontCorner(configurationOLL22, YELLOW);
setUpColorLeftTopMiddleEdge(configurationOLL22, YELLOW);
setUpColorRightTopMiddleEdge(configurationOLL22, YELLOW);
setLeftColorLeftTopBackCorner(configurationOLL22, YELLOW);
setUpColorMiddleTopBackEdge(configurationOLL22, YELLOW);
setBackColorRightTopBackCorner(configurationOLL22, YELLOW);

const configurationOLL23 = createOLLBaseConfiguration();
setUpColorLeftTopFrontCorner(configurationOLL23, YELLOW);
setUpColorMiddleTopFrontEdge(configurationOLL23, YELLOW);
setUpColorRightTopFrontCorner(configurationOLL23, YELLOW);
setUpColorLeftTopMiddleEdge(configurationOLL23, YELLOW);
setUpColorRightTopMiddleEdge(configurationOLL23, YELLOW);
setBackColorLeftTopBackCorner(configurationOLL23, YELLOW);
setUpColorMiddleTopBackEdge(configurationOLL23, YELLOW);
setBackColorRightTopBackCorner(configurationOLL23, YELLOW);

const configurationOLL24 = createOLLBaseConfiguration();
setFrontColorLeftTopFrontCorner(configurationOLL24, YELLOW);
setUpColorMiddleTopFrontEdge(configurationOLL24, YELLOW);
setUpColorRightTopFrontCorner(configurationOLL24, YELLOW);
setUpColorLeftTopMiddleEdge(configurationOLL24, YELLOW);
setUpColorRightTopMiddleEdge(configurationOLL24, YELLOW);
setBackColorLeftTopBackCorner(configurationOLL24, YELLOW);
setUpColorMiddleTopBackEdge(configurationOLL24, YELLOW);
setUpColorRightTopBackCorner(configurationOLL24, YELLOW);

const configurationOLL25 = createOLLBaseConfiguration();
setUpColorLeftTopFrontCorner(configurationOLL25, YELLOW);
setUpColorMiddleTopFrontEdge(configurationOLL25, YELLOW);
setFrontColorRightTopFrontCorner(configurationOLL25, YELLOW);
setUpColorLeftTopMiddleEdge(configurationOLL25, YELLOW);
setUpColorRightTopMiddleEdge(configurationOLL25, YELLOW);
setLeftColorLeftTopBackCorner(configurationOLL25, YELLOW);
setUpColorMiddleTopBackEdge(configurationOLL25, YELLOW);
setUpColorRightTopBackCorner(configurationOLL25, YELLOW);

const configurationOLL26 = createOLLBaseConfiguration();
setFrontColorLeftTopFrontCorner(configurationOLL26, YELLOW);
setUpColorMiddleTopFrontEdge(configurationOLL26, YELLOW);
setRightColorRightTopFrontCorner(configurationOLL26, YELLOW);
setUpColorLeftTopMiddleEdge(configurationOLL26, YELLOW);
setUpColorRightTopMiddleEdge(configurationOLL26, YELLOW);
setLeftColorLeftTopBackCorner(configurationOLL26, YELLOW);
setUpColorMiddleTopBackEdge(configurationOLL26, YELLOW);
setUpColorRightTopBackCorner(configurationOLL26, YELLOW);

const configurationOLL27 = createOLLBaseConfiguration();
setUpColorLeftTopFrontCorner(configurationOLL27, YELLOW);
setUpColorMiddleTopFrontEdge(configurationOLL27, YELLOW);
setFrontColorRightTopFrontCorner(configurationOLL27, YELLOW);
setUpColorLeftTopMiddleEdge(configurationOLL27, YELLOW);
setUpColorRightTopMiddleEdge(configurationOLL27, YELLOW);
setBackColorLeftTopBackCorner(configurationOLL27, YELLOW);
setUpColorMiddleTopBackEdge(configurationOLL27, YELLOW);
setRightColorRightTopBackCorner(configurationOLL27, YELLOW);

const configurationOLL28 = createOLLBaseConfiguration();
setUpColorLeftTopFrontCorner(configurationOLL28, YELLOW);
setFrontColorMiddleTopFrontEdge(configurationOLL28, YELLOW);
setUpColorRightTopFrontCorner(configurationOLL28, YELLOW);
setUpColorLeftTopMiddleEdge(configurationOLL28, YELLOW);
setRightColorRightTopMiddleEdge(configurationOLL28, YELLOW);
setUpColorLeftTopBackCorner(configurationOLL28, YELLOW);
setUpColorMiddleTopBackEdge(configurationOLL28, YELLOW);
setUpColorRightTopBackCorner(configurationOLL28, YELLOW);

const configurationOLL29 = createOLLBaseConfiguration();
setFrontColorLeftTopFrontCorner(configurationOLL29, YELLOW);
setFrontColorMiddleTopFrontEdge(configurationOLL29, YELLOW);
setUpColorRightTopFrontCorner(configurationOLL29, YELLOW);
setUpColorLeftTopMiddleEdge(configurationOLL29, YELLOW);
setRightColorRightTopMiddleEdge(configurationOLL29, YELLOW);
setBackColorLeftTopBackCorner(configurationOLL29, YELLOW);
setUpColorMiddleTopBackEdge(configurationOLL29, YELLOW);
setUpColorRightTopBackCorner(configurationOLL29, YELLOW);

const configurationOLL30 = createOLLBaseConfiguration();
setLeftColorLeftTopFrontCorner(configurationOLL30, YELLOW);
setUpColorMiddleTopFrontEdge(configurationOLL30, YELLOW);
setRightColorRightTopFrontCorner(configurationOLL30, YELLOW);
setLeftColorLeftTopMiddleEdge(configurationOLL30, YELLOW);
setUpColorRightTopMiddleEdge(configurationOLL30, YELLOW);
setUpColorLeftTopBackCorner(configurationOLL30, YELLOW);
setBackColorMiddleTopBackEdge(configurationOLL30, YELLOW);
setUpColorRightTopBackCorner(configurationOLL30, YELLOW);

const configurationOLL31 = createOLLBaseConfiguration();
setUpColorLeftTopFrontCorner(configurationOLL31, YELLOW);
setUpColorMiddleTopFrontEdge(configurationOLL31, YELLOW);
setFrontColorRightTopFrontCorner(configurationOLL31, YELLOW);
setUpColorLeftTopMiddleEdge(configurationOLL31, YELLOW);
setRightColorRightTopMiddleEdge(configurationOLL31, YELLOW);
setUpColorLeftTopBackCorner(configurationOLL31, YELLOW);
setBackColorMiddleTopBackEdge(configurationOLL31, YELLOW);
setBackColorRightTopBackCorner(configurationOLL31, YELLOW);

const configurationOLL32 = createOLLBaseConfiguration();
setFrontColorLeftTopFrontCorner(configurationOLL32, YELLOW);
setUpColorMiddleTopFrontEdge(configurationOLL32, YELLOW);
setUpColorRightTopFrontCorner(configurationOLL32, YELLOW);
setLeftColorLeftTopMiddleEdge(configurationOLL32, YELLOW);
setUpColorRightTopMiddleEdge(configurationOLL32, YELLOW);
setBackColorLeftTopBackCorner(configurationOLL32, YELLOW);
setBackColorMiddleTopBackEdge(configurationOLL32, YELLOW);
setUpColorRightTopBackCorner(configurationOLL32, YELLOW);

const configurationOLL33 = createOLLBaseConfiguration();
setFrontColorLeftTopFrontCorner(configurationOLL33, YELLOW);
setFrontColorMiddleTopFrontEdge(configurationOLL33, YELLOW);
setUpColorRightTopFrontCorner(configurationOLL33, YELLOW);
setUpColorLeftTopMiddleEdge(configurationOLL33, YELLOW);
setUpColorRightTopMiddleEdge(configurationOLL33, YELLOW);
setBackColorLeftTopBackCorner(configurationOLL33, YELLOW);
setBackColorMiddleTopBackEdge(configurationOLL33, YELLOW);
setUpColorRightTopBackCorner(configurationOLL33, YELLOW);

const configurationOLL34 = createOLLBaseConfiguration();
setUpColorLeftTopFrontCorner(configurationOLL34, YELLOW);
setFrontColorMiddleTopFrontEdge(configurationOLL34, YELLOW);
setUpColorRightTopFrontCorner(configurationOLL34, YELLOW);
setUpColorLeftTopMiddleEdge(configurationOLL34, YELLOW);
setUpColorRightTopMiddleEdge(configurationOLL34, YELLOW);
setLeftColorLeftTopBackCorner(configurationOLL34, YELLOW);
setBackColorMiddleTopBackEdge(configurationOLL34, YELLOW);
setRightColorRightTopBackCorner(configurationOLL34, YELLOW);

const configurationOLL35 = createOLLBaseConfiguration();
setFrontColorLeftTopFrontCorner(configurationOLL35, YELLOW);
setUpColorMiddleTopFrontEdge(configurationOLL35, YELLOW);
setUpColorRightTopFrontCorner(configurationOLL35, YELLOW);
setLeftColorLeftTopMiddleEdge(configurationOLL35, YELLOW);
setUpColorRightTopMiddleEdge(configurationOLL35, YELLOW);
setUpColorLeftTopBackCorner(configurationOLL35, YELLOW);
setBackColorMiddleTopBackEdge(configurationOLL35, YELLOW);
setRightColorRightTopBackCorner(configurationOLL35, YELLOW);

const configurationOLL36 = createOLLBaseConfiguration();
setFrontColorLeftTopFrontCorner(configurationOLL36, YELLOW);
setUpColorMiddleTopFrontEdge(configurationOLL36, YELLOW);
setUpColorRightTopFrontCorner(configurationOLL36, YELLOW);
setUpColorLeftTopMiddleEdge(configurationOLL36, YELLOW);
setRightColorRightTopMiddleEdge(configurationOLL36, YELLOW);
setUpColorLeftTopBackCorner(configurationOLL36, YELLOW);
setBackColorMiddleTopBackEdge(configurationOLL36, YELLOW);
setRightColorRightTopBackCorner(configurationOLL36, YELLOW);

const configurationOLL37 = createOLLBaseConfiguration();
setFrontColorLeftTopFrontCorner(configurationOLL37, YELLOW);
setFrontColorMiddleTopFrontEdge(configurationOLL37, YELLOW);
setUpColorRightTopFrontCorner(configurationOLL37, YELLOW);
setUpColorLeftTopMiddleEdge(configurationOLL37, YELLOW);
setRightColorRightTopMiddleEdge(configurationOLL37, YELLOW);
setUpColorLeftTopBackCorner(configurationOLL37, YELLOW);
setUpColorMiddleTopBackEdge(configurationOLL37, YELLOW);
setRightColorRightTopBackCorner(configurationOLL37, YELLOW);

const configurationOLL38 = createOLLBaseConfiguration();
setUpColorLeftTopFrontCorner(configurationOLL38, YELLOW);
setFrontColorMiddleTopFrontEdge(configurationOLL38, YELLOW);
setRightColorRightTopFrontCorner(configurationOLL38, YELLOW);
setUpColorLeftTopMiddleEdge(configurationOLL38, YELLOW);
setRightColorRightTopMiddleEdge(configurationOLL38, YELLOW);
setBackColorLeftTopBackCorner(configurationOLL38, YELLOW);
setUpColorMiddleTopBackEdge(configurationOLL38, YELLOW);
setUpColorRightTopBackCorner(configurationOLL38, YELLOW);

const configurationOLL39 = createOLLBaseConfiguration();
setUpColorLeftTopFrontCorner(configurationOLL39, YELLOW);
setFrontColorMiddleTopFrontEdge(configurationOLL39, YELLOW);
setFrontColorRightTopFrontCorner(configurationOLL39, YELLOW);
setUpColorLeftTopMiddleEdge(configurationOLL39, YELLOW);
setUpColorRightTopMiddleEdge(configurationOLL39, YELLOW);
setLeftColorLeftTopBackCorner(configurationOLL39, YELLOW);
setBackColorMiddleTopBackEdge(configurationOLL39, YELLOW);
setUpColorRightTopBackCorner(configurationOLL39, YELLOW);

const configurationOLL40 = createOLLBaseConfiguration();
setLeftColorLeftTopFrontCorner(configurationOLL40, YELLOW);
setFrontColorMiddleTopFrontEdge(configurationOLL40, YELLOW);
setUpColorRightTopFrontCorner(configurationOLL40, YELLOW);
setUpColorLeftTopMiddleEdge(configurationOLL40, YELLOW);
setUpColorRightTopMiddleEdge(configurationOLL40, YELLOW);
setUpColorLeftTopBackCorner(configurationOLL40, YELLOW);
setBackColorMiddleTopBackEdge(configurationOLL40, YELLOW);
setBackColorRightTopBackCorner(configurationOLL40, YELLOW);

const configurationOLL41 = createOLLBaseConfiguration();
setUpColorLeftTopFrontCorner(configurationOLL41, YELLOW);
setFrontColorMiddleTopFrontEdge(configurationOLL41, YELLOW);
setUpColorRightTopFrontCorner(configurationOLL41, YELLOW);
setUpColorLeftTopMiddleEdge(configurationOLL41, YELLOW);
setRightColorRightTopMiddleEdge(configurationOLL41, YELLOW);
setBackColorLeftTopBackCorner(configurationOLL41, YELLOW);
setUpColorMiddleTopBackEdge(configurationOLL41, YELLOW);
setBackColorRightTopBackCorner(configurationOLL41, YELLOW);

const configurationOLL42 = createOLLBaseConfiguration();
setFrontColorLeftTopFrontCorner(configurationOLL42, YELLOW);
setUpColorMiddleTopFrontEdge(configurationOLL42, YELLOW);
setFrontColorRightTopFrontCorner(configurationOLL42, YELLOW);
setUpColorLeftTopMiddleEdge(configurationOLL42, YELLOW);
setRightColorRightTopMiddleEdge(configurationOLL42, YELLOW);
setUpColorLeftTopBackCorner(configurationOLL42, YELLOW);
setBackColorMiddleTopBackEdge(configurationOLL42, YELLOW);
setUpColorRightTopBackCorner(configurationOLL42, YELLOW);

const configurationOLL43 = createOLLBaseConfiguration();
setUpColorLeftTopFrontCorner(configurationOLL43, YELLOW);
setUpColorMiddleTopFrontEdge(configurationOLL43, YELLOW);
setRightColorRightTopFrontCorner(configurationOLL43, YELLOW);
setUpColorLeftTopMiddleEdge(configurationOLL43, YELLOW);
setRightColorRightTopMiddleEdge(configurationOLL43, YELLOW);
setUpColorLeftTopBackCorner(configurationOLL43, YELLOW);
setBackColorMiddleTopBackEdge(configurationOLL43, YELLOW);
setRightColorRightTopBackCorner(configurationOLL43, YELLOW);

const configurationOLL44 = createOLLBaseConfiguration();
setLeftColorLeftTopFrontCorner(configurationOLL44, YELLOW);
setUpColorMiddleTopFrontEdge(configurationOLL44, YELLOW);
setUpColorRightTopFrontCorner(configurationOLL44, YELLOW);
setLeftColorLeftTopMiddleEdge(configurationOLL44, YELLOW);
setUpColorRightTopMiddleEdge(configurationOLL44, YELLOW);
setLeftColorLeftTopBackCorner(configurationOLL44, YELLOW);
setBackColorMiddleTopBackEdge(configurationOLL44, YELLOW);
setUpColorRightTopBackCorner(configurationOLL44, YELLOW);

const configurationOLL45 = createOLLBaseConfiguration();
setLeftColorLeftTopFrontCorner(configurationOLL45, YELLOW);
setFrontColorMiddleTopFrontEdge(configurationOLL45, YELLOW);
setUpColorRightTopFrontCorner(configurationOLL45, YELLOW);
setUpColorLeftTopMiddleEdge(configurationOLL45, YELLOW);
setUpColorRightTopMiddleEdge(configurationOLL45, YELLOW);
setLeftColorLeftTopBackCorner(configurationOLL45, YELLOW);
setBackColorMiddleTopBackEdge(configurationOLL45, YELLOW);
setUpColorRightTopBackCorner(configurationOLL45, YELLOW);

const configurationOLL46 = createOLLBaseConfiguration();
setUpColorLeftTopFrontCorner(configurationOLL46, YELLOW);
setUpColorMiddleTopFrontEdge(configurationOLL46, YELLOW);
setRightColorRightTopFrontCorner(configurationOLL46, YELLOW);
setLeftColorLeftTopMiddleEdge(configurationOLL46, YELLOW);
setRightColorRightTopMiddleEdge(configurationOLL46, YELLOW);
setUpColorLeftTopBackCorner(configurationOLL46, YELLOW);
setUpColorMiddleTopBackEdge(configurationOLL46, YELLOW);
setRightColorRightTopBackCorner(configurationOLL46, YELLOW);

const configurationOLL47 = createOLLBaseConfiguration();
setFrontColorLeftTopFrontCorner(configurationOLL47, YELLOW);
setFrontColorMiddleTopFrontEdge(configurationOLL47, YELLOW);
setRightColorRightTopFrontCorner(configurationOLL47, YELLOW);
setLeftColorLeftTopMiddleEdge(configurationOLL47, YELLOW);
setUpColorRightTopMiddleEdge(configurationOLL47, YELLOW);
setBackColorLeftTopBackCorner(configurationOLL47, YELLOW);
setUpColorMiddleTopBackEdge(configurationOLL47, YELLOW);
setRightColorRightTopBackCorner(configurationOLL47, YELLOW);

const configurationOLL48 = createOLLBaseConfiguration();
setLeftColorLeftTopFrontCorner(configurationOLL48, YELLOW);
setFrontColorMiddleTopFrontEdge(configurationOLL48, YELLOW);
setFrontColorRightTopFrontCorner(configurationOLL48, YELLOW);
setUpColorLeftTopMiddleEdge(configurationOLL48, YELLOW);
setRightColorRightTopMiddleEdge(configurationOLL48, YELLOW);
setLeftColorLeftTopBackCorner(configurationOLL48, YELLOW);
setUpColorMiddleTopBackEdge(configurationOLL48, YELLOW);
setBackColorRightTopBackCorner(configurationOLL48, YELLOW);

const configurationOLL49 = createOLLBaseConfiguration();
setFrontColorLeftTopFrontCorner(configurationOLL49, YELLOW);
setUpColorMiddleTopFrontEdge(configurationOLL49, YELLOW);
setRightColorRightTopFrontCorner(configurationOLL49, YELLOW);
setUpColorLeftTopMiddleEdge(configurationOLL49, YELLOW);
setRightColorRightTopMiddleEdge(configurationOLL49, YELLOW);
setBackColorLeftTopBackCorner(configurationOLL49, YELLOW);
setBackColorMiddleTopBackEdge(configurationOLL49, YELLOW);
setRightColorRightTopBackCorner(configurationOLL49, YELLOW);

const configurationOLL50 = createOLLBaseConfiguration();
setLeftColorLeftTopFrontCorner(configurationOLL50, YELLOW);
setUpColorMiddleTopFrontEdge(configurationOLL50, YELLOW);
setFrontColorRightTopFrontCorner(configurationOLL50, YELLOW);
setLeftColorLeftTopMiddleEdge(configurationOLL50, YELLOW);
setUpColorRightTopMiddleEdge(configurationOLL50, YELLOW);
setLeftColorLeftTopBackCorner(configurationOLL50, YELLOW);
setBackColorMiddleTopBackEdge(configurationOLL50, YELLOW);
setBackColorRightTopBackCorner(configurationOLL50, YELLOW);

const configurationOLL51 = createOLLBaseConfiguration();
setLeftColorLeftTopFrontCorner(configurationOLL51, YELLOW);
setFrontColorMiddleTopFrontEdge(configurationOLL51, YELLOW);
setFrontColorRightTopFrontCorner(configurationOLL51, YELLOW);
setUpColorLeftTopMiddleEdge(configurationOLL51, YELLOW);
setUpColorRightTopMiddleEdge(configurationOLL51, YELLOW);
setLeftColorLeftTopBackCorner(configurationOLL51, YELLOW);
setBackColorMiddleTopBackEdge(configurationOLL51, YELLOW);
setBackColorRightTopBackCorner(configurationOLL51, YELLOW);

const configurationOLL52 = createOLLBaseConfiguration();
setLeftColorLeftTopFrontCorner(configurationOLL52, YELLOW);
setUpColorMiddleTopFrontEdge(configurationOLL52, YELLOW);
setFrontColorRightTopFrontCorner(configurationOLL52, YELLOW);
setLeftColorLeftTopMiddleEdge(configurationOLL52, YELLOW);
setRightColorRightTopMiddleEdge(configurationOLL52, YELLOW);
setLeftColorLeftTopBackCorner(configurationOLL52, YELLOW);
setUpColorMiddleTopBackEdge(configurationOLL52, YELLOW);
setBackColorRightTopBackCorner(configurationOLL52, YELLOW);

const configurationOLL53 = createOLLBaseConfiguration();
setFrontColorLeftTopFrontCorner(configurationOLL53, YELLOW);
setUpColorMiddleTopFrontEdge(configurationOLL53, YELLOW);
setFrontColorRightTopFrontCorner(configurationOLL53, YELLOW);
setUpColorLeftTopMiddleEdge(configurationOLL53, YELLOW);
setRightColorRightTopMiddleEdge(configurationOLL53, YELLOW);
setBackColorLeftTopBackCorner(configurationOLL53, YELLOW);
setBackColorMiddleTopBackEdge(configurationOLL53, YELLOW);
setBackColorRightTopBackCorner(configurationOLL53, YELLOW);

const configurationOLL54 = createOLLBaseConfiguration();
setFrontColorLeftTopFrontCorner(configurationOLL54, YELLOW);
setFrontColorMiddleTopFrontEdge(configurationOLL54, YELLOW);
setFrontColorRightTopFrontCorner(configurationOLL54, YELLOW);
setUpColorLeftTopMiddleEdge(configurationOLL54, YELLOW);
setRightColorRightTopMiddleEdge(configurationOLL54, YELLOW);
setBackColorLeftTopBackCorner(configurationOLL54, YELLOW);
setUpColorMiddleTopBackEdge(configurationOLL54, YELLOW);
setBackColorRightTopBackCorner(configurationOLL54, YELLOW);

const configurationOLL55 = createOLLBaseConfiguration();
setFrontColorLeftTopFrontCorner(configurationOLL55, YELLOW);
setFrontColorMiddleTopFrontEdge(configurationOLL55, YELLOW);
setFrontColorRightTopFrontCorner(configurationOLL55, YELLOW);
setUpColorLeftTopMiddleEdge(configurationOLL55, YELLOW);
setUpColorRightTopMiddleEdge(configurationOLL55, YELLOW);
setBackColorLeftTopBackCorner(configurationOLL55, YELLOW);
setBackColorMiddleTopBackEdge(configurationOLL55, YELLOW);
setBackColorRightTopBackCorner(configurationOLL55, YELLOW);

const configurationOLL56 = createOLLBaseConfiguration();
setLeftColorLeftTopFrontCorner(configurationOLL56, YELLOW);
setFrontColorMiddleTopFrontEdge(configurationOLL56, YELLOW);
setRightColorRightTopFrontCorner(configurationOLL56, YELLOW);
setUpColorLeftTopMiddleEdge(configurationOLL56, YELLOW);
setUpColorRightTopMiddleEdge(configurationOLL56, YELLOW);
setLeftColorLeftTopBackCorner(configurationOLL56, YELLOW);
setBackColorMiddleTopBackEdge(configurationOLL56, YELLOW);
setRightColorRightTopBackCorner(configurationOLL56, YELLOW);

const configurationOLL57 = createOLLBaseConfiguration();
setUpColorLeftTopFrontCorner(configurationOLL57, YELLOW);
setFrontColorMiddleTopFrontEdge(configurationOLL57, YELLOW);
setUpColorRightTopFrontCorner(configurationOLL57, YELLOW);
setUpColorLeftTopMiddleEdge(configurationOLL57, YELLOW);
setUpColorRightTopMiddleEdge(configurationOLL57, YELLOW);
setUpColorLeftTopBackCorner(configurationOLL57, YELLOW);
setBackColorMiddleTopBackEdge(configurationOLL57, YELLOW);
setUpColorRightTopBackCorner(configurationOLL57, YELLOW);

const configurationPLL1 = createSolvedConfiguration();
setFrontColorMiddleTopFrontEdge(configurationPLL1, RED);
setLeftColorLeftTopMiddleEdge(configurationPLL1, BLUE);
setRightColorRightTopMiddleEdge(configurationPLL1, ORANGE);

const configurationPLL2 = createSolvedConfiguration();
setFrontColorMiddleTopFrontEdge(configurationPLL2, ORANGE);
setLeftColorLeftTopMiddleEdge(configurationPLL2, RED);
setRightColorRightTopMiddleEdge(configurationPLL2, BLUE);

const configurationPLL3 = createSolvedConfiguration();
setFrontColorMiddleTopFrontEdge(configurationPLL3, GREEN);
setLeftColorLeftTopMiddleEdge(configurationPLL3, RED);
setRightColorRightTopMiddleEdge(configurationPLL3, ORANGE);
setBackColorMiddleTopBackEdge(configurationPLL3, BLUE);

const configurationPLL4 = createSolvedConfiguration();
setFrontColorMiddleTopFrontEdge(configurationPLL4, ORANGE);
setLeftColorLeftTopMiddleEdge(configurationPLL4, BLUE);
setRightColorRightTopMiddleEdge(configurationPLL4, GREEN);
setBackColorMiddleTopBackEdge(configurationPLL4, RED);

const configurationPLL5 = createSolvedConfiguration();
setLeftColorLeftTopFrontCorner(configurationPLL5, RED);
setFrontColorLeftTopFrontCorner(configurationPLL5, GREEN);
setRightColorRightTopFrontCorner(configurationPLL5, BLUE);
setFrontColorRightTopFrontCorner(configurationPLL5, ORANGE);
setRightColorRightTopBackCorner(configurationPLL5, BLUE);
setBackColorRightTopBackCorner(configurationPLL5, RED);

const configurationPLL6 = createSolvedConfiguration();
setLeftColorLeftTopFrontCorner(configurationPLL6, BLUE);
setFrontColorLeftTopFrontCorner(configurationPLL6, RED);
setRightColorRightTopFrontCorner(configurationPLL6, GREEN);
setFrontColorRightTopFrontCorner(configurationPLL6, RED);
setRightColorRightTopBackCorner(configurationPLL6, ORANGE);
setBackColorRightTopBackCorner(configurationPLL6, BLUE);

const configurationPLL7 = createSolvedConfiguration();
setLeftColorLeftTopFrontCorner(configurationPLL7, GREEN);
setFrontColorLeftTopFrontCorner(configurationPLL7, ORANGE);
setRightColorRightTopFrontCorner(configurationPLL7, GREEN);
setFrontColorRightTopFrontCorner(configurationPLL7, RED);
setLeftColorLeftTopBackCorner(configurationPLL7, BLUE);
setBackColorLeftTopBackCorner(configurationPLL7, ORANGE);
setRightColorRightTopBackCorner(configurationPLL7, BLUE);
setBackColorRightTopBackCorner(configurationPLL7, RED);

const configurationPLL8 = createSolvedConfiguration();
setRightColorRightTopFrontCorner(configurationPLL8, GREEN);
setFrontColorRightTopFrontCorner(configurationPLL8, RED);
setLeftColorLeftTopMiddleEdge(configurationPLL8, RED);
setRightColorRightTopMiddleEdge(configurationPLL8, ORANGE);
setRightColorRightTopBackCorner(configurationPLL8, BLUE);
setBackColorRightTopBackCorner(configurationPLL8, RED);

const configurationPLL9 = createSolvedConfiguration();
setFrontColorMiddleTopFrontEdge(configurationPLL9, GREEN);
setRightColorRightTopFrontCorner(configurationPLL9, GREEN);
setFrontColorRightTopFrontCorner(configurationPLL9, RED);
setBackColorMiddleTopBackEdge(configurationPLL9, BLUE);
setRightColorRightTopBackCorner(configurationPLL9, BLUE);
setBackColorRightTopBackCorner(configurationPLL9, RED);

const configurationPLL10 = createSolvedConfiguration();
setRightColorRightTopFrontCorner(configurationPLL10, ORANGE);
setFrontColorRightTopFrontCorner(configurationPLL10, GREEN);
setRightColorRightTopMiddleEdge(configurationPLL10, GREEN);
setLeftColorLeftTopBackCorner(configurationPLL10, RED);
setBackColorLeftTopBackCorner(configurationPLL10, BLUE);
setBackColorMiddleTopBackEdge(configurationPLL10, RED);

const configurationPLL11 = createSolvedConfiguration();
setRightColorRightTopFrontCorner(configurationPLL11, ORANGE);
setFrontColorRightTopFrontCorner(configurationPLL11, GREEN);
setLeftColorLeftTopMiddleEdge(configurationPLL11, GREEN);
setLeftColorLeftTopBackCorner(configurationPLL11, RED);
setBackColorLeftTopBackCorner(configurationPLL11, BLUE);
setBackColorMiddleTopBackEdge(configurationPLL11, ORANGE);

const configurationPLL12 = createSolvedConfiguration();
setLeftColorLeftTopFrontCorner(configurationPLL12, BLUE);
setFrontColorLeftTopFrontCorner(configurationPLL12, RED);
setFrontColorMiddleTopFrontEdge(configurationPLL12, RED);
setRightColorRightTopFrontCorner(configurationPLL12, BLUE);
setFrontColorRightTopFrontCorner(configurationPLL12, ORANGE);
setRightColorRightTopMiddleEdge(configurationPLL12, BLUE);

const configurationPLL13 = createSolvedConfiguration();
setFrontColorMiddleTopFrontEdge(configurationPLL13, RED);
setRightColorRightTopFrontCorner(configurationPLL13, GREEN);
setFrontColorRightTopFrontCorner(configurationPLL13, RED);
setRightColorRightTopMiddleEdge(configurationPLL13, BLUE);
setRightColorRightTopBackCorner(configurationPLL13, BLUE);
setBackColorRightTopBackCorner(configurationPLL13, RED);

const configurationPLL14 = createSolvedConfiguration();
setFrontColorMiddleTopFrontEdge(configurationPLL14, RED);
setRightColorRightTopMiddleEdge(configurationPLL14, BLUE);
setLeftColorLeftTopBackCorner(configurationPLL14, GREEN);
setBackColorLeftTopBackCorner(configurationPLL14, RED);
setRightColorRightTopBackCorner(configurationPLL14, GREEN);
setBackColorRightTopBackCorner(configurationPLL14, ORANGE);

const configurationPLL15 = createSolvedConfiguration();
setRightColorRightTopFrontCorner(configurationPLL15, GREEN);
setFrontColorRightTopFrontCorner(configurationPLL15, RED);
setLeftColorLeftTopMiddleEdge(configurationPLL15, GREEN);
setBackColorMiddleTopBackEdge(configurationPLL15, ORANGE);
setRightColorRightTopBackCorner(configurationPLL15, BLUE);
setBackColorRightTopBackCorner(configurationPLL15, RED);

const configurationPLL16 = createSolvedConfiguration();
setLeftColorLeftTopFrontCorner(configurationPLL16, BLUE);
setFrontColorLeftTopFrontCorner(configurationPLL16, RED);
setFrontColorMiddleTopFrontEdge(configurationPLL16, ORANGE);
setRightColorRightTopFrontCorner(configurationPLL16, ORANGE);
setFrontColorRightTopFrontCorner(configurationPLL16, GREEN);
setLeftColorLeftTopMiddleEdge(configurationPLL16, RED);
setRightColorRightTopMiddleEdge(configurationPLL16, BLUE);
setLeftColorLeftTopBackCorner(configurationPLL16, BLUE);
setBackColorLeftTopBackCorner(configurationPLL16, ORANGE);

const configurationPLL17 = createSolvedConfiguration();
setLeftColorLeftTopFrontCorner(configurationPLL17, GREEN);
setFrontColorLeftTopFrontCorner(configurationPLL17, ORANGE);
setFrontColorMiddleTopFrontEdge(configurationPLL17, GREEN);
setLeftColorLeftTopMiddleEdge(configurationPLL17, BLUE);
setLeftColorLeftTopBackCorner(configurationPLL17, GREEN);
setBackColorLeftTopBackCorner(configurationPLL17, RED);
setBackColorMiddleTopBackEdge(configurationPLL17, ORANGE);
setRightColorRightTopBackCorner(configurationPLL17, ORANGE);
setBackColorRightTopBackCorner(configurationPLL17, BLUE);

const configurationPLL18 = createSolvedConfiguration();
setLeftColorLeftTopFrontCorner(configurationPLL18, GREEN);
setFrontColorLeftTopFrontCorner(configurationPLL18, ORANGE);
setLeftColorLeftTopMiddleEdge(configurationPLL18, RED);
setRightColorRightTopMiddleEdge(configurationPLL18, GREEN);
setLeftColorLeftTopBackCorner(configurationPLL18, GREEN);
setBackColorLeftTopBackCorner(configurationPLL18, RED);
setBackColorMiddleTopBackEdge(configurationPLL18, ORANGE);
setRightColorRightTopBackCorner(configurationPLL18, ORANGE);
setBackColorRightTopBackCorner(configurationPLL18, BLUE);

const configurationPLL19 = createSolvedConfiguration();
setLeftColorLeftTopFrontCorner(configurationPLL19, BLUE);
setFrontColorLeftTopFrontCorner(configurationPLL19, RED);
setFrontColorMiddleTopFrontEdge(configurationPLL19, ORANGE);
setRightColorRightTopFrontCorner(configurationPLL19, ORANGE);
setFrontColorRightTopFrontCorner(configurationPLL19, GREEN);
setLeftColorLeftTopMiddleEdge(configurationPLL19, GREEN);
setLeftColorLeftTopBackCorner(configurationPLL19, BLUE);
setBackColorLeftTopBackCorner(configurationPLL19, ORANGE);
setBackColorMiddleTopBackEdge(configurationPLL19, BLUE);

const configurationPLL20 = createSolvedConfiguration();
setRightColorRightTopFrontCorner(configurationPLL20, ORANGE);
setFrontColorRightTopFrontCorner(configurationPLL20, GREEN);
setLeftColorLeftTopMiddleEdge(configurationPLL20, RED);
setRightColorRightTopMiddleEdge(configurationPLL20, ORANGE);
setLeftColorLeftTopBackCorner(configurationPLL20, RED);
setBackColorLeftTopBackCorner(configurationPLL20, BLUE);

const configurationPLL21 = createSolvedConfiguration();
setLeftColorLeftTopFrontCorner(configurationPLL21, RED);
setFrontColorLeftTopFrontCorner(configurationPLL21, GREEN);
setLeftColorLeftTopMiddleEdge(configurationPLL21, RED);
setRightColorRightTopMiddleEdge(configurationPLL21, ORANGE);
setRightColorRightTopBackCorner(configurationPLL21, ORANGE);
setBackColorRightTopBackCorner(configurationPLL21, BLUE);

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
    configurationPLL1, configurationPLL2, configurationPLL3, configurationPLL4, configurationPLL5, configurationPLL6, configurationPLL7, configurationPLL8, configurationPLL9, configurationPLL10,
    configurationPLL11, configurationPLL12, configurationPLL13, configurationPLL14, configurationPLL15, configurationPLL16, configurationPLL17, configurationPLL18, configurationPLL19, configurationPLL20,
    configurationPLL21,
];

