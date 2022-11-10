<template>
  <div id="base"></div>
</template>
<script setup>
import * as THREE from 'three';
import { onMounted } from 'vue';
const scence = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
onMounted(() =>{
  let baseDom = document.getElementById('base')
  baseDom.appendChild( renderer.domElement );
  renderer.setSize( 300, 400 );
})
</script>

<style>
#base{
  width: 100vw;
  height: 100vh;
}
</style>