const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth,window.innerHeight)
document.body.appendChild(renderer.domElement)

// 这个相机的位置是需要继续查看下的
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500)
camera.position.set(0,0,100)
camera.lookAt(0,0,0)

const scene = new THREE.Scene()

const matrail = new THREE.LineBasicMaterial({ color : 0xffffff})
const points = []

// 坐标是数字坐标 不是 浏览器上的坐标啊 直接转换了
points.push(new THREE.Vector3(-10,0,0))
points.push(new THREE.Vector3(0,10,0))
points.push(new THREE.Vector3(10,0,0))

const geometry = new THREE.BufferGeometry().setFromPoints(points)
const line = new THREE.Line(geometry,matrail)

scene.add(line)
renderer.render(scene, camera)
