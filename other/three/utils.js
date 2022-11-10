// import * as THREE from 'three';
function main(fn=()=>{},z = 20){
  const canvas = document.getElementById('myCanvas')
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0xAAAAAA);
  const camra = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight,0.1,1000)
  camra.position.z = z
  const renderer = new THREE.WebGLRenderer({canvas})
  renderer.setSize(canvas.clientWidth, canvas.clientHeight)

  const cone = fn(scene)
  let mesh
  if(Array.isArray(cone)){ // 如果是数组的话，就将mesh返回就好了
    mesh = cone[0]
    scene.add(mesh)
  }else{ // 是对象还是返回的是geometry元素好了
    const matrial = new THREE.MeshPhongMaterial({
      color: 0x44aa88,
      side: THREE.DoubleSide // 对于二位图形，没有该属性看到元素反面的时候会消失
    })
    if(cone instanceof Promise){
      cone.then(res =>{
        mesh =  new THREE.Mesh(res, matrial)
        scene.add(mesh)
      })
    }else{
      mesh =  new THREE.Mesh(cone, matrial)
      scene.add(mesh)
    }
  }
  const light = new THREE.DirectionalLight(0xffffff, 1)
  light.position.set(10,10,10)
  scene.add(light)
  function animate(){
    requestAnimationFrame(animate)
    if(mesh){
      mesh.rotation.x += 0.001
      mesh.rotation.y += 0.001
    }
    renderer.render(scene,camra)
  }
  animate()
}

export default {
  main
}