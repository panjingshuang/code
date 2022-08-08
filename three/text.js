import Utils from './utils.js'
import { FontLoader } from './FontLoader.js';
import { TextGeometry } from './TextGeometry.js';
const main = Utils.main

const loader = new FontLoader();

function loadFont(url) {
  return new Promise((resolve, reject) => {
    loader.load(url, resolve, undefined, reject);
  });
}
// 文本字体的使用
main(async () =>{
  const font = await loadFont('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json');  
  const geometry = new TextGeometry('three.js', {
    font: font,
    size: 3.0,
    height: .2,
    curveSegments: 12,
    bevelEnabled: true,
    bevelThickness: 0.15,
    bevelSize: .3,
    bevelSegments: 5,
  });
  return geometry
},20)