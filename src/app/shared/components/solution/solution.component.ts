import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {getComplementaryMove, selectMove, StartMoveAction, State} from '../../cube';
import {select, Store} from '@ngrx/store';
import {Subscription} from 'rxjs';

interface SolutionStep {
    text: string;
    value: number;
    active?: boolean;
    class?: string;
}

@Component({
    selector: 'app-solution',
    templateUrl: './solution.component.html',
    styleUrls: ['./solution.component.scss'],
})
export class SolutionComponent implements OnInit {

    @Input() cubeConfiguration: number;
    @Output() resetClicked = new EventEmitter<any>();

    subscription: Subscription;
    currentMove: number;
    moveIndex = 0;
    isSolutionClicked: boolean;
    isFinished: boolean;

    solution: SolutionStep[] = [
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
    ];

    constructor(private store: Store<{ state: State }>) {
        this.subscription = store.pipe(select(selectMove)).subscribe((next: number) => {
            this.currentMove = next;
            if (this.currentMove === undefined) {
                if (this.isSolutionClicked) {
                    this.dispatchMove();
                } else if (this.areMovesLeft() === false) {
                    this.isFinished = true;
                }
            }
        });
    }

    ngOnInit() {
    }

    playSolution() {
        this.isSolutionClicked = true;
        this.dispatchMove();
    }

    pauseSolution() {
        this.isSolutionClicked = false;
    }

    playNextMove() {
        this.dispatchMove();
    }

    playPreviousMove() {
        this.isFinished = false;
        this.moveIndex--;
        if (this.moveIndex >= 0) {
            const moveValue = this.solution[this.moveIndex].value;
            if (moveValue !== undefined) {
                this.store.dispatch(new StartMoveAction(getComplementaryMove(moveValue)));
                this.setActiveStep(this.solution[this.moveIndex].text === undefined ? this.moveIndex - 1 : this.moveIndex);
            } else {
                this.playPreviousMove();
            }
        } else {
            this.moveIndex = 0;
        }
    }

    resetSolution() {
        this.isFinished = false;
        this.moveIndex = 0;
        this.resetClicked.emit();
    }

    dispatchMove() {
        this.moveIndex++;
        if (this.solution.length > this.moveIndex) {
            if (this.solution[this.moveIndex].value !== undefined) {
                this.store.dispatch(new StartMoveAction(this.solution[this.moveIndex].value));
                this.setActiveStep(this.solution[this.moveIndex].text === undefined ? this.moveIndex - 1 : this.moveIndex);
            } else {
                this.dispatchMove();
            }
        } else {
            this.isFinished = true;
            this.isSolutionClicked = false;
        }
    }

    areMovesLeft() {
        let result = false;
        for (let i = this.moveIndex; i < this.solution.length; i++) {
            if (this.solution[i].value !== undefined) {
                result = true;
                break;
            }
        }
        return result;
    }

    setActiveStep(i) {
        this.solution.forEach((s, index) => {
            s.active = i === index;
        });
    }

}
