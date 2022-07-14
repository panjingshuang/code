const canvas = document.getElementById('myCanvas')
const scene = new THREE.Scene()
const camra = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight,0.1,1000)
camra.position.z = 20

const renderer = new THREE.WebGLRenderer({canvas})
renderer.setSize(canvas.clientWidth, canvas.clientHeight)

const cylinder = new THREE.CylinderGeometry(4,4,8,16,20,false,0,Math.PI * 1.5)
const matrial = new THREE.MeshBasicMaterial({color: 0x44aa88})
const mesh = new THREE.Mesh(cylinder, matrial)
// const light = new THREE.DirectionalLight(0xffffff,1.5)
// light.position.set(10,10,10)
// scene.add(light)
scene.add(mesh)

function animate(){
  requestAnimationFrame(animate)
  mesh.rotation.x +=0.01
  mesh.rotation.y += 0.01
  renderer.render(scene, camra)
}

animate()