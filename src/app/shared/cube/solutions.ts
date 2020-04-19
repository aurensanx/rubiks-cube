export interface SolutionStep {
    text: string;
    value: number;
    active?: boolean;
    class?: string;
}

export const SOLUTIONS: SolutionStep[][] = [
    [],
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
    ]
];
