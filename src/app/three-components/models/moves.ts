import {CubeState} from '@cube-store';
import {CUBE_FACE} from '../index';


export const U = (state: CubeState) => {
    let aux = state[0];
    state[0] = state[2];
    state[2] = state[20];
    state[20] = state[18];
    state[18] = aux;
    aux = state[1];
    state[1] = state[11];
    state[11] = state[19];
    state[19] = state[9];
    state[9] = aux;
    return state;
};

export const U0 = (state: CubeState) => {
    let aux = state[0];
    state[0] = state[18];
    state[18] = state[20];
    state[20] = state[2];
    state[2] = aux;
    aux = state[1];
    state[1] = state[9];
    state[9] = state[19];
    state[19] = state[11];
    state[11] = aux;
    return state;
};

export const E = (state: CubeState) => {
    let aux = state[3];
    state[3] = state[21];
    state[21] = state[23];
    state[23] = state[5];
    state[5] = aux;
    aux = state[4];
    state[4] = state[12];
    state[12] = state[22];
    state[22] = state[14];
    state[14] = aux;
    return state;
};

export const E0 = (state: CubeState) => {
    let aux = state[3];
    state[3] = state[5];
    state[5] = state[23];
    state[23] = state[21];
    state[21] = aux;
    aux = state[4];
    state[4] = state[14];
    state[14] = state[22];
    state[22] = state[12];
    state[12] = aux;
    return state;
};

export const D = (state: CubeState) => {
    let aux = state[6];
    state[6] = state[24];
    state[24] = state[26];
    state[26] = state[8];
    state[8] = aux;
    aux = state[7];
    state[7] = state[15];
    state[15] = state[25];
    state[25] = state[17];
    state[17] = aux;
    return state;
};

export const D0 = (state: CubeState) => {
    let aux = state[6];
    state[6] = state[8];
    state[8] = state[26];
    state[26] = state[24];
    state[24] = aux;
    aux = state[7];
    state[7] = state[17];
    state[17] = state[25];
    state[25] = state[15];
    state[15] = aux;
    return state;
};


export const R = (state: CubeState) => {
    let aux = state[2];
    state[2] = state[8];
    state[8] = state[26];
    state[26] = state[20];
    state[20] = aux;
    aux = state[5];
    state[5] = state[17];
    state[17] = state[23];
    state[23] = state[11];
    state[11] = aux;
    return state;
};

export const R0 = (state: CubeState) => {
    let aux = state[2];
    state[2] = state[20];
    state[20] = state[26];
    state[26] = state[8];
    state[8] = aux;
    aux = state[5];
    state[5] = state[11];
    state[11] = state[23];
    state[23] = state[17];
    state[17] = aux;
    return state;
};

export const L = (state: CubeState) => {
    let aux = state[0];
    state[0] = state[18];
    state[18] = state[24];
    state[24] = state[6];
    state[6] = aux;
    aux = state[3];
    state[3] = state[9];
    state[9] = state[21];
    state[21] = state[15];
    state[15] = aux;
    return state;
};

export const L0 = (state: CubeState) => {
    let aux = state[0];
    state[0] = state[6];
    state[6] = state[24];
    state[24] = state[18];
    state[18] = aux;
    aux = state[3];
    state[3] = state[15];
    state[15] = state[21];
    state[21] = state[9];
    state[9] = aux;
    return state;
};


export const F = (state: CubeState) => {
    let aux = state[0];
    state[0] = state[6];
    state[6] = state[8];
    state[8] = state[2];
    state[2] = aux;
    aux = state[1];
    state[1] = state[3];
    state[3] = state[7];
    state[7] = state[5];
    state[5] = aux;
    return state;
};

export const F0 = (state: CubeState) => {
    let aux = state[0];
    state[0] = state[2];
    state[2] = state[8];
    state[8] = state[6];
    state[6] = aux;
    aux = state[1];
    state[1] = state[5];
    state[5] = state[7];
    state[7] = state[3];
    state[3] = aux;
    return state;
};


export const B = (state: CubeState) => {
    let aux = state[18];
    state[18] = state[20];
    state[20] = state[26];
    state[26] = state[24];
    state[24] = aux;
    aux = state[19];
    state[19] = state[23];
    state[23] = state[25];
    state[25] = state[21];
    state[21] = aux;
    return state;
};

export const B0 = (state: CubeState) => {
    let aux = state[18];
    state[18] = state[24];
    state[24] = state[26];
    state[26] = state[20];
    state[20] = aux;
    aux = state[19];
    state[19] = state[21];
    state[21] = state[25];
    state[25] = state[23];
    state[23] = aux;
    return state;
};


export interface MoveDefinition {
    id: string;
    value: number[];
    storeMove: (state: number[]) => number[];
    cubeFace: any;
    x: number;
    y: number;
    z: number;
    axis: string;
    direction: number;
    color: string;
    class?: string;
}


// 18 moves 3x3x2
export const MOVES_BIT_DEFINITION = {
    POSITIVE: Math.pow(2, 0),
    NEGATIVE: Math.pow(2, 1),
    HORIZONTAL: Math.pow(2, 2),
    VERTICAL: Math.pow(2, 3),
    X0: Math.pow(2, 4),
    X1: Math.pow(2, 5),
    X2: Math.pow(2, 6),
    Y0: Math.pow(2, 7),
    Y1: Math.pow(2, 8),
    Y2: Math.pow(2, 9),
    Z0: Math.pow(2, 10),
    Z1: Math.pow(2, 11),
    Z2: Math.pow(2, 12),
    NX: Math.pow(2, 13),
    NX0: Math.pow(2, 14),
    NY: Math.pow(2, 15),
    NY0: Math.pow(2, 16),
    NZ: Math.pow(2, 17),
    NZ0: Math.pow(2, 18),
};

