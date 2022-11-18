<template>
  <div id="base"></div>
</template>
<script setup>
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { onMounted, render } from 'vue'
import { gsap } from 'gsap'
import * as dat from 'dat.gui'
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
  orbitControls =  new OrbitControls(camera, renderer.domElement)
  const axesHelper = new THREE.AxesHelper( 5 );
  scene.add( axesHelper )
  // 给元素上添加贴图以及对于不规则的元素如何进行操作变换了
  
  const geometry = new THREE.BoxGeometry(1, 1, 1)
  let texture = new THREE.TextureLoader().load('/texture/file.jpeg')
  // texture.wrapS = THREE.RepeatWrapping; // 横向重复
  // texture.wrapT = THREE.RepeatWrapping; // 纵向重复
  // texture.repeat.set( 2, 3 );
  // 但是如果是想将图片贴到单面或是说 一个不规则的位置呢？
  const matrial = new THREE.MeshBasicMaterial({ map: texture })
  
  const cube = new THREE.Mesh(geometry, matrial)
  scene.add(cube)
  // 贴图的基本操作
})

</script>

<style>
#base {
  width: 100vw;
  height: 100vh;
}
</style>