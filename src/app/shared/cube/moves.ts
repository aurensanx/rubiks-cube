import {ColorsState, PiecesState} from './state';

const turnFace = (array, positions) => {
    const aux = array[positions[positions.length - 1]];
    for (let i = positions.length - 1; i > 0; i--) {
        array[positions[i]] = array[positions[i - 1]];
    }
    array[positions[0]] = aux;
};

export const getComplementaryMove = move => move % 2 === 0 ? move + 1 : move - 1;

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
    UP_MIDDLE: [0, 1, 2, 3, 4, 5, 12, 13, 14, 21, 22, 23, 9, 10, 11, 18, 19, 20],
    DOWN_MIDDLE: [3, 4, 5, 6, 7, 8, 12, 13, 14, 15, 16, 17, 21, 22, 23, 24, 25, 26],
    RIGHT_MIDDLE: [1, 2, 4, 5, 7, 8, 10, 11, 13, 14, 16, 17, 19, 20, 22, 23, 25, 26],
    LEFT_MIDDLE: [0, 1, 3, 4, 6, 7, 9, 10, 12, 13, 15, 16, 18, 19, 21, 22, 24, 25],
    FRONT_MIDDLE: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 17, 16, 15, 12],
    BACK_MIDDLE: [9, 10, 11, 13, 14, 17, 16, 15, 12, 18, 19, 20, 21, 22, 23, 24, 25, 26],
    ALL: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 17, 16, 15, 12, 18, 19, 20, 21, 22, 23, 24, 25, 26],
};


export const U_PIECES = (state: PiecesState) => {
    turnFace(state, [0, 18, 20, 2]);
    turnFace(state, [1, 9, 19, 11]);
    return state;
};

export const U_COLORS = (state: ColorsState) => {
    turnFace(state, [0, 3, 2, 1]);
    turnFace(state, [4, 7, 6, 5]);
    turnFace(state, [8, 11, 10, 9]);
    turnFace(state, [36, 37, 38, 39]);
    turnFace(state, [40, 41, 42, 43]);
    return state;
};

export const U0_PIECES = (state: PiecesState) => {
    turnFace(state, [2, 20, 18, 0]);
    turnFace(state, [11, 19, 9, 1]);
    return state;
};

export const U0_COLORS = (state: ColorsState) => {
    turnFace(state, [1, 2, 3, 0]);
    turnFace(state, [5, 6, 7, 4]);
    turnFace(state, [9, 10, 11, 8]);
    turnFace(state, [39, 38, 37, 36]);
    turnFace(state, [43, 42, 41, 40]);
    return state;
};

export const D_PIECES = (state: PiecesState) => {
    turnFace(state, [6, 8, 26, 24]);
    turnFace(state, [7, 17, 25, 15]);
    return state;
};

export const D_COLORS = (state: ColorsState) => {
    turnFace(state, [24, 25, 26, 27]);
    turnFace(state, [28, 29, 30, 31]);
    turnFace(state, [32, 33, 34, 35]);
    turnFace(state, [45, 46, 47, 48]);
    turnFace(state, [49, 50, 51, 52]);
    return state;
};

export const D0_PIECES = (state: PiecesState) => {
    turnFace(state, [24, 26, 8, 6]);
    turnFace(state, [15, 25, 17, 7]);
    return state;
};

export const D0_COLORS = (state: ColorsState) => {
    turnFace(state, [27, 26, 25, 24]);
    turnFace(state, [31, 30, 29, 28]);
    turnFace(state, [35, 34, 33, 32]);
    turnFace(state, [48, 47, 46, 45]);
    turnFace(state, [52, 51, 50, 49]);
    return state;
};

export const R_PIECES = (state: PiecesState) => {
    turnFace(state, [2, 20, 26, 8]);
    turnFace(state, [5, 11, 23, 17]);
    return state;
};

export const R_COLORS = (state: ColorsState) => {
    turnFace(state, [8, 37, 26, 46]);
    turnFace(state, [20, 41, 14, 50]);
    turnFace(state, [32, 38, 2, 47]);
    turnFace(state, [1, 9, 33, 25]);
    turnFace(state, [5, 21, 29, 13]);
    return state;
};

export const R0_PIECES = (state: PiecesState) => {
    turnFace(state, [8, 26, 20, 2]);
    turnFace(state, [5, 17, 23, 11]);
    return state;
};

