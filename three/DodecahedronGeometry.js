const canvas = document.getElementById('myCanvas')
const scene = new THREE.Scene()
const camra = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1,100)
camra.position.z = 30
const renderer = new THREE.WebGLRenderer({canvas})


const geometry = new THREE.DodecahedronGeometry(10)
const matrail = new THREE.MeshPhongMaterial({color: 0x44aa88})
const mesh = new THREE.Mesh(geometry, matrail)

const light = new THREE.DirectionalLight(0xffffff,1.2)
light.position.set(10,10,10)

scene.add(light)
scene.add(mesh)

function animate(){
  requestAnimationFrame(animate)
  mesh.rotation.x +=0.01
  mesh.rotation.y += 0.01
  renderer.render(scene, camra)
}
animate()