// 鼠标操作事件和键盘操作事件
import * as THREE from 'three'
import { FirstPersonControls } from '../utils/FirstPersonControls.js'

let scene,camera,renderer;
let controls ;



init()
animate()

function init(){
  const canvas = document.getElementById('myCanvas')
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0xefd1b5)
  scene.fog = new THREE.FogExp2( 0xefd1b5, 0.0025)
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight,0.1,1000)
  camera.position.set( 100, 800, - 800 );
	camera.lookAt( - 100, 810, - 800 );
  // 页面样式的渲染是个大问题

  renderer = new THREE.WebGLRenderer({canvas})
  renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
  // 灯光问题
  const light = new THREE.DirectionalLight(0xffffff,1)
  light.position.set(0,10,10)
  scene.add(light)

  // 第一人称控制器，是以鼠标和键盘控制的人物的视角来进行显示的
  controls = new FirstPersonControls(camera, renderer.domElement );
  controls.movementSpeed = 150;
  controls.lookSpeed = 0.1;
  window.addEventListener( 'resize', onWindowResize );
}

function animate(){
  requestAnimationFrame(animate)
  renderer.render(scene,camera)
}

function onWindowResize(){
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
}