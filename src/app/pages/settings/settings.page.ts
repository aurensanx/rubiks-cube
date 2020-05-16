import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CubeSettings, SettingsService} from '../../shared/services';

@Component({
    selector: 'app-page-settings',
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

    onSensitivityChange(event) {
        this.cubeSettings.sensitivity = event.detail.value;
        this.settingsService.getSensitivityNormalized(this.cubeSettings);
    }

    onControlsChange(event) {
        this.cubeSettings.controls = event.detail.value;
    }

}
