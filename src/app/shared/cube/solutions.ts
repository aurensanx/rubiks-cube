export interface SolutionStep {
    text: string;
    value: number;
    active?: boolean;
    class?: string;
}

const S_P: () => SolutionStep = () => ({text: `(`, value: undefined});
const C_P: () => SolutionStep = () => ({text: `)`, value: undefined});
const CS_P: () => SolutionStep = () => ({text: `) (`, value: undefined});
const S: () => SolutionStep = () => ({text: ` `, value: undefined});
const NL: () => SolutionStep = () => ({
    text: `
`, value: undefined
});
const R: () => SolutionStep = () => ({text: `R`, value: 4});
const R0: () => SolutionStep = () => ({text: `R'`, value: 5});
const R_Y: () => SolutionStep = () => ({text: `R`, value: 8});
const R0_Y: () => SolutionStep = () => ({text: `R'`, value: 9});
// const R2: () => SolutionStep[] = () => [{text: `R2`, value: 4}, {text: undefined, value: 4}];
const R20: () => SolutionStep[] = () => [{text: `R2'`, value: 5}, {text: undefined, value: 5}];
const R2_Y0: () => SolutionStep[] = () => [{text: `R2`, value: 8}, {text: undefined, value: 8}];
const R20_Y0: () => SolutionStep[] = () => [{text: `R'2`, value: 9}, {text: undefined, value: 9}];
const U: () => SolutionStep = () => ({text: `U`, value: 0});
const U0_RT: () => SolutionStep = () => ({text: `U'`, value: 1, class: 'right-thumb'});
const U0_LIF: () => SolutionStep = () => ({text: `U'`, value: 1, class: 'left-index-finger'});
const U2: () => SolutionStep[] = () => [{text: `U2`, value: 0}, {text: undefined, value: 0}];
const F: () => SolutionStep = () => ({text: `F`, value: 8});
const F0_RT: () => SolutionStep = () => ({text: `F'`, value: 9, class: 'right-thumb'});
const Y0: () => SolutionStep = () => ({text: `y'`, value: 19});
const LM: () => SolutionStep = () => ({text: `l`, value: 20});
const LM0: () => SolutionStep = () => ({text: `l'`, value: 21});
const RM: () => SolutionStep = () => ({text: `r`, value: 22});
const RM0: () => SolutionStep = () => ({text: `r'`, value: 23});
const DE0_RF: () => SolutionStep = () => ({text: `d' `, value: 25, class: 'right-ring-finger'});


