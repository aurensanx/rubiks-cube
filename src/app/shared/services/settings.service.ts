import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';

export interface CubeSettings {
    moveSpeed: number;
    moveSpeedCounts: number;
    initialScrambleMoves: number;
    sensitivity: number;
    sensitivityNormalized: number;
}

@Injectable({
    providedIn: 'root'
})
export class SettingsService {

    cubeSettings: CubeSettings = {
        moveSpeed: 6,
        moveSpeedCounts: undefined,
        initialScrambleMoves: 10000,
        sensitivity: 5,
        sensitivityNormalized: undefined,
    };

    constructor(private storage: Storage) {
        this.getStorageSettings();
    }

    getStorageSettings() {
        this.storage.get('moveSpeed').then((val) => {
            if (val) {
                this.cubeSettings.moveSpeed = val;
            }
            this.getMoveSpeedCounts(this.cubeSettings);
        });
        this.storage.get('sensitivity').then((val) => {
            if (val) {
                this.cubeSettings.sensitivity = val;
            }
            this.getSensitivityNormalized(this.cubeSettings);
        });

    }

    saveStorageSettings(cubeSettings: CubeSettings) {
        this.storage.set('moveSpeed', cubeSettings.moveSpeed);
        this.storage.set('sensitivity', cubeSettings.sensitivity);
    }

    getMoveSpeedCounts = (cubeSettings: CubeSettings) => {
        cubeSettings.moveSpeedCounts = -4 * cubeSettings.moveSpeed + 48;
    };

    getSensitivityNormalized = (cubeSettings: CubeSettings) => {
        cubeSettings.sensitivityNormalized = -0.001 * cubeSettings.sensitivity + 0.011;
    };
}
