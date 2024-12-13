import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
//three/examples/jsm/controls/OrbitControls
//scene
//Camera
//Render
var scene, camera, renderer, controls;
//var cubo = null;
var containerThree = document.getElementById("three");

function init(){
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0Xd637f0);
    camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,0.1,1000);
    renderer = new THREE.WebGLRenderer();

    camera.position.z = 3;
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerThree.appendChild(renderer.domElement);

    controls = new OrbitControls(camera, renderer.domElement);


    var geo = new THREE.BoxGeometry(1,1,1);
    var mat = new THREE.MeshBasicMaterial({color: 0x1a7bc3});
    var cubo = new THREE.Mesh(geo, mat);
    scene.add(cubo);
}

function animate (){
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
/*
    if (cubo != null) {
        cubo.rotation.y +=  0.01;
        cubo.rotation.x +=  0.01;
    }*/
}
init();
//createBox();
animate();