export const R0_COLORS = (state: ColorsState) => {
    turnFace(state, [46, 26, 37, 8]);
    turnFace(state, [50, 14, 41, 20]);
    turnFace(state, [47, 2, 38, 32]);
    turnFace(state, [25, 33, 9, 1]);
    turnFace(state, [13, 29, 21, 5]);
    return state;
};

export const L_PIECES = (state: PiecesState) => {
    turnFace(state, [0, 6, 24, 18]);
    turnFace(state, [3, 15, 21, 9]);
    return state;
};

export const L_COLORS = (state: ColorsState) => {
    turnFace(state, [0, 45, 34, 36]);
    turnFace(state, [12, 52, 22, 43]);
    turnFace(state, [24, 48, 10, 39]);
    turnFace(state, [3, 11, 35, 27]);
    turnFace(state, [7, 23, 31, 15]);
    return state;
};

export const L0_PIECES = (state: PiecesState) => {
    turnFace(state, [18, 24, 6, 0]);
    turnFace(state, [9, 21, 15, 3]);
    return state;
};

export const L0_COLORS = (state: ColorsState) => {
    turnFace(state, [36, 34, 45, 0]);
    turnFace(state, [43, 22, 52, 12]);
    turnFace(state, [39, 10, 48, 24]);
    turnFace(state, [27, 35, 11, 3]);
    turnFace(state, [15, 31, 23, 7]);
    return state;
};

export const F_PIECES = (state: PiecesState) => {
    turnFace(state, [0, 2, 8, 6]);
    turnFace(state, [1, 5, 7, 3]);
    return state;
};

export const F_COLORS = (state: ColorsState) => {
    turnFace(state, [0, 8, 32, 24]);
    turnFace(state, [4, 20, 28, 12]);
    turnFace(state, [39, 1, 46, 35]);
    turnFace(state, [42, 13, 49, 23]);
    turnFace(state, [38, 25, 45, 11]);
    return state;
};

export const F0_PIECES = (state: PiecesState) => {
    turnFace(state, [6, 8, 2, 0]);
    turnFace(state, [3, 7, 5, 1]);
    return state;
};

export const F0_COLORS = (state: ColorsState) => {
    turnFace(state, [24, 32, 8, 0]);
    turnFace(state, [12, 28, 20, 4]);
    turnFace(state, [35, 46, 1, 39]);
    turnFace(state, [23, 49, 13, 42]);
    turnFace(state, [11, 45, 25, 38]);
    return state;
};

export const B_PIECES = (state: PiecesState) => {
    turnFace(state, [20, 18, 24, 26]);
    turnFace(state, [19, 21, 25, 23]);
    return state;
};

export const B_COLORS = (state: ColorsState) => {
    turnFace(state, [2, 10, 34, 26]);
    turnFace(state, [6, 22, 30, 14]);
    turnFace(state, [9, 36, 27, 47]);
    turnFace(state, [40, 15, 51, 21]);
    turnFace(state, [33, 37, 3, 48]);
    return state;
};

export const B0_PIECES = (state: PiecesState) => {
    turnFace(state, [26, 24, 18, 20]);
    turnFace(state, [23, 25, 21, 19]);
    return state;
};

export const B0_COLORS = (state: ColorsState) => {
    turnFace(state, [26, 34, 10, 2]);
    turnFace(state, [14, 30, 22, 6]);
    turnFace(state, [47, 27, 36, 9]);
    turnFace(state, [21, 51, 15, 40]);
    turnFace(state, [48, 3, 37, 33]);
    return state;
};

export const E_PIECES = (state: PiecesState) => {
    turnFace(state, [3, 5, 23, 21]);
    turnFace(state, [4, 14, 22, 12]);
    return state;
};

export const E_COLORS = (state: PiecesState) => {
    turnFace(state, [12, 13, 14, 15]);
    turnFace(state, [16, 17, 18, 19]);
    turnFace(state, [20, 21, 22, 23]);
    return state;
};

export const E0_PIECES = (state: PiecesState) => {
    turnFace(state, [21, 23, 5, 3]);
    turnFace(state, [12, 22, 14, 4]);
    return state;
};

export const E0_COLORS = (state: PiecesState) => {
    turnFace(state, [15, 14, 13, 12]);
    turnFace(state, [19, 18, 17, 16]);
    turnFace(state, [23, 22, 21, 20]);
    return state;
};

