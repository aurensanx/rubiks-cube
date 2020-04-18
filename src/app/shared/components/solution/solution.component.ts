import {Component, Input, OnInit} from '@angular/core';
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

    subscription: Subscription;
    moveIndex = 0;
    isSolutionClicked: boolean;

    constructor(private store: Store<{ state: State }>) {
        this.subscription = store.pipe(select(selectMove)).subscribe((next: number) => {
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

    dispatchMove() {
        if (SOLUTIONS[this.cubeConfiguration].length > this.moveIndex) {
            this.store.dispatch(new StartMoveAction(SOLUTIONS[this.cubeConfiguration][this.moveIndex]));
            this.moveIndex++;
        } else {
            this.isSolutionClicked = false;
        }
    }

}
