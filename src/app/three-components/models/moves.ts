import {CubeState} from '@cube-store';

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



