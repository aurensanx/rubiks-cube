import {ActionReducerMap} from '@ngrx/store';
import {buttonReducer} from './reducer';

interface AppState {
    move: string;
}

export const reducers: ActionReducerMap<AppState> = {
    move: buttonReducer,
};
