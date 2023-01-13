<template>
  <div id="base"></div>
</template>
<script setup>
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { onMounted } from 'vue'
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 100
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
  // 数据图片加载
  // 全景图设置的方式有两种，一种是放置到场景的背景上
  // scene.background 
  // let loader = new THREE.CubeTextureLoader() // 这里是加载器
  // loader.setPath( '../textures/environmentMaps/4/' )
  // // 依次顺序是left right top bottom front back
	// let texture = loader.load( [
	// 	'quanjing.right.jpg',
	// 	'quanjing.left.jpg',
	// 	'quanjing.top.jpg',
	// 	'quanjing.bottom.jpg',
	// 	'quanjing.front.jpg',
	// 	'quanjing.back.jpg',
	// ])
  // // left 和 
  // scene.background = texture
  let geometry = new THREE.SphereBufferGeometry(100, 60, 40);
  // geometry.scale(1, 1, -1); // 还真是这个的原因 具体是什么原因不清楚
  let texture = new THREE.TextureLoader().load('../textures/environmentMaps/4/quanjing.jpg')
  const material = new THREE.MeshBasicMaterial( { map: texture,side: THREE.DoubleSide } );
  const sphere = new THREE.Mesh( geometry, material );
  scene.add( sphere );
  // const light = new THREE.AmbientLight(0xffffff); // 可以均匀的照亮场景中的所有物体
  // scene.add(light);
  
})

</script>

<style>
#base {
  width: 100vw;
  height: 100vh;
}
</style>