export const M_PIECES = (state: PiecesState) => {
    turnFace(state, [7, 25, 19, 1]);
    turnFace(state, [16, 22, 10, 4]);
    return state;
};

export const M_COLORS = (state: PiecesState) => {
    turnFace(state, [49, 30, 40, 4]);
    turnFace(state, [53, 18, 44, 16]);
    turnFace(state, [51, 6, 42, 28]);
    return state;
};

export const M0_PIECES = (state: PiecesState) => {
    turnFace(state, [1, 19, 25, 7]);
    turnFace(state, [4, 10, 22, 16]);
    return state;
};

export const M0_COLORS = (state: PiecesState) => {
    turnFace(state, [4, 40, 30, 49]);
    turnFace(state, [16, 44, 18, 53]);
    turnFace(state, [28, 42, 6, 51]);
    return state;
};

export const V_PIECES = (state: PiecesState) => {
    turnFace(state, [9, 11, 17, 15]);
    turnFace(state, [10, 14, 16, 12]);
    return state;
};

export const V_COLORS = (state: PiecesState) => {
    turnFace(state, [43, 5, 50, 31]);
    turnFace(state, [44, 17, 53, 19]);
    turnFace(state, [41, 29, 52, 7]);
    return state;
};

export const V0_PIECES = (state: PiecesState) => {
    turnFace(state, [15, 17, 11, 9]);
    turnFace(state, [12, 16, 14, 10]);
    return state;
};

export const V0_COLORS = (state: PiecesState) => {
    turnFace(state, [31, 50, 5, 43]);
    turnFace(state, [19, 53, 17, 44]);
    turnFace(state, [7, 52, 29, 41]);
    return state;
};

export const X_PIECES = (state: PiecesState) => {
    R_PIECES(state);
    M0_PIECES(state);
    L0_PIECES(state);
    return state;
};

export const X_COLORS = (state: PiecesState) => {
    R_COLORS(state);
    M0_COLORS(state);
    L0_COLORS(state);
    return state;
};

export const X0_PIECES = (state: PiecesState) => {
    R0_PIECES(state);
    M_PIECES(state);
    L_PIECES(state);
    return state;
};

export const X0_COLORS = (state: PiecesState) => {
    R0_COLORS(state);
    M_COLORS(state);
    L_COLORS(state);
    return state;
};

export const Y_PIECES = (state: PiecesState) => {
    U_PIECES(state);
    E0_PIECES(state);
    D0_PIECES(state);
    return state;
};

export const Y_COLORS = (state: PiecesState) => {
    U_COLORS(state);
    E0_COLORS(state);
    D0_COLORS(state);
    return state;
};

export const Y0_PIECES = (state: PiecesState) => {
    U0_PIECES(state);
    E_PIECES(state);
    D_PIECES(state);
    return state;
};

export const Y0_COLORS = (state: PiecesState) => {
    U0_COLORS(state);
    E_COLORS(state);
    D_COLORS(state);
    return state;
};

export const Z_PIECES = (state: PiecesState) => {
    F_PIECES(state);
    V_PIECES(state);
    B0_PIECES(state);
    return state;
};

export const Z_COLORS = (state: PiecesState) => {
    F_COLORS(state);
    V_COLORS(state);
    B0_COLORS(state);
    return state;
};

export const Z0_PIECES = (state: PiecesState) => {
    F0_PIECES(state);
    V0_PIECES(state);
    B_PIECES(state);
    return state;
};

export const Z0_COLORS = (state: PiecesState) => {
    F0_COLORS(state);
    V0_COLORS(state);
    B_COLORS(state);
    return state;
};

export const LM_PIECES = (state: PiecesState) => {
    L_PIECES(state);
    M_PIECES(state);
    return state;
};

export const LM_COLORS = (state: PiecesState) => {
    L_COLORS(state);
    M_COLORS(state);
    return state;
};


export const LM0_PIECES = (state: PiecesState) => {
    L0_PIECES(state);
    M0_PIECES(state);
    return state;
};

export const LM0_COLORS = (state: PiecesState) => {
    L0_COLORS(state);
    M0_COLORS(state);
    return state;
};


export const RM_PIECES = (state: PiecesState) => {
    R_PIECES(state);
    M0_PIECES(state);
    return state;
};

