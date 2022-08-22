// 鼠标操作事件和键盘操作事件
import * as THREE from 'three'
import { FirstPersonControls } from '../utils/FirstPersonControls.js'
const canvas = document.getElementById('myCanvas')
const scene = new THREE.Scene()
scene.background = new THREE.Color(0xefd1b5)
scene.fog = new THREE.FogExp2( 0xefd1b5, 0.0025)

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight,0.1,1000)
camera.position.z = 50

const renderer = new THREE.WebGLRenderer({canvas})
renderer.setSize(canvas.clientWidth,canvas.clientHeight)
const light = new THREE.DirectionalLight(0xffffff,1)
light.position.set(0,10,10)
scene.add(light)

const box = new THREE.BoxGeometry(5,5,5,100,100,100)
const martial = new THREE.MeshPhongMaterial({ color : 	0x00ff00, side: THREE.DoubleSide})
const mesh = new THREE.Mesh(box,martial)

// 第一人称控制器，是以鼠标和键盘控制的人物的视角来进行显示的
const controls = new FirstPersonControls(camera, renderer.domElement );
controls.movementSpeed = 150;
controls.lookSpeed = 0.1;

scene.add(mesh)
function animate(){
  requestAnimationFrame(animate)
  if(mesh){
    mesh.rotation.x += 0.01
    mesh.rotation.y += 0.01
  }
  renderer.render(scene,camera)
}
animate()