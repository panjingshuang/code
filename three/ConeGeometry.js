const canvas = document.getElementById('myCanvas')
const scene = new THREE.Scene()
const camra = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,0.1,100)
camra.position.z = 20
const renderer = new THREE.WebGLRenderer({canvas})



const cone = new THREE.ConeGeometry(6,8,10,1000,false,0,Math.PI * 1.45)
const matrial = new THREE.MeshPhongMaterial({color: 0x44aa88})
const mesh = new THREE.Mesh(cone, matrial)

const light = new THREE.DirectionalLight(0xffffff, 1)
light.position.set(0,0,10)
scene.add(light)
scene.add(mesh)

function animate(){
  requestAnimationFrame(animate)
  // mesh.rotation.x += 0.01
  mesh.rotation.x += 0.01
  // mesh.rotation.z
  renderer.setSize(canvas.clientWidth, canvas.clientHeight)
  renderer.render(scene, camra)
}

animate()

