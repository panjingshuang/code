// 盒子
// 如何在canvas上设置鼠标事件
let myCanvas = document.getElementById('myCanvas')
const scene = new THREE.Scene()
scene.background = new THREE.Color(0xAAAAAA);

const camra = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight, 0.1,100)
camra.position.z = 4
const renderer = new THREE.WebGLRenderer({ canvas: myCanvas})


// 这里box的参数的单位是什么呢? 
const box = new THREE.BoxGeometry(1,1,1,5,5,5)
const martial = new THREE.MeshPhongMaterial({ color : 	0x00ff00 })
const cube = new THREE.Mesh(box,martial)

const light = new THREE.DirectionalLight(0xffffff,1)
light.position.set(10, 10, 10);

const light1 = new THREE.DirectionalLight(0xffffff,1)
light.position.set(-10, -10, -10);

// 控制器的操作
const controls = new THREE.OrbitControls(camra,renderer.domElement)
// controls.enableZoom = false  这个控制器咋没啥用呢
// controls.autoRotate = true


scene.add(light1)
scene.add(light)
scene.add(cube)

// 控制器的操作

function animate(){
  cube.rotation.x += 0.01
  cube.rotation.y += 0.01
  renderer.render(scene, camra)
  renderer.setSize(myCanvas.clientWidth, myCanvas.clientHeight)  //边缘块状化
  requestAnimationFrame(animate)
  // controls.update() // 但是没有任何效果
}

animate()