export const RM_COLORS = (state: PiecesState) => {
    R_COLORS(state);
    M0_COLORS(state);
    return state;
};


export const RM0_PIECES = (state: PiecesState) => {
    R0_PIECES(state);
    M_PIECES(state);
    return state;
};

export const RM0_COLORS = (state: PiecesState) => {
    R0_COLORS(state);
    M_COLORS(state);
    return state;
};

export const UE_PIECES = (state: PiecesState) => {
    U_PIECES(state);
    E0_PIECES(state);
    return state;
};

export const UE_COLORS = (state: PiecesState) => {
    U_COLORS(state);
    E0_COLORS(state);
    return state;
};

export const UE0_PIECES = (state: PiecesState) => {
    U0_PIECES(state);
    E_PIECES(state);
    return state;
};

export const UE0_COLORS = (state: PiecesState) => {
    U0_COLORS(state);
    E_COLORS(state);
    return state;
};


export const DE_PIECES = (state: PiecesState) => {
    D_PIECES(state);
    E_PIECES(state);
    return state;
};

export const DE_COLORS = (state: PiecesState) => {
    D_COLORS(state);
    E_COLORS(state);
    return state;
};

export const DE0_PIECES = (state: PiecesState) => {
    D0_PIECES(state);
    E0_PIECES(state);
    return state;
};

export const DE0_COLORS = (state: PiecesState) => {
    D0_COLORS(state);
    E0_COLORS(state);
    return state;
};

export const FV_PIECES = (state: PiecesState) => {
    F_PIECES(state);
    V_PIECES(state);
    return state;
};

export const FV_COLORS = (state: PiecesState) => {
    F_COLORS(state);
    V_COLORS(state);
    return state;
};

export const FV0_PIECES = (state: PiecesState) => {
    F0_PIECES(state);
    V0_PIECES(state);
    return state;
};

export const FV0_COLORS = (state: PiecesState) => {
    F0_COLORS(state);
    V0_COLORS(state);
    return state;
};

export const BV_PIECES = (state: PiecesState) => {
    B_PIECES(state);
    V0_PIECES(state);
    return state;
};

export const BV_COLORS = (state: ColorsState) => {
    B_COLORS(state);
    V0_COLORS(state);
    return state;
};

export const BV0_PIECES = (state: PiecesState) => {
    B0_PIECES(state);
    V_PIECES(state);
    return state;
};

export const BV0_COLORS = (state: ColorsState) => {
    B0_COLORS(state);
    V_COLORS(state);
    return state;
};


export interface MoveDefinition {
    id: string;
    value: number;
    piecesMove: (state: number[]) => number[];
    colorsMove: (state: number[]) => number[];
    cubeFace?: any;
    x: number;
    y: number;
    z: number;
    axis: string;
    direction: number;
    isCameraRotation?: boolean;
}


