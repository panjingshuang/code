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
// scene.background = new THREE.Color(0xAAAAAA);
let orbitControls = null
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
  // 给元素上添加贴图以及对于不规则的元素如何进行操作变换了

  const geometry = new THREE.BoxGeometry(1, 1, 1,1000,1000,1000)
  let doorMain = new THREE.TextureLoader().load('/textures/door/color.jpg')
  let alphaDoor = new THREE.TextureLoader().load('/textures/door/alpha.jpg')
  let envDoor = new THREE.TextureLoader().load('/textures/door/ambientOcclusion.jpg')
  let metalness = new THREE.TextureLoader().load('/textures/door/metalness.jpg')
  let roughness = new THREE.TextureLoader().load('/textures/door/roughness.jpg')
  let normal = new THREE.TextureLoader().load('/textures/door/normal.jpg')
  // let heightDoor = new THREE.TextureLoader().load('/textures/door/height.jpg') 
  // texture.wrapS = THREE.RepeatWrapping; // 横向重复
  // texture.wrapT = THREE.RepeatWrapping; // 纵向重复
  // texture.repeat.set( 2, 3 );
  // 但是如果是想将图片贴到单面或是说 一个不规则的位置呢？
  // MeshBasicMaterial 不会受到光照影响的材质 ，MeshStandardMaterial 会受到关照影响的基于物理的标准材质
  const matrial = new THREE.MeshStandardMaterial({
    map: doorMain,
    alphaMap: alphaDoor, // 透明度相乘估计是
    transparent: true,
    side: THREE.DoubleSide, // 渲染单面还是双面
    aoMap: envDoor, // 环境贴图 但是没有看出任何的差别
    roughnessMap:roughness,
    roughness:1,
    metalnessMap: metalness,
    metalness:1,
    normalMap:normal // 注入之后门会反光会有凹凸变换很真实了
    // displacementMap: heightDoor, // 这个好像对性能的消耗非常的大，导入之后就会很卡
    // displacementScale: 0.05
  })

  const cube = new THREE.Mesh(geometry, matrial)
  scene.add(cube)
  geometry.setAttribute("uv2", new THREE.BufferAttribute(geometry.attributes.uv.array, 2))
  // 材质受到光照的影响
  // 灯光
  const light = new THREE.AmbientLight(0xffffff); // 可以均匀的照亮场景中的所有物体
  scene.add(light);
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(2, 2, 2)
  scene.add(directionalLight);
})

</script>

<style>
#base {
  width: 100vw;
  height: 100vh;
}
</style>