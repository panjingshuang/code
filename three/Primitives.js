import Utils from './utils.js'

const main = Utils.main
// 线状形成的形状
// main(function(){
//   const points = []
//   for(let i=0;i<10;i++){
//     points.push(
//       new THREE.Vector2(Math.sin(i*0.2) * 3 + 3, (i-5)*0.8)
//     )
//   }
//   return new THREE.LatheGeometry(points,20,0,Math.PI * 1.5)
// },20)

// main(function(){
//   // 8面体
//   return new THREE.OctahedronGeometry(7,2)
// },20)

// main(function(){
//   // 8面体
//   return new THREE.OctahedronGeometry(7,2)
// },20)

// 

// main(function(){
//   //板子
//   return new THREE.PlaneGeometry(9,9,10,10)
// },20)

// main(function(){
//   //中间有环的2D圆盘
//   return new THREE.RingGeometry(2,7,10,1,0,Math.PI * 1.4)
// },20)

// main(function(){
//   //中间有环的2D圆盘
//   return new THREE.SphereGeometry(7,12,8)
// },20)

// 文本素材的操作
// main(function(){
//   let options = {
//     size:3,
//     height: 0.2,  // ui: height
//     curveSegments: 12,  // ui: curveSegments
//     bevelEnabled: true,  // ui: bevelEnabled
//     bevelThickness: 0.15,  // ui: bevelThickness
//     bevelSize: 0.3,  // ui: bevelSize
//     bevelSegments: 5,  // ui: bevelSegments
//   }
//   return new THREE.TextGeometry('three.js',options)
// },20)

// main(function(){
//   // 软管素材
//   return new THREE.TorusGeometry(5,2,30,1000,Math.PI * 1.5)
// },20)

// main(function(){
//   // 环形节
//   return new THREE.TorusKnotGeometry(5,1,100,100,8,8)
// },20)

// 线条的问题是
main(function() {
  const box = new THREE.BoxGeometry(8,2,2,2)
  const edges = new THREE.EdgesGeometry(box)
  const material = new THREE.LineBasicMaterial({color: 0xffffff})
  const line = new THREE.LineSegments(edges,material)
  return [line]
},20)