import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {StartMoveAction} from '../../store/action';
import {CubeState} from '../../store/state';

@Component({
    selector: 'app-buttons',
    templateUrl: './buttons.component.html',
    styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent implements OnInit {

    constructor(private store: Store<{ state: CubeState }>) {
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