export const SOLUTIONS: SolutionStep[][] = [
    [],
    // F2L
    [S_P(), R(), S(), U0_LIF(), S(), R0(), S(), U(), C_P(), S(), Y0(), NL(), S_P(), R0_Y(), S(), ...U2(), S(), R_Y(), S(), U0_RT(), S(), U0_LIF(), CS_P(), R0_Y(), S(), U(), S(), R_Y(), C_P()], // 1
    [S_P(), U(), S(), R(), S(), U0_LIF(), S(), R0(), S(), U0_LIF(), C_P(), S(), Y0(), NL(), S_P(), R0_Y(), S(), U(), S(), R_Y(), C_P()], // 2
    [S_P(), R0(), S(), F0_RT(), S(), R(), S(), U(), CS_P(), R(), S(), U0_LIF(), S(), R0(), S(), F(), C_P()], // 3
    [S_P(), R(), S(), U(), S(), R0(), S(), U0_LIF(), C_P(), NL(), S_P(), R(), S(), ...U2(), S(), R0(), S(), U0_LIF(), CS_P(), R(), S(), U(), S(), R0(), C_P()], // 4
    [S_P(), R(), S(), F(), C_P(), S(), U(), NL(), S_P(), R(), S(), U0_LIF(), S(), R0(), S(), F0_RT(), CS_P(), U0_LIF(), S(), R0(), C_P()], // 5
    [Y0(), S(), S_P(), R0_Y(), S(), U0_LIF(), S(), R_Y(), S(), U(), CS_P(), R0_Y(), S(), U0_LIF(), S(), R_Y(), C_P()], // 6
    [S_P(), R(), S(), U0_LIF(), S(), R0(), S(), U(), CS_P(), R(), S(), U0_LIF(), S(), R0(), C_P()], // 7
    [S_P(), R(), S(), U0_LIF(), S(), R0(), S(), U(), C_P(), NL(), S_P(), R(), S(), U0_RT(), S(), U0_LIF(), S(), R0(), S(), U(), CS_P(), R(), S(), U0_LIF(), S(), R0(), C_P()], // 8
    [S_P(), R(), S(), U(), C_P(), S(), F(), S(), S_P(), R(), S(), U(), S(), R0(), S(), U0_LIF(), C_P(), NL(), F0_RT(), S(), R0()], // 9
    [Y0(), S(), S_P(), R0_Y(), S(), U(), S(), R_Y(), S(), U0_LIF(), CS_P(), R0_Y(), S(), U(), S(), R_Y(), C_P()], // 10
    [S_P(), R(), S(), U(), S(), R0(), S(), U0_LIF(), CS_P(), R(), S(), U(), S(), R0(), C_P()], // 11
    [S_P(), R(), S(), U(), S(), R0(), S(), U0_LIF(), CS_P(), R(), S(), U(), S(), R0(), S(), U0_LIF(), CS_P(), R(), S(), U(), S(), R0(), C_P()], // 12
    [S_P(), R(), S(), U0_LIF(), S(), R0(), S(), U(), C_P(), S(), Y0(), S(), S_P(), R0_Y(), S(), U(), S(), R_Y(), C_P()], // 13
    [Y0(), S(), S_P(), R0_Y(), S(), ...U2(), CS_P(), R_Y(), S(), U(), S(), R0_Y(), S(), U0_LIF(), S(), R_Y(), C_P()], // 14
    [Y0(), S(), U0_LIF(), S(), S_P(), R0_Y(), S(), ...U2(), C_P(), NL(), S_P(), R_Y(), S(), U0_LIF(), S(), R0_Y(), S(), U(), S(), R_Y(), C_P()], // 15
    [Y0(), S(), S_P(), R0_Y(), S(), U(), S(), R_Y(), S(), U0_RT(), S(), U0_LIF(), C_P(), NL(), S_P(), R0_Y(), S(), U0_LIF(), S(), R_Y(), C_P()], // 16
    [F(), S(), U(), S(), S_P(), R(), S(), U0_LIF(), S(), R0(), S(), F0_RT(), CS_P(), R(), S(), U0_LIF(), S(), R0(), C_P()], // 17
    [U(), S(), S_P(), R(), S(), U0_LIF(), S(), R0(), S(), U0_LIF(), CS_P(), R(), S(), U0_LIF(), S(), R0(), S(), U(), C_P(), NL(), S_P(), R(), S(), U0_LIF(), S(), R0(), C_P()], // 18
    [S_P(), R(), S(), U0_LIF(), S(), R0(), S(), ...U2(), CS_P(), R(), S(), U(), S(), R0(), C_P()], // 19
    [U(), S(), S_P(), R(), S(), U0_RT(), S(), U0_LIF(), CS_P(), R0(), S(), U(), S(), R(), S(), U0_LIF(), S(), R0(), C_P()], // 20
    [S_P(), R(), S(), U0_RT(), S(), U0_LIF(), CS_P(), R0(), S(), U0_LIF(), S(), R(), S(), U(), S(), R0(), C_P()], // 21
    [U0_LIF(), S(), S_P(), R(), S(), U0_LIF(), S(), R0(), S(), ...U2(), CS_P(), R(), S(), U0_LIF(), S(), R0(), C_P()], // 22
    [U0_LIF(), S(), S_P(), R(), S(), U(), S(), R0(), C_P(), S(), Y0(), S(), S_P(), U(), S(), R0_Y(), S(), U0_LIF(), S(), R_Y(), C_P()], // 23
    [Y0(), S(), U(), S(), S_P(), R0_Y(), S(), U(), S(), R_Y(), S(), U0_LIF(), CS_P(), R0_Y(), S(), U0_LIF(), S(), R_Y(), C_P()], // 24
    [Y0(), S(), S_P(), R0_Y(), S(), U0_LIF(), S(), R_Y(), C_P()], // 25
    [Y0(), S(), U(), S(), S_P(), R0_Y(), S(), U0_LIF(), S(), R_Y(), S(), U0_LIF(), C_P(), NL(), S_P(), R0_Y(), S(), U0_LIF(), S(), R_Y(), C_P()], // 26
    [Y0(), S(), S_P(), R_Y(), S(), U0_RT(), S(), U0_LIF(), C_P(), NL(), S_P(), ...R20_Y0(), S(), U0_LIF(), CS_P(), ...R2_Y0(), S(), U0_LIF(), S(), R0_Y(), C_P()], // 27
    [S_P(), LM(), S(), U(), CS_P(), RM(), S(), U0_LIF(), S(), RM0(), S(), U0_LIF(), C_P(), S(), LM0()], // 28
    [U0_LIF(), S(), S_P(), R(), S(), U0_RT(), S(), U0_LIF(), C_P(), NL(), S_P(), R0(), S(), ...U2(), CS_P(), R(), S(), U0_LIF(), S(), R0(), C_P()], // 29
    [U0_LIF(), S(), S_P(), R(), S(), U(), S(), R0(), S(), U0_LIF(), C_P(), NL(), S_P(), R(), S(), U0_RT(), S(), U0_LIF(), S(), R0(), C_P()], // 30
    [U(), S(), R(), S(), U0_LIF(), S(), R0()], // 31
    [U0_LIF(), S(), S_P(), R(), S(), U0_RT(), S(), U0_LIF(), S(), R0(), S(), U(), CS_P(), R(), S(), U(), S(), R0(), C_P()], // 32
    [Y0(), S(), U(), S(), S_P(), R0_Y(), S(), U0_LIF(), S(), R_Y(), C_P(), S(), DE0_RF(), S_P(), R_Y(), S(), U(), S(), R0_Y(), C_P()], // 33
    [Y0(), S(), U0_LIF(), S(), S_P(), R0_Y(), S(), U(), S(), R_Y(), C_P()], // 34
    [Y0(), S(), U(), S(), S_P(), R0_Y(), S(), U0_LIF(), S(), R_Y(), S(), U0_RT(), S(), U0_LIF(), C_P(), NL(), S_P(), R0_Y(), S(), U(), S(), R_Y(), C_P()], // 35
    [Y0(), S(), U(), S(), S_P(), R0_Y(), S(), ...U2(), S(), R_Y(), S(), U0_RT(), S(), U0_LIF(), C_P(), NL(), S_P(), R0_Y(), S(), U(), S(), R_Y(), C_P()], // 36
    [S_P(), R(), S(), U0_LIF(), S(), R0(), S(), ...U2(), C_P(), S(), Y0(), S(), S_P(), R0_Y(), S(), U0_LIF(), S(), R_Y(), C_P()], // 37
    [S_P(), R(), S(), U0_LIF(), S(), R0(), S(), U(), C_P(), NL(), S_P(), R(), S(), U0_LIF(), S(), R0(), S(), ...U2(), CS_P(), R(), S(), U0_LIF(), S(), R0(), C_P()], // 38
    [U0_LIF(), S(), S_P(), R(), S(), U(), S(), R0(), S(), U(), CS_P(), R(), S(), U(), S(), R0(), C_P()], // 39
    [S_P(), R(), S(), U(), S(), R0(), C_P()], // 40
    [U0_LIF(), S(), S_P(), R(), S(), U0_LIF(), S(), R0(), S(), U(), CS_P(), R(), S(), U(), S(), R0(), C_P()], // 41

    // OLL
    [S_P(), R(), S(), U0_RT(), S(), U0_LIF(), CS_P(), ...R20(), S(), F(), S(), R(), S(), F0_RT(), C_P(), NL(), ...U2(), S(), S_P(), R0(), S(), F(), S(), R(), S(), F0_RT(), C_P()], // 1
];
