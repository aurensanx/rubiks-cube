import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {getRandomMove, selectMove, StartMoveAction, State, StopMoveAction} from '../../cube';
import {select, Store} from '@ngrx/store';
import {SOLUTIONS} from '../../cube/solutions';
import {Subscription} from 'rxjs';

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

    constructor(private store: Store<{ state: State }>) {
        this.subscription = store.pipe(select(selectMove)).subscribe((next: number) => {
            this.currentMove = next;
            if (this.isSolutionClicked && next === undefined) {
                this.dispatchMove();
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

    resetSolution() {
        this.isFinished = false;
        this.moveIndex = 0;
        this.resetClicked.emit();
    }

    dispatchMove() {
        if (SOLUTIONS[this.cubeConfiguration].length > this.moveIndex) {
            this.store.dispatch(new StartMoveAction(SOLUTIONS[this.cubeConfiguration][this.moveIndex]));
            this.moveIndex++;
        } else {
            this.isFinished = true;
            this.isSolutionClicked = false;
        }
    }

}
