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
  const geometry = new THREE.BoxGeometry(1, 1, 1)
  const matrial = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
  const cube = new THREE.Mesh(geometry, matrial)
  scene.add(cube)
  orbitControls =  new OrbitControls(camera, renderer.domElement)
  const axesHelper = new THREE.AxesHelper( 5 );
  scene.add( axesHelper 
  // 数据图片加载

  // scene.background = new THREE.CubeTextureLoader().setPath( 'textures/cubeMaps/' )
	// .load( [
	// 	'px.png',
	// 	'nx.png',
	// 	'py.png',
	// 	'ny.png',
	// 	'pz.png',
	// 	'nz.png'
	// ] );
  
})

</script>

<style>
#base {
  width: 100vw;
  height: 100vh;
}
</style>