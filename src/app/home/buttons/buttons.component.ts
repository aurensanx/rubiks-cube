import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Subscription} from 'rxjs';
import {ButtonsService} from './buttons.service';
import {cubeSettings} from '../../three-components/controls';
import {MoveState, selectMoveMove, StartMoveAction} from '@cube-store';

@Component({
    selector: 'app-buttons',
    templateUrl: './buttons.component.html',
    styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent implements OnInit {

    subscription: Subscription;
    move: number;

    constructor(private store: Store<{ state: MoveState }>, private buttonsService: ButtonsService) {
        this.subscription = store.pipe(select(selectMoveMove)).subscribe((next: number) => {
            this.move = next;
        });
    }

    ngOnInit() {
        this.scramble();
    }

    scramble() {
        const moveSpeed = cubeSettings.moveSpeed;
        cubeSettings.moveSpeed = 1;
        [...Array(cubeSettings.initialScrambleMoves)].forEach((_, i) =>
            this.store.dispatch(new StartMoveAction(this.buttonsService.getRandomMove())));
        cubeSettings.moveSpeed = moveSpeed;
    }

    onStartMove(d) {
        this.store.dispatch(new StartMoveAction(d));
    }


    // onStopMove() {
    //     this.moveStore.dispatch(new StopMoveAction());
    // }

}
