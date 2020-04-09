import {Vector3} from 'three';
import {COLOR_ID} from '@cube-store';

const positionFacesMap: ({ value: number[], position: [number, number, number] }[]) = [
    {value: [27, 34, 48], position: [-1, -1, -1]},
    {value: [31, 52], position: [-1, -1, 0]},
    {value: [24, 35, 45], position: [-1, -1, 1]},
    {value: [15, 22], position: [-1, 0, -1]},
    {value: [19], position: [-1, 0, 0]},
    {value: [12, 23], position: [-1, 0, 1]},
    {value: [3, 10, 36], position: [-1, 1, -1]},
    {value: [7, 43], position: [-1, 1, 0]},
    {value: [0, 11, 39], position: [-1, 1, 1]},
    {value: [30, 51], position: [0, -1, -1]},
    {value: [53], position: [0, -1, 0]},
    {value: [28, 49], position: [0, -1, 1]},
    {value: [18], position: [0, 0, -1]},
    {value: [], position: [0, 0, 0]},
    {value: [16], position: [0, 0, 1]},
    {value: [6, 40], position: [0, 1, -1]},
    {value: [44], position: [0, 1, 0]},
    {value: [4, 42], position: [0, 1, 1]},
    {value: [26, 33, 43], position: [1, -1, -1]},
    {value: [29, 50], position: [1, -1, 0]},
    {value: [25, 32, 46], position: [1, -1, 1]},
    {value: [14, 21], position: [1, 0, -1]},
    {value: [17], position: [1, 0, 0]},
    {value: [13, 20], position: [1, 0, 1]},
    {value: [2, 9, 37], position: [1, 1, -1]},
    {value: [5, 41], position: [1, 1, 0]},
    {value: [1, 8, 38], position: [1, 1, 1]},
];


const positionFacesCondition: (normal: Vector3, position: [number, number, number]) => boolean =
    (normal: Vector3, position: [number, number, number]) => normal.x === position[0] && normal.y === position[1] && normal.z === position[2];

export const getFacesFromPiecePosition = (position: Vector3) => {
    const roundedPosition = roundVector3(position);
    return positionFacesMap.find(c => positionFacesCondition(roundedPosition, c.position)).value;
};


const colorNormalMap: ({ value: number, condition: (normal: Vector3) => boolean }[]) = [
    {value: COLOR_ID.RED, condition: (normal: Vector3) => normal.z === 1},
    {value: COLOR_ID.ORANGE, condition: (normal: Vector3) => normal.z === -1},
    {value: COLOR_ID.BLUE, condition: (normal: Vector3) => normal.x === 1},
    {value: COLOR_ID.GREEN, condition: (normal: Vector3) => normal.x === -1},
    {value: COLOR_ID.WHITE, condition: (normal: Vector3) => normal.y === 1},
    {value: COLOR_ID.YELLOW, condition: (normal: Vector3) => normal.y === -1},
];

export const getColorFromNormal = (normal: Vector3) => {
    const roundedNormal = roundVector3(normal);
    return colorNormalMap.find(c => c.condition(roundedNormal)).value;
};


export const roundVector3 = (vector: Vector3) => {
    vector.setX(Math.round(vector.x));
    vector.setY(Math.round(vector.y));
    vector.setZ(Math.round(vector.z));
    return vector;
};

export const getFinalMovement = (movement, facePosition: number) => {
    if (movement === 'x') {
        return faceMovementMap[facePosition][0];
    } else if (movement === '-x') {
        return faceMovementMap[facePosition][1];
    } else if (movement === 'y') {
        return faceMovementMap[facePosition][2];
    } else if (movement === '-y') {
        return faceMovementMap[facePosition][3];
    } else if (movement === 'z') {
        return faceMovementMap[facePosition][4];
    } else if (movement === '-z') {
        return faceMovementMap[facePosition][5];
    }
    return undefined;
};


const faceMovementMap: [number, number, number, number, number, number][] = [
    [1, 0, 6, 7, 1, 0], // 0
    [0, 1, 8, 9, 0, 1], // 1
    [0, 1, 4, 5, 1, 0], // 2
    [1, 0, 10, 11, 1, 0], // 3
    [1, 0, 14, 15, 0, 1], // 4
    [0, 1, 16, 17, 0, 1], // 5
    [0, 1, 15, 14, 1, 0], // 6
    [1, 0, 17, 16, 1, 0], // 7
    [1, 0, 5, 4, 0, 1], // 8
    [0, 1, 11, 10, 0, 1], // 9
    [0, 1, 7, 6, 1, 0], // 10
    [1, 0, 9, 8, 1, 0], // 11
    [12, 13, 6, 7, 13, 12], // 12
    [12, 13, 8, 9, 13, 12], // 13
    [13, 12, 4, 5, 12, 13], // 14
    [13, 12, 10, 11, 12, 13], // 15
    [12, 13, 14, 15, 13, 12], // 16
    [12, 13, 16, 17, 13, 12], // 17
    [13, 12, 15, 14, 12, 13], // 18
    [13, 12, 17, 16, 12, 13], // 19
    [12, 13, 5, 4, 13, 12], // 20
    [12, 13, 11, 10, 13, 12], // 21
    [13, 12, 7, 6, 12, 13], // 22
    [13, 12, 9, 8, 12, 13], // 23
    [2, 3, 6, 7, 3, 2], // 24
    [2, 3, 8, 9, 3, 2], // 25
    [3, 2, 4, 5, 2, 3], // 26
    [3, 2, 10, 11, 2, 3], // 27
    [2, 3, 14, 15, 3, 2], // 28
    [2, 3, 16, 17, 3, 2], // 29
    [3, 2, 15, 14, 2, 3], // 30
    [3, 2, 17, 16, 2, 3], // 31
    [2, 3, 5, 4, 3, 2], // 32
    [2, 3, 11, 10, 3, 2], // 33
    [3, 2, 7, 6, 2, 3], // 34
    [3, 2, 9, 8, 2, 3], // 35
    [11, 10, 6, 7, 6, 7], // 36
    [11, 10, 5, 4, 5, 4], // 37
    [8, 9, 5, 4, 5, 4], // 38
    [8, 9, 6, 7, 6, 7], // 39
    [11, 10, 14, 15, 14, 15], // 40
    [16, 17, 16, 17, 5, 4], // 41
    [8, 9, 14, 15, 14, 15], // 42
    [16, 17, 16, 17, 6, 7], // 43
    [16, 17, 14, 15, 14, 15], // 44
    [undefined, undefined, undefined, undefined, undefined, undefined], // 45
    [undefined, undefined, undefined, undefined, undefined, undefined], // 46
    [undefined, undefined, undefined, undefined, undefined, undefined], // 47
    [undefined, undefined, undefined, undefined, undefined, undefined], // 48
    [undefined, undefined, undefined, undefined, undefined, undefined], // 49
    [undefined, undefined, undefined, undefined, undefined, undefined], // 50
    [undefined, undefined, undefined, undefined, undefined, undefined], // 51
    [undefined, undefined, undefined, undefined, undefined, undefined], // 52
    [undefined, undefined, undefined, undefined, undefined, undefined], // 53
];
