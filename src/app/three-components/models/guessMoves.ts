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



