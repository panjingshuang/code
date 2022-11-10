const canvas = document.getElementById('myCanvas')
const scene = new THREE.Scene()
const camra = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight, 0.1,100)
camra.position.z = 20
const renderer = new THREE.WebGLRenderer({canvas})

// 这个应该是平面的多边形的设置
// 起始-结束长度
const circle = new THREE.CircleGeometry(5,100,0,Math.PI * 1.5)
const matrial = new THREE.MeshPhongMaterial({color: 0x9400D3	})
const mesh = new THREE.Mesh(circle, matrial)

const light = new THREE.DirectionalLight(0xfffff, 1)
light.position.set(10, 10, 10);

scene.add(light)
scene.add(mesh)

function animate(){
  requestAnimationFrame(animate)
  // 旋转角度有问题需要了解
 // mesh.rotation.x += 0.01
  // console.log(mesh)
  renderer.setSize(canvas.clientWidth,canvas.clientHeight)
  renderer.render(scene,camra)
}
animate()

