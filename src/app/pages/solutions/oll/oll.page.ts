import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-page-oll',
    templateUrl: './oll.page.html',
    styleUrls: ['./oll.page.scss'],
})
export class OllPage implements OnInit {

    images: number[];

    constructor() {
    }

    ngOnInit() {
        this.images = Array.from({length: 57}, (_, id) => ++id);
    }

}
