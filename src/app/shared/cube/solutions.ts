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
    // 4
    [
        {text: `(`, value: undefined},
        {text: `R `, value: 4},
        {text: `U `, value: 0},
        {text: `R' `, value: 5},
        {text: `U'`, value: 1, class: 'left-index-finger'},
        {
            text: `)
         (`, value: undefined
        },
        {text: `R `, value: 4},
        {text: `U2 `, value: 0},
        {text: undefined, value: 0},
        {text: `R' `, value: 5},
        {text: `U'`, value: 1, class: 'left-index-finger'},
        {text: `) (`, value: undefined},
        {text: `R `, value: 4},
        {text: `U `, value: 0},
        {text: `R'`, value: 5},
        {text: `)`, value: undefined},
    ],
    // 5
    [
        {text: `(`, value: undefined},
        {text: `R `, value: 4},
        {text: `F`, value: 8},
        {text: `) `, value: undefined},
        {text: `U`, value: 0},
        {
            text: `
        (`, value: undefined
        },
        {text: `R `, value: 4},
        {text: `U' `, value: 1, class: 'left-index-finger'},
        {text: `R' `, value: 5},
        {text: `F'`, value: 9, class: 'right-thumb'},
        {text: `) (`, value: undefined},
        {text: `U' `, value: 1, class: 'left-index-finger'},
        {text: `R'`, value: 5},
        {text: `)`, value: undefined},
    ],
    // 6
    [
        {text: `y'`, value: 19},
        {text: ` (`, value: undefined},
        {text: `R' `, value: 9},
        {text: `U' `, value: 1, class: 'left-index-finger'},
        {text: `R `, value: 8},
        {text: `U`, value: 0},
        {text: `) (`, value: undefined},
        {text: `R' `, value: 9},
        {text: `U' `, value: 1, class: 'left-index-finger'},
        {text: `R`, value: 8},
        {text: `)`, value: undefined},
    ],
    // 7
    [
        {text: `(`, value: undefined},
        {text: `R `, value: 4},
        {text: `U' `, value: 1, class: 'left-index-finger'},
        {text: `R' `, value: 5},
        {text: `U`, value: 0},
        {text: `) (`, value: undefined},
        {text: `R `, value: 4},
        {text: `U' `, value: 1, class: 'left-index-finger'},
        {text: `R'`, value: 5},
        {text: `) `, value: undefined},
    ],
    // 8
    [
        {text: `(`, value: undefined},
        {text: `R `, value: 4},
        {text: `U' `, value: 1, class: 'left-index-finger'},
        {text: `R' `, value: 5},
        {text: `U`, value: 0},
        {
            text: `)
        (`, value: undefined
        },
        {text: `R `, value: 4},
        {text: `U' `, value: 1, class: 'right-thumb'},
        {text: `U' `, value: 1, class: 'left-index-finger'},
        {text: `R' `, value: 5},
        {text: `U`, value: 0},
        {text: `) (`, value: undefined},
        {text: `R `, value: 4},
        {text: `U' `, value: 1, class: 'left-index-finger'},
        {text: `R'`, value: 5},
        {text: `) `, value: undefined},
    ],
    // 9
    [
        {text: `(`, value: undefined},
        {text: `R `, value: 4},
        {text: `U`, value: 0},
        {text: `) `, value: undefined},
        {text: `F `, value: 8},
        {text: `(`, value: undefined},
        {text: `R `, value: 4},
        {text: `U `, value: 0},
        {text: `R' `, value: 5},
        {text: `U'`, value: 1, class: 'left-index-finger'},
        {
            text: `)
        `, value: undefined
        },
        {text: `F' `, value: 9, class: 'right-thumb'},
        {text: `R'`, value: 5},
    ],
    // 10
    [
        {text: `y'`, value: 19},
        {text: ` (`, value: undefined},
        {text: `R' `, value: 9},
        {text: `U `, value: 0},
        {text: `R `, value: 8},
        {text: `U'`, value: 1, class: 'left-index-finger'},
        {text: `) (`, value: undefined},
        {text: `R' `, value: 9},
        {text: `U `, value: 0},
        {text: `R`, value: 8},
        {text: `)`, value: undefined},
    ],
    // 11
    [
        {text: `(`, value: undefined},
        {text: `R `, value: 4},
        {text: `U `, value: 0},
        {text: `R' `, value: 5},
        {text: `U'`, value: 1, class: 'left-index-finger'},
        {text: `) (`, value: undefined},
        {text: `R `, value: 4},
        {text: `U `, value: 0},
        {text: `R'`, value: 5},
        {text: `)`, value: undefined},
    ],
    // 12
    [
        {text: `(`, value: undefined},
        {text: `R `, value: 4},
        {text: `U `, value: 0},
        {text: `R' `, value: 5},
        {text: `U'`, value: 1, class: 'left-index-finger'},
        {text: `) (`, value: undefined},
        {text: `R `, value: 4},
        {text: `U `, value: 0},
        {text: `R' `, value: 5},
        {text: `U'`, value: 1, class: 'left-index-finger'},
        {text: `) (`, value: undefined},
        {text: `R `, value: 4},
        {text: `U `, value: 0},
        {text: `R'`, value: 5},
        {text: `)`, value: undefined},
    ],

    // 13
    [
        {text: `(`, value: undefined},
        {text: `R `, value: 4},
        {text: `U' `, value: 1, class: 'left-index-finger'},
        {text: `R' `, value: 5},
        {text: `U`, value: 0},
        {text: `) `, value: undefined},
        {text: `y'`, value: 19},
        {text: ` (`, value: undefined},
        {text: `R' `, value: 9},
        {text: `U `, value: 0},
        {text: `R`, value: 8},
        {text: `)`, value: undefined},
    ],

    // 14
    [
        {text: `y' `, value: 19},
        {text: `(`, value: undefined},
        {text: `R' `, value: 9},
        {text: `U2`, value: 0},
        {text: undefined, value: 0},
        {text: `) (`, value: undefined},
        {text: `R `, value: 8},
        {text: `U `, value: 0},
        {text: `R' `, value: 9},
        {text: `U' `, value: 1, class: 'left-index-finger'},
        {text: `R`, value: 8},
        {text: `)`, value: undefined},
    ],

    // 15
    [
        {text: `y' `, value: 19},
        {text: `U' `, value: 1, class: 'left-index-finger'},
        {text: `(`, value: undefined},
        {text: `R' `, value: 9},
        {text: `U2`, value: 0},
        {text: undefined, value: 0},
        {
            text: `)
        (`, value: undefined
        },
        {text: `R `, value: 8},
        {text: `U' `, value: 1, class: 'left-index-finger'},
        {text: `R' `, value: 9},
        {text: `U `, value: 0},
        {text: `R`, value: 8},
        {text: `)`, value: undefined},
    ],

    // 16
    [
        {text: `y' `, value: 19},
        {text: `(`, value: undefined},
        {text: `R' `, value: 9},
        {text: `U `, value: 0},
        {text: `R `, value: 8},
        {text: `U' `, value: 1, class: 'right-thumb'},
        {text: `U'`, value: 1, class: 'left-index-finger'},
        {
            text: `)
        (`, value: undefined
        },
        {text: `R' `, value: 9},
        {text: `U' `, value: 1, class: 'left-index-finger'},
        {text: `R`, value: 8},
        {text: `)`, value: undefined},
    ],

    // 17
    [
        {text: `F `, value: 8},
        {text: `U `, value: 0},
        {text: `(`, value: undefined},
        {text: `R `, value: 4},
        {text: `U' `, value: 1},
        {text: `R' `, value: 5},
        {text: `F'`, value: 9, class: 'right-thumb'},
        {text: `) (`, value: undefined},
        {text: `R `, value: 4},
        {text: `U' `, value: 1, class: 'left-index-finger'},
        {text: `R'`, value: 5},
        {text: `)`, value: undefined},
    ],

    // 18
    [
        {text: `U `, value: 0},
        {text: `(`, value: undefined},
        {text: `R `, value: 4},
        {text: `U' `, value: 1, class: 'left-index-finger'},
        {text: `R' `, value: 5},
        {text: `U'`, value: 1, class: 'left-index-finger'},
        {text: `) (`, value: undefined},
        {text: `R `, value: 4},
        {text: `U' `, value: 1, class: 'left-index-finger'},
        {text: `R' `, value: 5},
        {text: `U`, value: 0},
        {
            text: `)
        (`, value: undefined
        },
        {text: `R `, value: 4},
        {text: `U' `, value: 1, class: 'left-index-finger'},
        {text: `R'`, value: 5},
        {text: `)`, value: undefined},
    ],
    // 19
    [
        {text: `(`, value: undefined},
        {text: `R `, value: 4},
        {text: `U' `, value: 1, class: 'left-index-finger'},
        {text: `R' `, value: 5},
        {text: `U2`, value: 0},
        {text: undefined, value: 0},
        {text: `) (`, value: undefined},
        {text: `R `, value: 4},
        {text: `U `, value: 0},
        {text: `R'`, value: 5},
        {text: `)`, value: undefined},
    ],
    // 20
    [
        {text: `U `, value: 0},
        {text: `(`, value: undefined},
        {text: `R `, value: 4},
        {text: `U' `, value: 1, class: 'right-thumb'},
        {text: `U'`, value: 1, class: 'left-index-finger'},
        {text: `) (`, value: undefined},
        {text: `R' `, value: 5},
        {text: `U `, value: 0},
        {text: `R `, value: 4},
        {text: `U' `, value: 1, class: 'left-index-finger'},
        {text: `R'`, value: 5},
        {text: `)`, value: undefined},
    ],
    // 21
    [
        {text: `(`, value: undefined},
        {text: `R `, value: 4},
        {text: `U' `, value: 1, class: 'right-thumb'},
        {text: `U'`, value: 1, class: 'left-index-finger'},
        {text: `) (`, value: undefined},
        {text: `R' `, value: 5},
        {text: `U' `, value: 1, class: 'left-index-finger'},
        {text: `R `, value: 4},
        {text: `U `, value: 0},
        {text: `R'`, value: 5},
        {text: `)`, value: undefined},
    ],
    // 22
    [
        {text: `U' `, value: 1, class: 'left-index-finger'},
        {text: `(`, value: undefined},
        {text: `R `, value: 4},
        {text: `U' `, value: 1, class: 'left-index-finger'},
        {text: `R' `, value: 5},
        {text: `U2`, value: 0},
        {text: undefined, value: 0},
        {text: `) (`, value: undefined},
        {text: `R `, value: 4},
        {text: `U' `, value: 1, class: 'left-index-finger'},
        {text: `R'`, value: 5},
        {text: `)`, value: undefined},
    ],
    // 23
    [
        {text: `U' `, value: 1, class: 'left-index-finger'},
        {text: `(`, value: undefined},
        {text: `R `, value: 4},
        {text: `U `, value: 0},
        {text: `R'`, value: 5},
        {text: `) `, value: undefined},
        {text: `y' `, value: 19},
        {text: `(`, value: undefined},
        {text: `U `, value: 0},
        {text: `R' `, value: 9},
        {text: `U' `, value: 1, class: 'left-index-finger'},
        {text: `R`, value: 8},
        {text: `)`, value: undefined},
    ],
    // 24
    [
        {text: `y' `, value: 19},
        {text: `U `, value: 0},
        {text: `(`, value: undefined},
        {text: `R' `, value: 9},
        {text: `U `, value: 0},
        {text: `R `, value: 8},
        {text: `U'`, value: 1, class: 'left-index-finger'},
        {text: `) (`, value: undefined},
        {text: `R' `, value: 9},
        {text: `U' `, value: 1, class: 'left-index-finger'},
        {text: `R`, value: 8},
        {text: `)`, value: undefined},
    ],
    // 25
    [
        {text: `y' `, value: 19},
        {text: `(`, value: undefined},
        {text: `R' `, value: 9},
        {text: `U' `, value: 1, class: 'left-index-finger'},
        {text: `R`, value: 8},
        {text: `)`, value: undefined},
    ],
    // 26
    [
        {text: `y' `, value: 19},
        {text: `U `, value: 0},
        {text: `(`, value: undefined},
        {text: `R' `, value: 9},
        {text: `U' `, value: 1, class: 'left-index-finger'},
        {text: `R `, value: 8},
        {text: `U'`, value: 1, class: 'left-index-finger'},
        {
            text: `)
        (`, value: undefined
        },
        {text: `R' `, value: 9},
        {text: `U' `, value: 1, class: 'left-index-finger'},
        {text: `R`, value: 8},
        {text: `)`, value: undefined},
    ],
    // 27
    [
        {text: `y' `, value: 19},
        {text: `(`, value: undefined},
        {text: `R `, value: 8},
        {text: `U' `, value: 1, class: 'right-thumb'},
        {text: `U'`, value: 1, class: 'left-index-finger'},
        {
            text: `)
        (`, value: undefined
        },
        {text: `R'2 `, value: 9},
        {text: undefined, value: 9},
        {text: `U'`, value: 1, class: 'left-index-finger'},
        {text: `) (`, value: undefined},
        {text: `R2 `, value: 8},
        {text: undefined, value: 8},
        {text: `U' `, value: 1, class: 'left-index-finger'},
        {text: `R'`, value: 9},
        {text: `)`, value: undefined},
    ],
    // 28
    [
        {text: `(`, value: undefined},
        {text: `l `, value: 20},
        {text: `U`, value: 0},
        {text: `) (`, value: undefined},
        {text: `r `, value: 22},
        {text: `U' `, value: 1, class: 'left-index-finger'},
        {text: `r' `, value: 23},
        {text: `U'`, value: 1, class: 'left-index-finger'},
        {text: `) `, value: undefined},
        {text: `l'`, value: 21},
    ],
    // 29
    [
        {text: `U' `, value: 1, class: 'left-index-finger'},
        {text: `(`, value: undefined},
        {text: `R `, value: 4},
        {text: `U' `, value: 1, class: 'right-thumb'},
        {text: `U'`, value: 1, class: 'left-index-finger'},
        {
            text: `)
        (`, value: undefined
        },
        {text: `R' `, value: 5},
        {text: `U2`, value: 0},
        {text: undefined, value: 0},
        {text: `) (`, value: undefined},
        {text: `R `, value: 4},
        {text: `U' `, value: 1, class: 'left-index-finger'},
        {text: `R'`, value: 5},
        {text: `) `, value: undefined},
    ],
    // 30
    [
        {text: `U' `, value: 1, class: 'left-index-finger'},
        {text: `(`, value: undefined},
        {text: `R `, value: 4},
        {text: `U `, value: 0},
        {text: `R' `, value: 5},
        {text: `U'`, value: 1, class: 'left-index-finger'},
        {
            text: `)
        (`, value: undefined
        },
        {text: `R `, value: 4},
        {text: `U' `, value: 1, class: 'right-thumb'},
        {text: `U' `, value: 1, class: 'left-index-finger'},
        {text: `R'`, value: 5},
        {text: `) `, value: undefined},
    ],
    // 31
    [
        {text: `U `, value: 0},
        {text: `R `, value: 4},
        {text: `U' `, value: 1, class: 'left-index-finger'},
        {text: `R'`, value: 5},
    ],
    // 32
    [
        {text: `U' `, value: 1, class: 'left-index-finger'},
        {text: `(`, value: undefined},
        {text: `R `, value: 4},
        {text: `U' `, value: 1, class: 'right-thumb'},
        {text: `U' `, value: 1, class: 'left-index-finger'},
        {text: `R' `, value: 5},
        {text: `U`, value: 0},
        {text: `) (`, value: undefined},
        {text: `R `, value: 4},
        {text: `U `, value: 0},
        {text: `R'`, value: 5},
        {text: `)`, value: undefined},
    ],
    // 33
    [
        {text: `y' `, value: 19},
        {text: `U `, value: 0},
        {text: `(`, value: undefined},
        {text: `R' `, value: 9},
        {text: `U' `, value: 1, class: 'left-index-finger'},
        {text: `R`, value: 8},
        {text: `) `, value: undefined},
        {text: `d' `, value: 25, class: 'right-ring-finger'},
        {text: `(`, value: undefined},
        {text: `R `, value: 8},
        {text: `U `, value: 0},
        {text: `R'`, value: 9},
        {text: `)`, value: undefined},
    ],
    // 34
    [
        {text: `y' `, value: 19},
        {text: `U' `, value: 1, class: 'left-index-finger'},
        {text: `(`, value: undefined},
        {text: `R' `, value: 9},
        {text: `U `, value: 0},
        {text: `R`, value: 8},
        {text: `) `, value: undefined},
    ],
    // 35
    [
        {text: `y' `, value: 19},
        {text: `U `, value: 0},
        {text: `(`, value: undefined},
        {text: `R' `, value: 9},
        {text: `U' `, value: 1, class: 'left-index-finger'},
        {text: `R `, value: 8},
        {text: `U' `, value: 1, class: 'right-thumb'},
        {text: `U'`, value: 1, class: 'left-index-finger'},
        {
            text: `)
        (`, value: undefined
        },
        {text: `R' `, value: 9},
        {text: `U `, value: 0},
        {text: `R`, value: 8},
        {text: `) `, value: undefined},
    ],
    // 36
    [
        {text: `y' `, value: 19},
        {text: `U `, value: 0},
        {text: `(`, value: undefined},
        {text: `R' `, value: 9},
        {text: `U2 `, value: 1},
        {text: undefined, value: 1},
        {text: `R `, value: 8},
        {text: `U' `, value: 1, class: 'right-thumb'},
        {text: `U'`, value: 1, class: 'left-index-finger'},
        {
            text: `)
        (`, value: undefined
        },
        {text: `R' `, value: 9},
        {text: `U `, value: 0},
        {text: `R`, value: 8},
        {text: `) `, value: undefined},
    ],
    // 37
    [
        {text: `(`, value: undefined},
        {text: `R `, value: 4},
        {text: `U' `, value: 1, class: 'left-index-finger'},
        {text: `R' `, value: 5},
        {text: `U2`, value: 1},
        {text: undefined, value: 1},
        {text: `) `, value: undefined},
        {text: `y' `, value: 19},
        {text: `(`, value: undefined},
        {text: `R' `, value: 9},
        {text: `U' `, value: 1, class: 'left-index-finger'},
        {text: `R`, value: 8},
        {text: `) `, value: undefined},
    ],
    // 38
    [
        {text: `(`, value: undefined},
        {text: `R `, value: 4},
        {text: `U' `, value: 1, class: 'left-index-finger'},
        {text: `R' `, value: 5},
        {text: `U`, value: 0},
        {
            text: `)
        (`, value: undefined
        },
        {text: `R `, value: 4},
        {text: `U' `, value: 1, class: 'left-index-finger'},
        {text: `R' `, value: 5},
        {text: `U2`, value: 1},
        {text: undefined, value: 1},
        {text: `) (`, value: undefined},
        {text: `R `, value: 4},
        {text: `U' `, value: 1, class: 'left-index-finger'},
        {text: `R'`, value: 5},
        {text: `) `, value: undefined},
    ],
    // 39
    [
        {text: `U' `, value: 1, class: 'left-index-finger'},
        {text: `(`, value: undefined},
        {text: `R `, value: 4},
        {text: `U `, value: 0},
        {text: `R' `, value: 5},
        {text: `U`, value: 0},
        {text: `) (`, value: undefined},
        {text: `R `, value: 4},
        {text: `U `, value: 0},
        {text: `R'`, value: 5},
        {text: `) `, value: undefined},
    ],
    // 40
    [
        {text: `(`, value: undefined},
        {text: `R `, value: 4},
        {text: `U `, value: 0},
        {text: `R'`, value: 5},
        {text: `) `, value: undefined},
    ],
    // 41
    [
        {text: `U' `, value: 1, class: 'left-index-finger'},
        {text: `(`, value: undefined},
        {text: `R `, value: 4},
        {text: `U' `, value: 1, class: 'left-index-finger'},
        {text: `R' `, value: 5},
        {text: `U`, value: 0},
        {text: `) (`, value: undefined},
        {text: `R `, value: 4},
        {text: `U `, value: 0},
        {text: `R'`, value: 5},
        {text: `) `, value: undefined},
    ],
];
