
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
let bgCintainer = new Container()
app.stage.addChild(fishContainer);

let fishs = [], fishNum = 4, fishTime = 10
let speed = 1, direction = -1,texturesOverLay = null

loader
  .add('imgs/fish.json')
  .load(setup)

function setup(loader, resources){
  let textures = resources['imgs/fish.json'].textures
  
  let texturesBg = new Sprite(textures['displacement_BG.jpeg'])
  fishContainer.addChild(texturesBg)

  // create fishes
  for(let i = 1 ; i <= fishTime ; i++){
    let index = i % fishNum == 0 ? 1 :   i % fishNum 
    let fish = onCreateFish(textures, index)
    fishContainer.addChild(fish)
    fishs.push(fish)
  }

  // 水波
  
  texturesOverLay = new Sprite(textures['overlay.png'])
  texturesBg.width = texturesOverLay.width = window.innerWidth
  texturesBg.height = texturesOverLay.height = window.innerHeight
  texturesOverLay.scale.y = 50
  texturesOverLay.scale.x = 50

  app.stage.addChild(texturesOverLay)
  let filter = new PIXI.filters.DisplacementFilter(texturesOverLay);
  app.stage.filters = [filter]
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
    fish.x -= fish.vx
    fish.y -= fish.vy
  })
}

play()


function onCreateFish(textures, index){
  let fish = new Sprite(textures[`displacement_fish${ index }.png`])
  fish.rotation =  random(0,360)
  fish.anchor.set(0.5,0.5)
  fish.x = random(0,window.innerWidth)
  fish.y = random(0,window.innerHeight)
  let x = random(1,speed) 
  fish.vx = x *  Math.cos(fish.rotation)
  fish.vy = x * Math.sin(fish.rotation)
  return fish
}

// 发生碰撞
function onCrush(fish){
  // 判断是否发生了碰撞
  // 碰撞之后的处理方式是如何的了？
}
