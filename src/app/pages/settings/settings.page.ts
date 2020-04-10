import {Component, OnDestroy, OnInit} from '@angular/core';
import {CubeSettings, SettingsService} from './settings.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.page.html',
    styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit, OnDestroy {

    cubeSettings: CubeSettings;

    constructor(private router: Router, private settingsService: SettingsService) {
    }

    ngOnInit() {
        this.cubeSettings = this.settingsService.cubeSettings;
    }

    ngOnDestroy(): void {
        this.settingsService.saveStorageSettings(this.cubeSettings);
    }

    onMoveSpeedChange(event) {
        this.cubeSettings.moveSpeed = event.detail.value;
        this.settingsService.getMoveSpeedCounts(this.cubeSettings);
    }

    saveSettings() {
        this.router.navigate(['/']);
    }

}
