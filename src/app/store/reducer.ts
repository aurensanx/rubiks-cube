import {MoveAction, START_MOVE, STOP_MOVE} from './action';
import {MoveState} from './state';
import {B, B0, D, D0, F, F0, L, L0, MOVES, R, R0, U, U0} from '../three-components/models/moves';

const _moveReducer =
    (state: MoveState = {move: undefined, cube: [...Array(27).keys()]}, action: MoveAction) => {
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
    // TODO enviar objeto
    // tslint:disable-next-line:no-bitwise
    // const finalMove = MOVES.find(m => (move & m.value) === m.value);
    const finalMove = MOVES.find(m => move  ===  m.value);
    finalMove.storeMove(state);
    // moveMap[finalMove.value](state);
    return state;
};


export function moveReducer(state, action) {
    return _moveReducer(state, action);
}