export const MOVES: MoveDefinition[] = [
    {
        id: `U`,
        value: 0,
        piecesMove: U_PIECES,
        colorsMove: U_COLORS,
        cubeFace: FACES.UP,
        x: 0,
        y: 1,
        z: 0,
        axis: 'y',
        direction: -1,
    },
    {
        id: `U'`,
        value: 1,
        piecesMove: U0_PIECES,
        colorsMove: U0_COLORS,
        cubeFace: FACES.UP,
        x: 0,
        y: 1,
        z: 0,
        axis: 'y',
        direction: 1,
    },
    {
        id: `D`,
        value: 2,
        piecesMove: D_PIECES,
        colorsMove: D_COLORS,
        cubeFace: FACES.DOWN,
        x: 0,
        y: -1,
        z: 0,
        axis: 'y',
        direction: 1,
    },
    {
        id: `D´`,
        value: 3,
        piecesMove: D0_PIECES,
        colorsMove: D0_COLORS,
        cubeFace: FACES.DOWN,
        x: 0,
        y: -1,
        z: 0,
        axis: 'y',
        direction: -1,
    },
    {
        id: `R`,
        value: 4,
        piecesMove: R_PIECES,
        colorsMove: R_COLORS,
        cubeFace: FACES.RIGHT,
        x: 1,
        y: 0,
        z: 0,
        axis: 'x',
        direction: -1,
    },
    {
        id: `R´`,
        value: 5,
        piecesMove: R0_PIECES,
        colorsMove: R0_COLORS,
        cubeFace: FACES.RIGHT,
        x: 1,
        y: 0,
        z: 0,
        axis: 'x',
        direction: 1,
    },
    {
        id: `L`,
        value: 6,
        piecesMove: L_PIECES,
        colorsMove: L_COLORS,
        cubeFace: FACES.LEFT,
        x: -1,
        y: 0,
        z: 0,
        axis: 'x',
        direction: 1,
    },
    {
        id: `L´`,
        value: 7,
        piecesMove: L0_PIECES,
        colorsMove: L0_COLORS,
        cubeFace: FACES.LEFT,
        x: -1,
        y: 0,
        z: 0,
        axis: 'x',
        direction: -1,
    },
    {
        id: `F`,
        value: 8,
        piecesMove: F_PIECES,
        colorsMove: F_COLORS,
        cubeFace: FACES.FRONT,
        x: 0,
        y: 0,
        z: 1,
        axis: 'z',
        direction: -1,
    },
    {
        id: `F´`,
        value: 9,
        piecesMove: F0_PIECES,
        colorsMove: F0_COLORS,
        cubeFace: FACES.FRONT,
        x: 0,
        y: 0,
        z: 1,
        axis: 'z',
        direction: 1,
    },
    {
        id: `B`,
        value: 10,
        piecesMove: B_PIECES,
        colorsMove: B_COLORS,
        cubeFace: FACES.BACK,
        x: 0,
        y: 0,
        z: -1,
        axis: 'z',
        direction: 1,
    },
    {
        id: `B'`,
        value: 11,
        piecesMove: B0_PIECES,
        colorsMove: B0_COLORS,
        cubeFace: FACES.BACK,
        x: 0,
        y: 0,
        z: -1,
        axis: 'z',
        direction: -1,
    },
    {
        id: `E`,
        value: 12,
        piecesMove: E_PIECES,
        colorsMove: E_COLORS,
        cubeFace: FACES.E,
        x: 0,
        y: 0,
        z: 0,
        axis: 'y',
        direction: 1,
    },
    {
        id: `E'`,
        value: 13,
        piecesMove: E0_PIECES,
        colorsMove: E0_COLORS,
        cubeFace: FACES.E,
        x: 0,
        y: 0,
        z: 0,
        axis: 'y',
        direction: -1,
    },
    {
        id: `M`,
        value: 14,
        piecesMove: M_PIECES,
        colorsMove: M_COLORS,
        cubeFace: FACES.M,
        x: 0,
        y: 0,
        z: 0,
        axis: 'x',
        direction: 1,
    },
    {
        id: `M'`,
        value: 15,
        piecesMove: M0_PIECES,
        colorsMove: M0_COLORS,
        cubeFace: FACES.M,
        x: 0,
        y: 0,
        z: 0,
        axis: 'x',
        direction: -1,
    },
    {
        id: `V`,
        value: 16,
        piecesMove: V_PIECES,
        colorsMove: V_COLORS,
        cubeFace: FACES.V,
        x: 0,
        y: 0,
        z: 0,
        axis: 'z',
        direction: -1,
    },
    {
        id: `V'`,
        value: 17,
        piecesMove: V0_PIECES,
        colorsMove: V0_COLORS,
        cubeFace: FACES.V,
        x: 0,
        y: 0,
        z: 0,
        axis: 'z',
        direction: 1,
    },
    {
        id: `y`,
        value: 18,
        piecesMove: Y_PIECES,
        colorsMove: Y_COLORS,
        cubeFace: FACES.ALL,
        x: 0,
        y: 0,
        z: 0,
        axis: 'y',
        direction: -1,
    },
    {
        id: `y'`,
        value: 19,
        piecesMove: Y0_PIECES,
        colorsMove: Y0_COLORS,
        cubeFace: FACES.ALL,
        x: 0,
        y: 0,
        z: 0,
        axis: 'y',
        direction: 1,
    },
    {
        id: `l`,
        value: 20,
        piecesMove: LM_PIECES,
        colorsMove: LM_COLORS,
        cubeFace: FACES.LEFT_MIDDLE,
        x: -1,
        y: 0,
        z: 0,
        axis: 'x',
        direction: 1,
    },
    {
        id: `l'`,
        value: 21,
        piecesMove: LM0_PIECES,
        colorsMove: LM0_COLORS,
        cubeFace: FACES.LEFT_MIDDLE,
        x: -1,
        y: 0,
        z: 0,
        axis: 'x',
        direction: -1,
    },
    {
        id: `r`,
        value: 22,
        piecesMove: RM_PIECES,
        colorsMove: RM_COLORS,
        cubeFace: FACES.RIGHT_MIDDLE,
        x: -1,
        y: 0,
        z: 0,
        axis: 'x',
        direction: -1,
    },
    {
        id: `r'`,
        value: 23,
        piecesMove: RM0_PIECES,
        colorsMove: RM0_COLORS,
        cubeFace: FACES.RIGHT_MIDDLE,
        x: -1,
        y: 0,
        z: 0,
        axis: 'x',
        direction: 1,
    },
    {
        id: `d`,
        value: 24,
        piecesMove: DE_PIECES,
        colorsMove: DE_COLORS,
        cubeFace: FACES.DOWN_MIDDLE,
        x: 0,
        y: -1,
        z: 0,
        axis: 'y',
        direction: 1,
    },
    {
        id: `d'`,
        value: 25,
        piecesMove: DE0_PIECES,
        colorsMove: DE0_COLORS,
        cubeFace: FACES.DOWN_MIDDLE,
        x: 0,
        y: -1,
        z: 0,
        axis: 'y',
        direction: -1,
    },
    {
        id: `f`,
        value: 26,
        piecesMove: FV_PIECES,
        colorsMove: FV_COLORS,
        cubeFace: FACES.FRONT_MIDDLE,
        x: 0,
        y: 0,
        z: 1,
        axis: 'z',
        direction: -1,
    },
    {
        id: `f'`,
        value: 27,
        piecesMove: FV0_PIECES,
        colorsMove: FV0_COLORS,
        cubeFace: FACES.FRONT_MIDDLE,
        x: 0,
        y: 0,
        z: 1,
        axis: 'z',
        direction: 1,
    },
    {
        id: `b`,
        value: 28,
        piecesMove: BV_PIECES,
        colorsMove: BV_COLORS,
        cubeFace: FACES.BACK_MIDDLE,
        x: 0,
        y: 0,
        z: -1,
        axis: 'z',
        direction: 1,
    },
    {
        id: `b'`,
        value: 29,
        piecesMove: BV0_PIECES,
        colorsMove: BV0_COLORS,
        cubeFace: FACES.BACK_MIDDLE,
        x: 0,
        y: 0,
        z: -1,
        axis: 'z',
        direction: -1,
    },
    {
        id: `x`,
        value: 30,
        piecesMove: X_PIECES,
        colorsMove: X_COLORS,
        cubeFace: FACES.ALL,
        x: 0,
        y: 0,
        z: 0,
        axis: 'x',
        direction: -1,
    },
    {
        id: `x'`,
        value: 31,
        piecesMove: X0_PIECES,
        colorsMove: X0_COLORS,
        cubeFace: FACES.ALL,
        x: 0,
        y: 0,
        z: 0,
        axis: 'x',
        direction: 1,
    },
    {
        id: `z`,
        value: 32,
        piecesMove: Z_PIECES,
        colorsMove: Z_COLORS,
        cubeFace: FACES.ALL,
        x: 0,
        y: 0,
        z: 0,
        axis: 'z',
        direction: -1,
    },
    {
        id: `z'`,
        value: 33,
        piecesMove: Z0_PIECES,
        colorsMove: Z0_COLORS,
        cubeFace: FACES.ALL,
        x: 0,
        y: 0,
        z: 0,
        axis: 'z',
        direction: 1,
    },
    {
        id: `u`,
        value: 34,
        piecesMove: UE_PIECES,
        colorsMove: UE_COLORS,
        cubeFace: FACES.UP_MIDDLE,
        x: 0,
        y: -1,
        z: 0,
        axis: 'y',
        direction: -1,
    },
    {
        id: `u'`,
        value: 35,
        piecesMove: UE0_PIECES,
        colorsMove: UE0_COLORS,
        cubeFace: FACES.UP_MIDDLE,
        x: 0,
        y: -1,
        z: 0,
        axis: 'y',
        direction: 1,
    },

];


export const findMove = move => MOVES.find(m => move === m.value);


export const getRandomMove = () => MOVES[Math.floor(Math.random() * 18)].value;
