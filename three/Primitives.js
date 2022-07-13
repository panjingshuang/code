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

main(function(){
  return new THREE.PlaneGeometry(9,9,10,10)
},20)