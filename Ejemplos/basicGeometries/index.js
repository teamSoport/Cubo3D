import * as THREE from 'three';

//scene
//Camera
//Render
var scene, camera, renderer;
var cubo = null;
var containerThree = document.getElementById("three");

function init(){
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0Xd637f0);
    camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,0.1,1000);
    camera.position.z = 3;
    renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    containerThree.appendChild(renderer.domElement);
}

function createBox(){
    var geo = new THREE.BoxGeometry(1,1,1);
    var mat = new THREE.MeshBasicMaterial({color: 0x1a7bc3});
    cubo = new THREE.Mesh(geo, mat);
    scene.add(cubo);
}

function animate (){
    requestAnimationFrame(animate);
    renderer.render(scene, camera);

    if (cubo != null) {
        cubo.rotation.y +=  0.004;
        cubo.rotation.x +=  0.004
    }
}
init();
createBox();
animate();