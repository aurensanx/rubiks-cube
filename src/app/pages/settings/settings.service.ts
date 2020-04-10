import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';

export interface CubeSettings {
    moveSpeed: number;
    initialScrambleMoves: number;
    sensitivity: number;
}

@Injectable({
    providedIn: 'root'
})
export class SettingsService {

    cubeSettings: CubeSettings = {
        moveSpeed: 50,
        initialScrambleMoves: 10000,
        sensitivity: 0.005,
    };

    constructor(private storage: Storage) {
        this.getStorageSettings();
    }

    getStorageSettings() {
        this.storage.get('maxNumber').then((val) => {
            if (val) {
                this.cubeSettings.moveSpeed = val;
            }
        });

    }

    saveStorageSettings(cubeSettings: CubeSettings) {
        this.storage.set('moveSpeed', cubeSettings.moveSpeed);
    }
}
