import {ButtonAction, NEW_BUTTON} from './action';

const _buttonReducer =
    (state: string = '', action: ButtonAction) => {
        switch (action.type) {
            case NEW_BUTTON:
                return action.payload;
            default:
                return state;
        }
    };


export function buttonReducer(state, action) {
    return _buttonReducer(state, action);
}


