export interface SolutionStep {
    text: string;
    value: number;
    active?: boolean;
    class?: string;
}

export const SOLUTIONS: SolutionStep[][] = [
    [],
    // 1
    [
        {text: `(`, value: undefined},
        {text: `R `, value: 4},
        {text: `U' `, value: 1, class: 'left-index-finger'},
        {text: `R' `, value: 5},
        {text: `U`, value: 0},
        {text: `) `, value: undefined},
        {
            text: `y'
        `, value: 19
        },
        {text: ` (`, value: undefined},
        {text: `R' `, value: 9},
        {text: `U2 `, value: 0},
        {text: undefined, value: 0},
        {text: `R `, value: 8},
        {text: `U' `, value: 1, class: 'right-thumb'},
        {text: `U'`, value: 1, class: 'left-index-finger'},
        {text: `) (`, value: undefined},
        {text: `R' `, value: 9},
        {text: `U `, value: 0},
        {text: `R`, value: 8},
        {text: `)`, value: undefined},
    ],
    // 2
    [
        {text: `(`, value: undefined},
        {text: `U `, value: 0},
        {text: `R `, value: 4},
        {text: `U' `, value: 1, class: 'left-index-finger'},
        {text: `R' `, value: 5},
        {text: `U' `, value: 1, class: 'left-index-finger'},
        {text: `) `, value: undefined},
        {text: `y'`, value: 19},
        {text: ` (`, value: undefined},
        {text: `R' `, value: 9},
        {text: `U `, value: 0},
        {text: `R`, value: 8},
        {text: `)`, value: undefined},
    ],
    // 3
    [
        {text: `(`, value: undefined},
        {text: `R' `, value: 5},
        {text: `F' `, value: 9, class: 'right-thumb'},
        {text: `R `, value: 4},
        {text: `U `, value: 0},
        {text: `) (`, value: undefined},
        {text: `R `, value: 4},
        {text: `U' `, value: 1, class: 'left-index-finger'},
        {text: `R' `, value: 5},
        {text: `F `, value: 8},
        {text: `)`, value: undefined},
    ],
];
