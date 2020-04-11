import {Vector3} from 'three';
import {COLOR_ID} from '../index';
import {getColorFromNormal} from '../guessMoves';

describe('Cube Tests', () => {

    it('normal x should be BLUE', () => {
        const normal = new Vector3(1, 0, 0);
        expect(getColorFromNormal(normal)).toBe(COLOR_ID.BLUE);
    });

    it('normal x 1 should not be RED', () => {
        const normal = new Vector3(1, 0, 0);
        expect(getColorFromNormal(normal)).not.toBe(COLOR_ID.RED);
    });

    it('normal x -1 should be GREEN', () => {
        const normal = new Vector3(-1, 0, 0);
        expect(getColorFromNormal(normal)).toBe(COLOR_ID.GREEN);
    });

    it('normal z 1 should be RED', () => {
        const normal = new Vector3(0, 0, 1);
        expect(getColorFromNormal(normal)).toBe(COLOR_ID.RED);
    });

    it('normal z -1 should be ORANGE', () => {
        const normal = new Vector3(0, 0, -1);
        expect(getColorFromNormal(normal)).toBe(COLOR_ID.ORANGE);
    });

    it('normal y 1 should be WHITE', () => {
        const normal = new Vector3(0, 1, 0);
        expect(getColorFromNormal(normal)).toBe(COLOR_ID.WHITE);
    });

    it('normal y -1 should be YELLOW', () => {
        const normal = new Vector3(0, -1, 0);
        expect(getColorFromNormal(normal)).toBe(COLOR_ID.YELLOW);
    });


});




