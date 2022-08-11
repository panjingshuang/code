// 鼠标操作事件和键盘操作事件
import * as THREE from 'three'
import { PointerLockControls } from '../utils/PointerLockControls.js'

const canvas = document.getElementById('myCanvas')
const scene = new THREE.Scene()
scene.background = new THREE.Color(0xAAAAAA)

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight,0.1,1000)
camera.position.z = 20

const renderer = new THREE.WebGLRenderer({canvas})
renderer.setSize(canvas.clientWidth,canvas.clientHeight)
const light = new THREE.DirectionalLight(0xffffff,1)
light.position.set(0,10,10)
scene.add(light)

const box = new THREE.BoxGeometry(5,5,5,100,100,100)
const martial = new THREE.MeshPhongMaterial({ color : 	0x00ff00, side: THREE.DoubleSide})
const mesh = new THREE.Mesh(box,martial)

// 指针锁定控制器 这都无法使用 需要建立一个3d的环境
const controls = new PointerLockControls(camera, renderer.domElement );
controls.addEventListener( 'lock', function (  ) {
	console.log('lock')
} );
controls.addEventListener( 'unlock', function ( ) {
	console.log('unlock')
} );

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