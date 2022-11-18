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
let orbitControls = null
const GEONUM = 20
const onAnimate = () => {
  requestAnimationFrame(onAnimate)
  renderer.render(scene, camera)
  if (orbitControls) {
    orbitControls.update()
  }
}
onAnimate()

onMounted(() => {
  let baseDom = document.getElementById('base')
  baseDom.appendChild(renderer.domElement);
  renderer.setSize(window.innerWidth, window.innerHeight);
  orbitControls = new OrbitControls(camera, renderer.domElement)
  const axesHelper = new THREE.AxesHelper(5);
  scene.add(axesHelper)
  // 随机生成三角形面来显示不同颜色和不同
  for (let i = 1; i <= GEONUM; i++) {
    let geometry = new THREE.BufferGeometry()
    let positionArray = new Float32Array(9);
    for (let j = 0; j < 9; j++) {
      positionArray[j] = Math.random() * 3
    }
    geometry.setAttribute('position', new THREE.BufferAttribute(positionArray, 3))
    let color = new THREE.Color(Math.random(), Math.random(), Math.random())
    let material = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.6 })
    let mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)
  }

  // geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3))
  // const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
  // const mesh = new THREE.Mesh(geometry, material)
  // scene.add(mesh)
})

</script>

<style>
#base {
  width: 100vw;
  height: 100vh;
}
</style>