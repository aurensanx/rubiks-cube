import {MoveAction, START_MOVE, STOP_MOVE} from './action';
import {CubeState} from './state';

const _moveReducer =
    (state: CubeState = {move: undefined, cube: [0, 1, 2, 3, 4, 5]}, action: MoveAction) => {
        switch (action.type) {
            case START_MOVE:
                return {...state, move: action.payload};

            case STOP_MOVE:
                return {cube: updateCube(state.cube, action.payload), move: undefined};
            default:
                return state;
        }
    };


const updateCube = (state, move: number) => {
    if (move === 0) {
        const aux = state[5];
        state[5] = state[0];
        state[0] = state[4];
        state[4] = state[1];
        state[1] = aux;
    } else if (move === 1) {
        const aux = state[4];
        state[4] = state[2];
        state[2] = state[5];
        state[5] = state[3];
        state[3] = aux;
    }
    return state;
};


export function moveReducer(state, action) {
    return _moveReducer(state, action);
}





