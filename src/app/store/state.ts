import {ActionReducerMap} from '@ngrx/store';
import {moveReducer} from './reducer';

export interface CubeState {
    move: number;
    cube: [number, number, number, number, number, number];
}

interface AppState {
    state: CubeState;
}

export const reducers: ActionReducerMap<AppState> = {
    state: moveReducer,
};
