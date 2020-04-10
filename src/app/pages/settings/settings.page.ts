import {Component, OnInit} from '@angular/core';
import {CubeSettings, SettingsService} from './settings.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.page.html',
    styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

    cubeSettings: CubeSettings;

    constructor(private router: Router, private settingsService: SettingsService) {
        this.cubeSettings = this.settingsService.cubeSettings;
    }

    ngOnInit() {
    }

    onMoveSpeedChange(event) {
        this.cubeSettings.moveSpeed = event.detail.value;
    }

    saveSettings() {
        this.settingsService.saveStorageSettings(this.cubeSettings);
        this.router.navigate(['/']);
    }

}
