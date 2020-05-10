import {Component, OnInit} from '@angular/core';
import {MenuController} from '@ionic/angular';

@Component({
    selector: 'app-side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {

    constructor(public menuCtrl: MenuController) {
    }

    ngOnInit() {
    }

    onClick() {
        this.menuCtrl.toggle();
    }

}
