import * as THREE from 'three';

const SIZE = {
    WIDTH: 1,
    HEIGHT: 1,
    DEPTH: 1,
};

export const COLORS = {
    BLUE: 0x0000FF,
    GREEN: 0x00FF00,
    WHITE: 0xFFFFFF,
    YELLOW: 0xFFFF00,
    RED: 0xFF0000,
    ORANGE: 0xFFA500,
    BLACK: 0X00000,
};


// Right - Left - Top - Bottom - Front - Rear
type FACE_COLORS = [number, number, number, number, number, number, number, number, number, number, number, number];


export interface PIECE {
    colors: FACE_COLORS;
    position: [number, number, number];
}


const createPieceGeometry = (piece: PIECE) => {
    const pieceGeometry = new THREE.BoxGeometry(SIZE.WIDTH, SIZE.HEIGHT, SIZE.DEPTH);
    pieceGeometry.faces.forEach((f, i) => {
        f.color = new THREE.Color(piece.colors[i]);
    });
    pieceGeometry.colorsNeedUpdate = true;
    return pieceGeometry;
};


export const createPiece = (pieceDefinition: PIECE) => {
    const pieceMaterial = new THREE.MeshBasicMaterial({color: 0xFFFFFF, vertexColors: THREE.FaceColors});
    const piece = new THREE.Mesh(createPieceGeometry(pieceDefinition), pieceMaterial);
    piece.position.x = pieceDefinition.position[0];
    piece.position.y = pieceDefinition.position[1];
    piece.position.z = pieceDefinition.position[2];
    return piece;
};
