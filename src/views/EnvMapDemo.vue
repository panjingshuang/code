<template>
  <div id="base"></div>
</template>
<script setup>
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { onMounted } from 'vue'
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
  // 控制器
  orbitControls =  new OrbitControls(camera, renderer.domElement)
  // const axesHelper = ne
  // 数据图片加载
  // 全景图设置的方式有两种，一种是放置到场景的背景上
  // scene.background 
  let loader = new THREE.CubeTextureLoader() // 这里是加载器
  loader.setPath( '../textures/environmentMaps/4/' )
  // 依次顺序是left right top bottom front back
	let texture = loader.load( [
		'quanjing.right.jpg',
		'quanjing.left.jpg',
		'quanjing.top.jpg',
		'quanjing.bottom.jpg',
		'quanjing.front.jpg',
		'quanjing.back.jpg',
	])
  // left 和 
  scene.background = texture
  
})

</script>

<style>
#base {
  width: 100vw;
  height: 100vh;
}
</style>