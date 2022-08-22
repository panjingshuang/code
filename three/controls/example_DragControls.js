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
let enableSelection = false
const mouse = new THREE.Vector2(); // 这两个不知道是什么意识呢
const raycaster = new THREE.Raycaster(); //在三维空间中用来计算出鼠标移动过了什么物体
const group = new THREE.Group() // 创建一个组
scene.add(group)
onInit()
eventBind()
render()



function eventBind(){
  if(controls) controls.addEventListener('drag',render) // 拖拽完成之后进行canvas重新渲染
  window.addEventListener('resize',onResize)
  window.addEventListener('keydown', onKeydown)
  window.addEventListener('keyup',onKeyUp)
  window.addEventListener('click', onClick)
}

// 点击事件
function onClick(event){
  event.preventDefault();
  if(enableSelection){
    const draggableObjects = controls.getObjects() // 获取控制器中的所有的元素
    draggableObjects.length = 0;
    // 这里是啥意识呢？
    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
		mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
    // 这个是啥意识呢？
    raycaster.setFromCamera(mouse, camera)
    const intersections = raycaster.intersectObjects( objects, true );
    if(intersections.length > 0){
      const object = intersections[ 0 ].object;
      if(group.children.includes( object )){
        object.material.emissive.set( 0xaaaaaa );
				group.attach( object );
      }
      controls.transformGroup = true;
      draggableObjects.push( group );
    }
    if ( group.children.length === 0 ) {
      controls.transformGroup = false; // 设置是true的时候是将拖动整个组而不是单个元素
      draggableObjects.push( ...objects );
    }
  }
  render()
}

function onResize(){
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
  render()
}
// 初始化创建元素
function onInit(){
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
  // 初始化出来数据
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

// 渲染屏幕
function render(){
  renderer.render(scene, camera)
}

function onKeydown(event){ // shift
  enableSelection = ( event.keyCode === 16 ) ? true : false;
}
function onKeyUp() {
  enableSelection = false;
}

