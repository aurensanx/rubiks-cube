import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {NewButtonAction} from '../../store/action';

@Component({
    selector: 'app-buttons',
    templateUrl: './buttons.component.html',
    styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent implements OnInit {

    constructor(private buttonStore: Store<{ move: string }>) {
    }

    ngOnInit() {
    }

    onButtonClick(d) {
        this.buttonStore.dispatch(new NewButtonAction(d));
    }

}
