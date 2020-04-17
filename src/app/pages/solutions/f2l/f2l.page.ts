import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-f2l',
    templateUrl: './f2l.page.html',
    styleUrls: ['./f2l.page.scss'],
})
export class F2lPage implements OnInit {

    images: number[];

    constructor() {
    }

    ngOnInit() {
        this.images = Array.from({length: 42}, (_, id) => id);
    }


}
