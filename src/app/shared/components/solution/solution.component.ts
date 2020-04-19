import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {selectMove, StartMoveAction, State} from '../../cube';
import {select, Store} from '@ngrx/store';
import {Subscription} from 'rxjs';

interface SolutionStep {
    text: string;
    value: number;
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
        {text: `y'
        `, value: undefined},
        {text: ` (`, value: undefined},
        {text: `R' `, value: 9},
        // FIXME
        {text: `U2 `, value: 0},
        {text: `U2 `, value: 0},
        {text: `R `, value: 8},
        {text: `U' `, value: 1, class: 'right-thumb'},
        {text: `U'`, value: 1, class: 'left-index-finger'},
        {text: `) (`, value: undefined},
        {text: `R' `, value: 9},
        {text: `U `, value: 0},
        // FIXME
        {text: `R)`, value: 8},
        // {text: `)`, value: undefined},
    ];

    constructor(private store: Store<{ state: State }>) {
        this.subscription = store.pipe(select(selectMove)).subscribe((next: number) => {
            this.currentMove = next;
            if (this.currentMove === undefined) {
                if (this.isSolutionClicked) {
                    this.dispatchMove();
                } else if (this.solution.length === this.moveIndex) {
                    this.isFinished = true;
                }
            }
        });
    }

    // (RU'R'U)y'
    // (R'U2RU'U')(R'UR)

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

    resetSolution() {
        this.isFinished = false;
        this.moveIndex = 0;
        this.resetClicked.emit();
    }

    dispatchMove() {
        if (this.solution.length > this.moveIndex) {
            if (this.solution[this.moveIndex].value !== undefined) {
                this.store.dispatch(new StartMoveAction(this.solution[this.moveIndex].value));
                this.moveIndex++;
            } else {
                this.moveIndex++;
                this.dispatchMove();
            }
            // if (SOLUTIONS[this.cubeConfiguration].length === this.moveIndex && !this.isSolutionClicked) {
            //     this.isFinished = true;
            // }
        } else {
            this.isFinished = true;
            this.isSolutionClicked = false;
        }
    }

}
