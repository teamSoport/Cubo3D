import * as THREE from 'three';

//scene
//Camera
//Render
var scene, camera, renderer;

var containerThree = document.getElementById("three");

function init(){
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0X0f79b9);
    camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,0.1,1000);
    renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    containerThree.appendChild(renderer.domElement);
}

function animate (){
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
//document.createElementNS( 'http://www.w3.org/1999/xhtml', 'canvas' )

init();
animate();