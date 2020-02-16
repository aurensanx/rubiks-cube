import {CubeState} from '@cube-store';

export const E = (state: CubeState) => {
    const aux = state[5];
    state[5] = state[0];
    state[0] = state[4];
    state[4] = state[1];
    state[1] = aux;
    return state;
};

export const E0 = (state: CubeState) => {
    const aux = state[1];
    state[1] = state[4];
    state[4] = state[0];
    state[0] = state[5];
    state[5] = aux;
    return state;
};

export const M = (state: CubeState) => {
    const aux = state[4];
    state[4] = state[2];
    state[2] = state[5];
    state[5] = state[3];
    state[3] = aux;
    return state;
};

export const M0 = (state: CubeState) => {
    const aux = state[3];
    state[3] = state[5];
    state[5] = state[2];
    state[2] = state[4];
    state[4] = aux;
    return state;
};
