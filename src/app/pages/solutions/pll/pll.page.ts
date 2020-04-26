import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-page-pll',
    templateUrl: './pll.page.html',
    styleUrls: ['./pll.page.scss'],
})
export class PllPage implements OnInit {

    images: number[];

    constructor() {
    }

    ngOnInit() {
        this.images = Array.from({length: 21}, (_, id) => ++id);
    }

}
