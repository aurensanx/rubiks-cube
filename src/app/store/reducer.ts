import {MoveAction, START_MOVE, STOP_MOVE} from './action';
import {MoveState} from './state';
import {B, B0, D, D0, F, F0, L, L0, R, R0, U, U0} from '../three-components/models/moves';

const _moveReducer =
    (state: MoveState = {move: 0, cube: [...Array(27).keys()]}, action: MoveAction) => {
        switch (action.type) {
            case START_MOVE:
                return {...state, move: action.payload};
            case STOP_MOVE:
                return {cube: updateCube(state.cube, action.payload), move: undefined};
            default:
                return state;
        }
    };

const moveMap = {
    1: state => U(state),
    2: state => U0(state),
    3: state => D(state),
    4: state => D0(state),
    5: state => R(state),
    6: state => R0(state),
    7: state => L(state),
    8: state => L0(state),
    9: state => F(state),
    10: state => F0(state),
    11: state => B(state),
    12: state => B0(state),
};


const updateCube = (state, move: number) => {
    moveMap[move](state);
    return state;
};


export function moveReducer(state, action) {
    return _moveReducer(state, action);
}





