import * as THREE from 'three';

export const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 16;

export const raycaster = new THREE.Raycaster();

