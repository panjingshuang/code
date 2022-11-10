import Utils from './utils.js'

const main = Utils.main
main(function(){
  // 20面体
  return new THREE.IcosahedronGeometry(20,100)
},50)