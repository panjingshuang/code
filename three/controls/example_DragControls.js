import * as THREE from 'three'
import { DragControls } from '../utils/DragControls.js'

// 样例拖拽控制器
const canvas = document.getElementById('myCanvas')
const scene = new THREE.Scene()
scene.background = new THREE.Color(0xAAAAAA)

const camera = new THREE.PerspectiveCamera(75,window.innerWidth/ window.innerHeight, 0.1,1000)
camera.position.z = 20

const renderer = new THREE.WebGLRenderer({canvas})
renderer.setSize(canvas.clientWidth,canvas.clientHeight)
const light = new THREE.DirectionalLight(0xffffff,1)

scene.add(light)



function animate(){
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}
animate()