// op && MOVE === MOVE

// xx10zz01
// 33

export const MOVES: MoveDefinition[] = [
    {
        id: `U`,
        value: [MOVES_BIT_DEFINITION.POSITIVE + MOVES_BIT_DEFINITION.HORIZONTAL + MOVES_BIT_DEFINITION.Y2],
        storeMove: U,
        cubeFace: CUBE_FACE.UP,
        x: 0,
        y: 1,
        z: 0,
        axis: 'y',
        direction: -1,
        color: 'white',
    },
    {
        id: `U'`,
        value: [MOVES_BIT_DEFINITION.NEGATIVE + MOVES_BIT_DEFINITION.HORIZONTAL + MOVES_BIT_DEFINITION.Y2],
        storeMove: U0,
        cubeFace: CUBE_FACE.UP,
        x: 0,
        y: 1,
        z: 0,
        axis: 'y',
        direction: 1,
        color: 'white',
        class: 'counter',
    },
    // {id: `E`, value: 70, storeMove: E0, cubeFace: CUBE_FACE.H, x: 0, y: 0, z: 0, axis: 'y', direction: 1},
    // {id: `E´`, value: 69, storeMove: E, cubeFace: CUBE_FACE.H, x: 0, y: 0, z: 0, axis: 'y', direction: -1},
    {
        id: `D`,
        value: [MOVES_BIT_DEFINITION.NEGATIVE + MOVES_BIT_DEFINITION.HORIZONTAL + MOVES_BIT_DEFINITION.Y0],
        storeMove: D,
        cubeFace: CUBE_FACE.DOWN,
        x: 0,
        y: -1,
        z: 0,
        axis: 'y',
        direction: 1,
        color: 'yellow',
    },
    {
        id: `D´`,
        value: [MOVES_BIT_DEFINITION.POSITIVE + MOVES_BIT_DEFINITION.HORIZONTAL + MOVES_BIT_DEFINITION.Y0],
        storeMove: D0,
        cubeFace: CUBE_FACE.DOWN,
        x: 0,
        y: -1,
        z: 0,
        axis: 'y',
        direction: -1,
        color: 'yellow',
        class: 'counter',
    },
    {
        id: `R`,
        value: [MOVES_BIT_DEFINITION.POSITIVE + MOVES_BIT_DEFINITION.VERTICAL + MOVES_BIT_DEFINITION.X2],
        storeMove: R,
        cubeFace: CUBE_FACE.RIGHT,
        x: 1,
        y: 0,
        z: 0,
        axis: 'x',
        direction: -1,
        color: 'blue',
    },
    {
        id: `R´`,
        value: [MOVES_BIT_DEFINITION.NEGATIVE + MOVES_BIT_DEFINITION.VERTICAL + MOVES_BIT_DEFINITION.X2],
        storeMove: R0,
        cubeFace: CUBE_FACE.RIGHT,
        x: 1,
        y: 0,
        z: 0,
        axis: 'x',
        direction: 1,
        color: 'blue',
        class: 'counter',
    },
    {
        id: `L`,
        value: [MOVES_BIT_DEFINITION.NEGATIVE + MOVES_BIT_DEFINITION.VERTICAL + MOVES_BIT_DEFINITION.X0],
        storeMove: L,
        cubeFace: CUBE_FACE.LEFT,
        x: -1,
        y: 0,
        z: 0,
        axis: 'x',
        direction: 1,
        color: 'green',
    },
    {
        id: `L´`,
        value: [MOVES_BIT_DEFINITION.POSITIVE + MOVES_BIT_DEFINITION.VERTICAL + MOVES_BIT_DEFINITION.X0],
        storeMove: L0,
        cubeFace: CUBE_FACE.LEFT,
        x: -1,
        y: 0,
        z: 0,
        axis: 'x',
        direction: -1,
        color: 'green',
        class: 'counter',
    },
    {
        id: `F`,
        value: [MOVES_BIT_DEFINITION.POSITIVE + MOVES_BIT_DEFINITION.VERTICAL + MOVES_BIT_DEFINITION.Z0],
        storeMove: F,
        cubeFace: CUBE_FACE.FRONT,
        x: 0,
        y: 0,
        z: 1,
        axis: 'z',
        direction: -1,
        color: 'red',
    },
    {
        id: `F´`,
        value: [MOVES_BIT_DEFINITION.NEGATIVE + MOVES_BIT_DEFINITION.VERTICAL + MOVES_BIT_DEFINITION.Z0],
        storeMove: F0,
        cubeFace: CUBE_FACE.FRONT,
        x: 0,
        y: 0,
        z: 1,
        axis: 'z',
        direction: 1,
        color: 'red',
        class: 'counter',
    },
    {
        id: `B`,
        value: [MOVES_BIT_DEFINITION.NEGATIVE + MOVES_BIT_DEFINITION.VERTICAL + MOVES_BIT_DEFINITION.Z2],
        storeMove: B,
        cubeFace: CUBE_FACE.BACK,
        x: 0,
        y: 0,
        z: -1,
        axis: 'z',
        direction: 1,
        color: 'orange',
    },
    {
        id: `B'`,
        value: [MOVES_BIT_DEFINITION.POSITIVE + MOVES_BIT_DEFINITION.VERTICAL + MOVES_BIT_DEFINITION.Z2],
        storeMove: B0,
        cubeFace: CUBE_FACE.BACK,
        x: 0,
        y: 0,
        z: -1,
        axis: 'z',
        direction: -1,
        color: 'orange',
        class: 'counter',
    },
];


