import {INIT_CUBE, MoveAction, START_MOVE, STOP_MOVE} from './action';
import {findMove} from './moves';
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
                move: undefined,
                colors: updateColors(state.colors, action.payload),
                pieces: updatePieces(state.pieces, action.payload)
            };
        case INIT_CUBE:
            return {
                move: undefined,
                colors: initCubeColors(),
                pieces: initCubePieces(),
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


const updateColors = (colors: ColorsState, move: number) => {
    const finalMove = findMove(move);
    finalMove.colorsMove(colors);
    return colors;
};

const updatePieces = (pieces: PiecesState, move: number) => {
    const finalMove = findMove(move);
    finalMove.piecesMove(pieces);
    return pieces;
};


export function moveReducer(state, action) {
    return _moveReducer(state, action);
}





