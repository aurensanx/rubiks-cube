export const START_MOVE = 'START_MOVE';
export const STOP_MOVE = 'STOP_MOVE';
export const INIT_CUBE = 'INIT_CUBE';

export class StartMoveAction {
    readonly type = START_MOVE;

    constructor(public payload: number) {
    }
}

export class StopMoveAction {
    readonly type = STOP_MOVE;

    constructor(public payload: number) {
    }
}


export class InitCubeAction {
    readonly type = INIT_CUBE;

    constructor() {
    }
}

export type MoveAction = StartMoveAction | StopMoveAction | InitCubeAction;


