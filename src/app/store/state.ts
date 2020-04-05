import {ActionReducerMap, createSelector} from '@ngrx/store';
import {moveReducer} from './reducer';


export type ColorsState = number[];
export type PiecesState = number[];


export interface State {
    move: number;
    colors: ColorsState;
    pieces: PiecesState;
}

interface AppState {
    state: State;
}

export const reducers: ActionReducerMap<AppState> = {
    state: moveReducer,
};

const selectState = (state: AppState) => state.state;

export const selectMove = createSelector(
    selectState,
    (state: State) => state.move
);

export const selectColors = createSelector(
    selectState,
    (state: State) => state.colors
);

export const selectPieces = createSelector(
    selectState,
    (state: State) => state.pieces
);

