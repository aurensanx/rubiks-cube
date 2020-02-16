import {ActionReducerMap, createSelector} from '@ngrx/store';
import {moveReducer} from './reducer';


export type CubeState = number[];


export interface MoveState {
    move: number;
    cube: CubeState;
}

interface AppState {
    state: MoveState;
}

export const reducers: ActionReducerMap<AppState> = {
    state: moveReducer,
};

const selectMove = (state: AppState) => state.state;

export const selectMoveMove = createSelector(
    selectMove,
    (state: MoveState) => state.move
);

export const selectMoveCube = createSelector(
    selectMove,
    (state: MoveState) => state.cube
);

