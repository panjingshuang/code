// 鼠标操作事件和键盘操作事件
import * as THREE from 'three'
import { DragControls } from '../utils/DragControls.js'
const canvas = document.getElementById('myCanvas')
const scene = new THREE.Scene()
scene.background = new THREE.Color(0xAAAAAA)

const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight,1,5000)
camera.position.z = 1000

const renderer = new THREE.WebGLRenderer({canvas})
renderer.setSize(canvas.clientWidth,canvas.clientHeight)
const light = new THREE.DirectionalLight(0xf0f0f0,1)
light.position.set(0,10,10)
scene.add(light)

const box = new THREE.BoxGeometry(5,5,5,100,100,100)
const martial = new THREE.MeshPhongMaterial({ color : 	0x00ff00, side: THREE.DoubleSide})
const mesh = new THREE.Mesh(box,martial)

// 拖拽控制器-这里对元素进行拖拽的时候-objects需要是数组 - 这个拖拽只能是在当前元素所在的二维平面中进行操作
const controls = new DragControls([mesh], camera, renderer.domElement );
controls.addEventListener( 'dragstart', function ( event ) {
	event.object.material.emissive.set( 0xaaaaaa );
  // 可以对选中的元素的材料进行设置
} );
controls.addEventListener( 'dragend', function ( event ) {
	event.object.material.emissive.set( 0x000000 );
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