import {MoveAction, START_MOVE, STOP_MOVE} from './action';
import {MoveState} from './state';
import {MOVES} from '../three-components/models/moves';
import * as _ from 'lodash';

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
    const finalMove = MOVES.find(m => _.some(m.value, v => (move & v) === v));
    // const finalMove = MOVES.find(m => move  ===  m.value);
    finalMove.storeMove(state);
    // moveMap[finalMove.value](state);
    return state;
};


export function moveReducer(state, action) {
    return _moveReducer(state, action);
}





