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
const R2: () => SolutionStep[] = () => [{text: `R2`, value: 4}, {text: undefined, value: 4}];
const R20: () => SolutionStep[] = () => [{text: `R'2`, value: 5}, {text: undefined, value: 5}];
const R2_Y0: () => SolutionStep[] = () => [{text: `R2`, value: 8}, {text: undefined, value: 8}];
const R20_Y0: () => SolutionStep[] = () => [{text: `R'2`, value: 9}, {text: undefined, value: 9}];
const U: () => SolutionStep = () => ({text: `U`, value: 0});
const U_RRF: () => SolutionStep = () => ({text: `U`, value: 0, class: 'right-ring-finger'});
const U0_RT: () => SolutionStep = () => ({text: `U'`, value: 1, class: 'right-thumb'});
const U0_LIF: () => SolutionStep = () => ({text: `U'`, value: 1, class: 'left-index-finger'});
const U2: () => SolutionStep[] = () => [{text: `U2`, value: 0}, {text: undefined, value: 0}];
const F: () => SolutionStep = () => ({text: `F`, value: 8});
const F0_RT: () => SolutionStep = () => ({text: `F'`, value: 9, class: 'right-thumb'});
const FV: () => SolutionStep = () => ({text: `f`, value: 26});
const FV0_RT: () => SolutionStep = () => ({text: `f'`, value: 27, class: 'right-thumb'});
const FV0_RRT: () => SolutionStep = () => ({text: `f'`, value: 27, class: 'right-ring-finger'});
const Y0: () => SolutionStep = () => ({text: `y'`, value: 19});
const M: () => SolutionStep = () => ({text: `M`, value: 14});
const M0_RRF: () => SolutionStep = () => ({text: `M'`, value: 15, class: 'right-ring-finger'});
const M20_RRF: () => SolutionStep[] = () => [{text: `M'2`, value: 15, class: 'right-ring-finger'}, {
    text: undefined,
    value: 15,
    class: 'right-ring-finger'
}];
const LM: () => SolutionStep = () => ({text: `l`, value: 20});
const LM0: () => SolutionStep = () => ({text: `l'`, value: 21});
const RM: () => SolutionStep = () => ({text: `r`, value: 22});
const RM0: () => SolutionStep = () => ({text: `r'`, value: 23});
const RM2: () => SolutionStep[] = () => [{text: `r2`, value: 22}, {text: undefined, value: 22}];
const RM20: () => SolutionStep[] = () => [{text: `r'2`, value: 23}, {text: undefined, value: 23}];
const DE0_RF: () => SolutionStep = () => ({text: `d' `, value: 25, class: 'right-ring-finger'});
const B: () => SolutionStep = () => ({text: `B`, value: 10});
const B0_RRF: () => SolutionStep = () => ({text: `B'`, value: 11, class: 'right-ring-finger'});
const D_RRF: () => SolutionStep = () => ({text: `D`, value: 2, class: 'right-ring-finger'});
const D0_RRF: () => SolutionStep = () => ({text: `D'`, value: 3, class: 'right-ring-finger'});
const BM: () => SolutionStep = () => ({text: `b`, value: 28});
const BMO_RT: () => SolutionStep = () => ({text: `b'`, value: 29, class: 'right-thumb'});


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
    [F(), S(), S_P(), R(), S(), U(), S(), R0(), S(), U0_LIF(), C_P(), S(), F0_RT(), NL(), FV(), S(), S_P(), R(), S(), U(), S(), R0(), U0_LIF(), C_P(), S(), FV0_RT()], // 2
    [FV(), S(), S_P(), R(), S(), U(), S(), R0(), S(), U0_LIF(), C_P(), S(), FV0_RT(), S(), U0_LIF(), NL(), F(), S(), S_P(), R(), S(), U(), S(), R0(), S(), U0_LIF(), C_P(), S(), F0_RT()], // 3
    [FV(), S(), S_P(), R(), S(), U(), S(), R0(), S(), U0_LIF(), C_P(), S(), FV0_RT(), S(), U(), NL(), F(), S(), S_P(), R(), S(), U(), S(), R0(), S(), U0_LIF(), C_P(), S(), F0_RT()], // 4
    [S_P(), RM0(), S(), ...U2(), CS_P(), R(), S(), U(), S(), R0(), S(), U(), C_P(), S(), RM()], // 5
    [S_P(), RM(), S(), U0_RT(), S(), U0_LIF(), CS_P(), R0(), S(), U0_LIF(), S(), R(), S(), U0_LIF(), S(), RM0(), C_P()], // 6
    [S_P(), RM(), S(), U(), S(), R0(), S(), U(), CS_P(), R(), S(), U0_RT(), S(), U0_LIF(), S(), RM0(), C_P()], // 7
    [S_P(), RM0(), S(), U0_LIF(), S(), R(), S(), U0_LIF(), CS_P(), R0(), S(), ...U2(), S(), RM(), C_P()], // 8
    [S_P(), R(), S(), U(), S(), R0(), S(), U0_LIF(), C_P(), NL(), S_P(), R0(), S(), F(), CS_P(), ...R2(), S(), U(), S(), R0(), S(), U0_LIF(), C_P(), S(), F0_RT()], // 9
    [S_P(), R(), S(), U(), S(), R0(), S(), U_RRF(), CS_P(), R0(), S(), F(), S(), R(), S(), F0_RT(), C_P(), NL(), S_P(), R(), S(), U0_RT(), S(), U0_LIF(), S(), R0(), C_P()], // 10
    [S_P(), RM0(), S(), ...R2(), S(), U(), S(), R0(), S(), U(), C_P(), NL(), S_P(), R(), S(), U0_RT(), S(), U0_LIF(), S(), R0(), S(), U(), C_P(), S(), M0_RRF()], // 11
    [M0_RRF(), S(), S_P(), R0(), S(), U0_LIF(), S(), R(), S(), U0_LIF(), C_P(), NL(), S_P(), R0(), S(), ...U2(), S(), R(), S(), U0_LIF(), C_P(), S(), M()], // 12
    [FV(), S(), S_P(), R(), S(), U(), CS_P(), ...R2(), S(), U0_LIF(), C_P(), NL(), S_P(), R0(), S(), U(), S(), R(), S(), U0_LIF(), C_P(), S(), FV0_RRT()], // 13
    [S_P(), R0(), S(), F(), CS_P(), R(), S(), U(), S(), R0(), S(), F0_RT(), S(), R(), C_P(), NL(), S_P(), F(), S(), U0_LIF(), S(), F0_RT(), C_P()], // 14
    [S_P(), RM0(), S(), U0_LIF(), S(), RM(), CS_P(), R0(), S(), U0_LIF(), S(), R(), S(), U(), C_P(), NL(), S_P(), RM0(), S(), U(), S(), RM(), C_P()], // 15
    [S_P(), RM(), S(), U(), S(), RM0(), CS_P(), R(), S(), U(), S(), R0(), S(), U0_LIF(), C_P(), NL(), S_P(), RM(), S(), U0_LIF(), S(), RM0(), C_P()], // 16
    [S_P(), LM(), S(), U0_LIF(), S(), LM0(), C_P(), NL(), S_P(), FV(), S(), ...R2(), S(), B(), S(), R0(), S(), U(), S(), R0(), S(), U0_LIF(), S(), FV0_RT(), C_P()], // 17
    [S_P(), RM(), S(), U(), S(), R0(), S(), U(), CS_P(), R(), S(), U0_RT(), S(), U0_LIF(), S(), RM0(), C_P(), NL(), S_P(), RM0(), S(), U0_LIF(), S(), R(), S(), U0_LIF(), CS_P(), R0(), S(), ...U2(), S(), RM(), C_P()], // 18
    [S_P(), RM0(), S(), R(), S(), U(), CS_P(), R(), S(), U(), S(), R0(), S(), U0_LIF(), S(), RM(), C_P(), NL(), S_P(), ...R20(), S(), F(), S(), R(), S(), F0_RT(), C_P()], // 19
    [S_P(), RM(), S(), U(), S(), R0(), S(), U0_LIF(), C_P(), S(), ...M20_RRF(), NL(), U(), S(), S_P(), R(), S(), U0_LIF(), S(), R0(), S(), U0_LIF(), C_P(), S(), M0_RRF()], // 20
    [S_P(), R(), S(), U0_RT(), S(), U0_LIF(), C_P(), NL(), S_P(), R0(), S(), U0_LIF(), S(), R(), S(), U(), S(), R0(), S(), U0_LIF(), C_P(), NL(), S_P(), R(), S(), U0_LIF(), S(), R0(), C_P()], // 21
    [S_P(), R(), S(), U0_RT(), S(), U0_LIF(), C_P(), NL(), S_P(), ...R20(), S(), U0_LIF(), CS_P(), ...R2(), S(), U0_LIF(), C_P(), NL(), S_P(), ...R20(), S(), U0_LIF(), CS_P(), U0_RT(), S(), R(), C_P()], // 22
    // FIXME color D
    [S_P(), ...R2(), S(), D0_RRF(), CS_P(), R(), S(), U0_RT(), S(), U0_LIF(), S(), R0(), S(), D_RRF(), C_P(), NL(), S_P(), R(), S(), U0_RT(), S(), U0_LIF(), S(), R(), C_P()], // 23
    [S_P(), RM(), S(), U(), S(), R0(), S(), U0_LIF(), CS_P(), RM0(), S(), F(), S(), R(), S(), F0_RT(), C_P()], // 24
    [F0_RT(), S(), S_P(), RM(), S(), U(), S(), R0(), S(), U0_LIF(), S(), CS_P(), RM0(), S(), F(), S(), R(), C_P()], // 25
    [S_P(), R(), S(), U0_RT(), S(), U0_LIF(), CS_P(), R0(), S(), U0_LIF(), S(), R(), S(), U0_LIF(), S(), R0(), C_P()], // 26
    [S_P(), R(), S(), U(), S(), R0(), S(), U(), CS_P(), R(), U0_RT(), S(), U0_LIF(), S(), R0(), C_P()], // 27
    [S_P(), RM(), S(), U(), S(), R0(), S(), U0_LIF(), CS_P(), RM0(), S(), R(), S(), U(), C_P(), NL(), S_P(), R(), S(), U0_LIF(), S(), R0(), C_P()], // 28
    [S_P(), R(), S(), U(), S(), R0(), S(), U0_LIF(), C_P(), NL(), S_P(), R(), S(), U0_LIF(), S(), R0(), S(), F0_RT(), S(), U0_LIF(), S(), F(), C_P(), NL(), S_P(), R(), S(), U(), S(), R0(), C_P()], // 29
    [FV(), S(), S_P(), R(), S(), U(), CS_P(), ...R2(), S(), U0_LIF(), S(), R0(), S(), U(), C_P(), NL(), S_P(), ...R2(), S(), U0_LIF(), S(), R0(), C_P(), S(), FV0_RT()], // 30
    [S_P(), RM0(), S(), F0_RT(), S(), U(), S(), F(), CS_P(), RM(), S(), U0_LIF(), S(), RM0(), S(), U0_LIF(), S(), RM(), C_P()], // 31
    [S_P(), R(), S(), U(), CS_P(), B0_RRF(), S(), U0_LIF(), C_P(), NL(), S_P(), R0(), S(), U(), S(), R(), S(), B(), S(), R0(), C_P()], // 32
    [S_P(), R(), S(), U(), S(), R0(), S(), U0_LIF(), CS_P(), R0(), S(), F(), S(), R(), S(), F0_RT(), C_P()], // 33
    [S_P(), R(), S(), U(), S(), ...R2(), S(), U0_LIF(), CS_P(), R0(), S(), F(), C_P(), NL(), S_P(), R(), S(), U(), S(), R(), S(), U0_LIF(), S(), F0_RT(), C_P()], // 34
    [S_P(), R(), S(), U0_RT(), S(), U0_LIF(), CS_P(), ...R20(), S(), F(), S(), R(), S(), F0_RT(), C_P(), NL(), S_P(), R(), S(), U0_RT(), S(), U0_LIF(), S(), R0(), C_P()], // 35
    [S_P(), R0(), S(), U0_LIF(), S(), R(), S(), U0_LIF(), CS_P(), R0(), S(), U(), S(), R(), S(), U(), C_P(), NL(), S_P(), LM(), S(), U0_LIF(), S(), R0(), S(), U(), C_P()], // 36
    [F(), S(), S_P(), R(), S(), U0_LIF(), S(), R0(), S(), U0_LIF(), CS_P(), R(), S(), U(), S(), R0(), S(), F0_RT(), C_P()], // 37
    [S_P(), R(), S(), U(), S(), R0(), S(), U(), CS_P(), R(), S(), U0_LIF(), S(), R0(), S(), U0_LIF(), C_P(), NL(), S_P(), R0(), S(), F(), S(), R(), S(), F0_RT(), C_P()], // 38
    [S_P(), R(), S(), U(), S(), R0(), S(), F0_RT(), S(), U0_LIF(), S(), F(), C_P(), NL(), U(), S(), S_P(), R(), S(), ...U2(), S(), R0(), C_P()], // 39
    [S_P(), R0(), S(), F(), CS_P(), R(), S(), U(), S(), R0(), S(), U0_LIF(), C_P(), S(), F0_RT(), NL(), S_P(), U(), S(), R(), C_P()], // 40
    [S_P(), R(), S(), U(), S(), R0(), S(), U_RRF(), CS_P(), R(), S(), U0_RT(), S(), U0_LIF(), S(), R0(), C_P(), NL(), F(), S(), S_P(), R(), S(), U(), S(), R0(), S(), U0_LIF(), C_P(), S(), F0_RT()], // 41
    [S_P(), R0(), S(), U0_LIF(), S(), R(), S(), U0_LIF(), CS_P(), R0(), S(), ...U2(), S(), R(), C_P(), NL(), F(), S(), S_P(), R(), S(), U(), S(), R0(), S(), U0_LIF(), C_P(), S(), F0_RT()], // 42
    [S_P(), B0_RRF(), S(), U0_LIF(), CS_P(), R0(), S(), U(), S(), R(), S(), B(), C_P()], // 43
    [FV(), S(), S_P(), R(), S(), U(), S(), R0(), S(), U0_LIF(), C_P(), S(), FV0_RT()], // 44
    [F(), S(), S_P(), R(), S(), U(), S(), R0(), S(), U0_LIF(), C_P(), S(), F0_RT()], // 45
    [S_P(), R0(), S(), U0_LIF(), CS_P(), R0(), S(), F(), S(), R(), S(), F0_RT(), C_P(), NL(), S_P(), U(), S(), R(), C_P()], // 46
    [BMO_RT(), S(), S_P(), U0_LIF(), S(), R0(), S(), U(), S(), R(), CS_P(), U0_LIF(), S(), R0(), S(), U(), S(), R(), C_P(), S(), BM()], // 47
    [F(), S(), S_P(), R(), S(), U(), S(), R0(), S(), U0_LIF(), CS_P(), R(), S(), U(), S(), R0(), S(), U0_LIF(), C_P(), S(), F0_RT()], // 48
    [S_P(), R(), S(), B0_RRF(), CS_P(), ...R20(), S(), F(), S(), ...R2(), S(), B(), C_P(), NL(), S_P(), ...R20(), S(), F0_RT(), S(), R(), C_P()], // 49
    [S_P(), RM0(), S(), U(), CS_P(), ...RM2(), S(), U0_LIF(), S(), ...RM20(), S(), U0_LIF(), C_P(), NL(), S_P(), ...RM2(), S(), U(), S(), RM0(), C_P()], // 50
    [FV(), S(), S_P(), R(), S(), U(), S(), R0(), S(), U0_LIF(), CS_P(), R(), S(), U(), S(), R0(), S(), U0_LIF(), C_P(), S(), FV0_RT()], // 51
    [S_P(), R0(), S(), F0_RT(), S(), U0_LIF(), S(), F(), S(), U0_LIF(), C_P(), NL(), S_P(), R(), S(), U(), S(), R0(), S(), U_RRF(), S(), R(), C_P()], // 52
    [S_P(), RM0(), S(), ...U2(), CS_P(), R(), S(), U(), S(), R0(), S(), U0_LIF(), C_P(), NL(), S_P(), R(), S(), U(), S(), R0(), S(), U(), S(), RM(), C_P()], // 53
    [S_P(), RM(), S(), U0_RT(), S(), U0_LIF(), CS_P(), R0(), S(), U0_LIF(), S(), R(), S(), U(), C_P(), NL(), S_P(), R0(), S(), U0_LIF(), S(), R(), S(), U0_LIF(), S(), RM0(), C_P()], // 54
    [S_P(), RM(), S(), U0_RT(), S(), U0_LIF(), S(), R0(), S(), U0_LIF(), C_P(), NL(), S_P(), RM0(), S(), ...R2(), S(), U(), S(), R0(), S(), U0_LIF(), C_P(), NL(), S_P(), RM(), S(), U0_LIF(), S(), RM0(), C_P()], // 55
    [S_P(), RM(), S(), U(), S(), RM0(), CS_P(), U(), S(), R(), S(), U0_LIF(), S(), R0(), CS_P(), U(), S(), R(), S(), U0_LIF(), S(), R0(), C_P(), NL(), S_P(), RM(), S(), U0_LIF(), S(), RM0(), C_P()], // 56
    [S_P(), R(), S(), U(), S(), R0(), S(), U0_LIF(), C_P(), S(), M0_RRF(), S(), S_P(), U(), S(), R(), S(), U0_LIF(), S(), RM0(), C_P()], // 57
];
