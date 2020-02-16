import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {StartMoveAction} from '../../store/action';
import {MoveState, selectMoveMove} from '../../store/state';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-buttons',
    templateUrl: './buttons.component.html',
    styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent implements OnInit {

    subscription: Subscription;
    move: number;

    constructor(private store: Store<{ state: MoveState }>) {
        this.subscription = store.pipe(select(selectMoveMove)).subscribe((next: number) => {
            this.move = next;
        });
    }

    ngOnInit() {
    }

    onStartMove(d) {
        this.store.dispatch(new StartMoveAction(d));
    }

    // onStopMove() {
    //     this.moveStore.dispatch(new StopMoveAction());
    // }

}
