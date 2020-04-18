import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-page-solution',
    templateUrl: './solution.page.html',
    styleUrls: ['./solution.page.scss'],
})
export class SolutionPage implements OnInit, OnDestroy {

    subscription: Subscription;
    cubeConfigurationId: number;
    toggleResetCube = false;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            this.cubeConfigurationId = +params.id;
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    onResetClicked() {
        this.toggleResetCube = !this.toggleResetCube;
    }

}
