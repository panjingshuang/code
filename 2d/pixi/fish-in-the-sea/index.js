
let Application = PIXI.Application,
Sprite = PIXI.Sprite,
Container = PIXI.Container

let app = new Application({
  width: document.body.clientWidth,
  height:  document.body.clientHeight,
  antialias: true,    // default: false
  transparent: false, // default: false
  resolution: 1       // default: 1
});

app.renderer.backgroundColor = 0xfffff;
document.body.appendChild(app.view)

let loader = app.loader
// 这里放置鱼的数据组
let fishContainer = new Container()
app.stage.addChild(fishContainer);

let fishs = [], fishNum = 4, fishTime = 10
let speed = 3, direction = -1

loader
  .add('imgs/fish.json')
  .load(setup)

function setup(loader, resources){
  let textures = resources['imgs/fish.json'].textures
  
  let texturesBg = new Sprite(textures['displacement_BG.jpeg'])
  fishContainer.addChild(texturesBg)

  // 鱼鱼
  for(let i = 1 ; i <= fishTime ; i++){
    let index = i % fishNum == 0 ? 1 :   i % fishNum 
    let fish = new Sprite(textures[`displacement_fish${ index }.png`])
    // 随便设置鱼的位置，并且将
    fish.x = random(0,window.innerWidth)
    fish.y = random(0,window.innerHeight)
    fish.anchor.set(0,0.5)
    // 这里可以修改坐标系的操作
    fish.vx = random(1,speed) 
    fish.vy = random(1,speed)
    fish.vRotation =  180 - Math.atan(fish.vy / fish.vx)

    fishContainer.addChild(fish)
    fishs.push(fish)
  }

  // 水波
  let texturesOverLay = new Sprite(textures['overlay.png'])
  texturesBg.width = texturesOverLay.width = window.innerWidth
  texturesBg.height = texturesOverLay.height = window.innerHeight
  fishContainer.addChild(texturesOverLay)
}

// 随机生成整数
function random(n, m){
	var c = m-n+1;  
  return Math.floor(Math.random() * c + n);
}
function randomStr(arr){
  let index = random(0,arr.length)
  return arr[index]
}

function play(){
  window.requestAnimationFrame(play)
  fishs.forEach(fish => {
    // 这里是fish的情况
    fish.x += fish.vx
    fish.y += fish.vy
  })
}

play()

