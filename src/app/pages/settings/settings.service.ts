import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';

export interface CubeSettings {
    moveSpeed: number;
    moveSpeedCounts: number;
    initialScrambleMoves: number;
    sensitivity: number;
}

@Injectable({
    providedIn: 'root'
})
export class SettingsService {

    cubeSettings: CubeSettings = {
        moveSpeed: 6,
        moveSpeedCounts: undefined,
        initialScrambleMoves: 10000,
        sensitivity: 0.005,
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

    }

    saveStorageSettings(cubeSettings: CubeSettings) {
        this.storage.set('moveSpeed', cubeSettings.moveSpeed);
    }

    getMoveSpeedCounts = (cubeSettings: CubeSettings) => {
        cubeSettings.moveSpeedCounts = (10 - cubeSettings.moveSpeed) * 4 + 8;
    }
}
