import * as THREE from 'three';
import {Mesh, Vector3, Vector4} from 'three';

const SIZE = {
    WIDTH: 1,
    HEIGHT: 1,
    DEPTH: 1,
};


// Right - Left - Up - Down - Front - Back
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


export const createPiece: (pieceDefinition: PIECE) => Mesh = (pieceDefinition: PIECE) => {
    const pieceMaterial = new THREE.MeshBasicMaterial({color: 0xFFFFFF, vertexColors: THREE.FaceColors});
    const piece = new THREE.Mesh(createPieceGeometry(pieceDefinition), pieceMaterial);
    piece.position.x = pieceDefinition.position[0];
    piece.position.y = pieceDefinition.position[1];
    piece.position.z = pieceDefinition.position[2];
    const geo = new THREE.EdgesGeometry(piece.geometry);
    const mat = new THREE.LineBasicMaterial({color: 0x000000, linewidth: 2});
    const wireFrame = new THREE.LineSegments(geo, mat);
    wireFrame.renderOrder = 1; // make sure wireFrame are rendered 2nd
    piece.add(wireFrame);
    return piece;
};
