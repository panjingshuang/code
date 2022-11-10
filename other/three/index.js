
// let myCanvas = document.getElementById('myCanvas')
// const scene = new THREE.Scene()
// // 需要查看下 宽高比会影响到mesh的大小和形状啊咋
// const camera = new THREE.PerspectiveCamera(75,2, 0.1,5)
// camera.position.z = 2
// const renderder = new THREE.WebGLRenderer({canvas:myCanvas})
// renderder.setSize(window.innerWidth, window.innerHeight)
// document.body.appendChild(renderder.domElement)

// const geometry = new THREE.BoxGeometry(1,1,1)
// // const material = new THREE.MeshBasicMaterial({color: 0x00ff00})
// const material = new THREE.MeshPhongMaterial({color: 0x44aa88})
// // const cube = new THREE.Mesh(geometry,material)

// {
//   const lightColor = 0xffffff
//   const intensity = 1
//   const light = new THREE.DirectionalLight(lightColor,intensity)
//   light.position.set(-1,2,4)
//   scene.add(light)
// }


// function makeInstance(geometry, color, x){
//   const material = new THREE.MeshPhongMaterial({color})
//   const cube = new THREE.Mesh(geometry, material)
//   cube.position.x = x
//   scene.add(cube)
//   return cube
// }

// const cubes = [
//   makeInstance(geometry,0x44aa88, 0),
//   makeInstance(geometry,0x8844aa, -2),
//   makeInstance(geometry,0xaa8844, 2),
// ]


// function animate(){
//   requestAnimationFrame( animate)
//   const canvas = renderder.domElement;
//   camera.aspect = canvas.clientWidth / canvas.clientHeight;
//   camera.updateProjectionMatrix();
//   renderder.render(scene, camera)

//   cubes.forEach((cube) =>{
//     cube.rotation.x += 0.01;
//     cube.rotation.y += 0.01;
//   })
// }
// animate()


function main() {
  const canvas = document.querySelector('#myCanvas');
  const renderer = new THREE.WebGLRenderer({canvas});
  const camera = new THREE.PerspectiveCamera(75, 2, 0.1,5)
  camera.position.z = 2

  const scene = new THREE.Scene();
  {
    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    scene.add(light);
  }

  const boxWidth = 1;
  const boxHeight = 1;
  const boxDepth = 1;
  // BoxGeometry 后三个属性是什么意识
  const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

  function makeInstance(geometry, color, x) {
      const material = new THREE.MeshPhongMaterial({color})
      const cube = new THREE.Mesh(geometry, material)
      cube.position.x = x
      scene.add(cube)
      return cube
  }

  const cubes = [
    makeInstance(geometry, 0x44aa88,  0),
    makeInstance(geometry, 0x8844aa, -2),
    makeInstance(geometry, 0xaa8844,  2),
  ];

  function render(time) {
    time *= 0.001;

    const canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();

    cubes.forEach((cube) => {
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
    });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight)  //边缘块状化
    renderer.render(scene, camera);

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

main();