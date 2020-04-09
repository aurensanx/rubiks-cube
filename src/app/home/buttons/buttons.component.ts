import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Subscription} from 'rxjs';
import {ButtonsService} from './buttons.service';
import {cubeSettings} from '../../three-components/controls';
import {MOVES} from 'src/app/three-components/models/moves';
import {selectMove, StartMoveAction, State} from '@cube-store';

@Component({
    selector: 'app-buttons',
    templateUrl: './buttons.component.html',
    styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent implements OnInit {

    subscription: Subscription;
    currentMove: number;
    isScramble: boolean;
    MOVES = MOVES;

    constructor(private store: Store<{ state: State }>, private buttonsService: ButtonsService) {
        this.subscription = store.pipe(select(selectMove)).subscribe((next: number) => {
            this.currentMove = next;
            // if (this.isScramble && this.currentMove === undefined) {
            //     this.store.dispatch(new StartMoveAction(this.buttonsService.getRandomMove()));
            // }
        });
    }

    ngOnInit() {
        // // TODO animación cámara al entrar
        // setTimeout(() => {
        //     this.scramble();
        // }, 1000);
    }

    scramble() {
        const moveSpeed = cubeSettings.moveSpeed;
        cubeSettings.moveSpeed = 1;
        this.isScramble = true;
        this.store.dispatch(new StartMoveAction(this.buttonsService.getRandomMove()));

        setTimeout(() => {
            this.isScramble = false;
            setTimeout(() => {
                cubeSettings.moveSpeed = moveSpeed;
            }, 100);
        }, 3000);
    }

    onStartMove(d) {
        this.store.dispatch(new StartMoveAction(d));
    }


    // onStopMove() {
    //     this.moveStore.dispatch(new StopMoveAction());
    // }

}
