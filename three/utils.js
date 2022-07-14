function main(fn=()=>{},z = 20){
  const canvas = document.getElementById('myCanvas')
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0xAAAAAA);
  const camra = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight,0.1,1000)
  camra.position.z = z
  const renderer = new THREE.WebGLRenderer({canvas})
  renderer.setSize(canvas.clientWidth, canvas.clientHeight)

  const cone = fn(scene)
  const matrial = new THREE.MeshPhongMaterial({color: 0x44aa88})
  let mesh =  new THREE.Mesh(cone, matrial)
  scene.add(mesh)

  const light = new THREE.DirectionalLight(0xffffff, 1)
  light.position.set(10,10,10)
  scene.add(light)
  function animate(){
    requestAnimationFrame(animate)
    mesh.rotation.x += 0.01
    mesh.rotation.y += 0.01
    renderer.render(scene,camra)
  }
  animate()
}

export default {
  main
}