import * as THREE from 'three'
import { DragControls } from '../utils/DragControls.js'

// 样例拖拽控制器
const canvas = document.getElementById('myCanvas')
const scene = new THREE.Scene()
scene.background = new THREE.Color(0xf0f0f0)
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/ window.innerHeight, 0.1,1000)
camera.position.z = 1000
const renderer = new THREE.WebGLRenderer({canvas})
renderer.setSize(canvas.clientWidth,canvas.clientHeight)


const objects = []
let controls = null
function init(){
  const light = new THREE.AmbientLight( 0x505050 )
  const light1 = new THREE.SpotLight( 0xffffff, 1.5 );
  light1.position.set( 0, 500, 2000 );
  light1.angle = Math.PI / 9;
  light1.castShadow = true;
  light1.shadow.camera.near = 1000;
  light1.shadow.camera.far = 4000;
  light1.shadow.mapSize.width = 1024;
  light1.shadow.mapSize.height = 1024;
  const geometry = new THREE.BoxGeometry( 40, 40, 40 );
  for(let i=0; i< 200; i++){
    const object = new THREE.Mesh(geometry,new THREE.MeshLambertMaterial({ color: Math.random() * 0xffffff}))

    object.position.x = Math.random() * 1000 - 500;
    object.position.y = Math.random() * 600 - 300;
    object.position.z = Math.random() * 800 - 400;

    object.rotation.x = Math.random() * 2 * Math.PI;
    object.rotation.y = Math.random() * 2 * Math.PI;
    object.rotation.z = Math.random() * 2 * Math.PI;

    object.scale.x = Math.random() * 2 + 1;
    object.scale.y = Math.random() * 2 + 1;
    object.scale.z = Math.random() * 2 + 1;
    object.castShadow = true;
    object.receiveShadow = true; // 这个好像是对其他元素阴影的影响

    scene.add(object)
    objects.push(object)
  }
  controls = new DragControls([...objects], camera, renderer.domElement)
  scene.add(light)
  scene.add(light1)
}

init()
function render(){
  renderer.render(scene, camera)
}
render()
