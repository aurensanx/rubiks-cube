export const NEW_BUTTON = 'NEW_BUTTON';

export class NewButtonAction {
    readonly type = NEW_BUTTON;

    constructor(public payload: string) {
    }
}

export type ButtonAction = NewButtonAction;
