import {MoveAction, START_MOVE, STOP_MOVE} from './action';
import {MOVES} from '../three-components/moves';
import * as _ from 'lodash';
import {ColorsState, PiecesState, State} from './state';


const _moveReducer = (
    state: State = {
        move: undefined,
        colors: initCubeColors(),
        pieces: initCubePieces(),
    },
    action: MoveAction) => {
    switch (action.type) {
        case START_MOVE:
            return {...state, move: action.payload};
        case STOP_MOVE:
            return {
                colors: updateColors(state.colors, action.payload),
                pieces: updatePieces(state.pieces, action.payload),
                move: undefined
            };
        default:
            return state;
    }
};

export const COLOR_ID = {
    WHITE: 0,
    YELLOW: 1,
    BLUE: 2,
    GREEN: 3,
    RED: 4,
    ORANGE: 5,
};


export const initCubeColors = () => [
    COLOR_ID.RED, COLOR_ID.BLUE, COLOR_ID.ORANGE, COLOR_ID.GREEN,
    COLOR_ID.RED, COLOR_ID.BLUE, COLOR_ID.ORANGE, COLOR_ID.GREEN,
    COLOR_ID.RED, COLOR_ID.BLUE, COLOR_ID.ORANGE, COLOR_ID.GREEN,
    COLOR_ID.RED, COLOR_ID.BLUE, COLOR_ID.ORANGE, COLOR_ID.GREEN,
    COLOR_ID.RED, COLOR_ID.BLUE, COLOR_ID.ORANGE, COLOR_ID.GREEN,
    COLOR_ID.RED, COLOR_ID.BLUE, COLOR_ID.ORANGE, COLOR_ID.GREEN,
    COLOR_ID.RED, COLOR_ID.BLUE, COLOR_ID.ORANGE, COLOR_ID.GREEN,
    COLOR_ID.RED, COLOR_ID.BLUE, COLOR_ID.ORANGE, COLOR_ID.GREEN,
    COLOR_ID.RED, COLOR_ID.BLUE, COLOR_ID.ORANGE, COLOR_ID.GREEN,
    COLOR_ID.WHITE, COLOR_ID.WHITE, COLOR_ID.WHITE, COLOR_ID.WHITE, COLOR_ID.WHITE,
    COLOR_ID.WHITE, COLOR_ID.WHITE, COLOR_ID.WHITE, COLOR_ID.WHITE,
    COLOR_ID.YELLOW, COLOR_ID.YELLOW, COLOR_ID.YELLOW, COLOR_ID.YELLOW, COLOR_ID.YELLOW,
    COLOR_ID.YELLOW, COLOR_ID.YELLOW, COLOR_ID.YELLOW, COLOR_ID.YELLOW,
];

export const initCubePieces = () => [...Array(27).keys()];


// const updateCube = (state, move: number) => {
//     // TODO enviar objeto
//     // tslint:disable-next-line:no-bitwise
//     const finalMove = MOVES.find(m => _.some(m.value, v => (move & v) === v));
//     // const finalMove = MOVES.find(m => move  ===  m.value);
//     finalMove.storeMove(state);
//     // moveMap[finalMove.value](state);
//     return state;
// };

const updateColors = (colors: ColorsState, move: number) => {
    // TODO enviar objeto
    // tslint:disable-next-line:no-bitwise
    // const finalMove = MOVES.find(m => _.some(m.value, v => (move & v) === v));
    const finalMove = MOVES.find(m => move  ===  m.value);
    finalMove.colorsMove(colors);
    return colors;
};

const updatePieces = (pieces: PiecesState, move: number) => {
    // TODO enviar objeto
    // tslint:disable-next-line:no-bitwise
    // const finalMove = MOVES.find(m => _.some(m.value, v => (move & v) === v));
    const finalMove = MOVES.find(m => move  ===  m.value);
    finalMove.piecesMove(pieces);
    return pieces;
};


export function moveReducer(state, action) {
    return _moveReducer(state, action);
}





