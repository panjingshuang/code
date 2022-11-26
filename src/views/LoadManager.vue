<template>
  <div id="base"></div>
</template>
<script setup>
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { onMounted, render } from 'vue'
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5
const renderer = new THREE.WebGLRenderer();
let  orbitControls = null
const onAnimate = () =>{
  requestAnimationFrame(onAnimate)
  renderer.render(scene, camera)
  if(orbitControls){
    orbitControls.update()
  }
}
onAnimate()

onMounted(() => {
  let baseDom = document.getElementById('base')
  baseDom.appendChild(renderer.domElement);
  renderer.setSize(window.innerWidth, window.innerHeight);
  const geometry = new THREE.BoxGeometry(1, 1, 1)
  const matrial = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
  const cube = new THREE.Mesh(geometry, matrial)
  scene.add(cube)
  orbitControls =  new OrbitControls(camera, renderer.domElement)
  const axesHelper = new THREE.AxesHelper( 5 );
  scene.add( axesHelper )
  
  // 导入素材，然后显示进度条进行样式操作
  // LoadingManager 这个是loadManager是loader加载器的管理器，
  // 那么是如何实现加载器和管理器之间的关联了 
  const manager = new THREE.LoadingManager();
  manager.onStart = function ( url, itemsLoaded, itemsTotal ) {
    console.log(url, itemsLoaded,itemsTotal)
  }
  manager.onLoad = function ( ) {
    console.log( '加载完成')
  }
  manager.onError = function ( url ) {
    console.log('加载失败，失败文件名称'+ url)
  };

  // 这里加载无法将锁喉的数据都加载完成的缘故是什么了
  let  loader = new THREE.TextureLoader(manager)
  const color = loader.load('/textures/door/color.jpg')
  const alpha = loader.load('/textures/door/alpha.jpg')
  const occ = loader.load('/textures/door/ambientOcclusion.jpg')
  const melaness = loader.load('/textures/door/metalness.jpg')
  const roughness = loader.load('/textures/door/roughness.jpg')
  const normal = loader.load('/textures/door/normal.jpg')
})

</script>

<style>
#base {
  width: 100vw;
  height: 100vh;
}
</style>