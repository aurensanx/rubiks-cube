import {MoveAction, START_MOVE, STOP_MOVE} from './action';
import {MoveState} from './state';
import {E, E0, M, M0} from '../three-components/models/moves';

const _moveReducer =
    (state: MoveState = {move: 0, cube: [0, 1, 2, 3, 4, 5]}, action: MoveAction) => {
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
    1: state => E(state),
    2: state => E0(state),
    3: state => M(state),
    4: state => M0(state),
};


const updateCube = (state, move: number) => {
    moveMap[move](state);
    return state;
};


export function moveReducer(state, action) {
    return _moveReducer(state, action);
}





