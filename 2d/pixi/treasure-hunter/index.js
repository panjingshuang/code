
let Application = PIXI.Application,
Sprite = PIXI.Sprite,
Container = PIXI.Container

const  COLLISION = {
  TOP: 'TOP',
  BOTTOM: 'BOTTOM',
  RIGHT: 'RIGHT',
  LEFT: 'LEFT'
}

let app = new Application({
  width: 512,
  height: 512,
  antialias: true,    // default: false
  transparent: false, // default: false
  resolution: 1       // default: 1
});
app.renderer.backgroundColor = 0xfffff;
document.body.appendChild(app.view)

let loader = app.loader
let baseContainer = new Container()
app.stage.addChild(baseContainer);

let blobs = [],
blobsNum = 3,
spacing = 60
xOffset = 100,
speed = 1,
direcion = 1

const setup = (loader, resources)  =>{
  let textures = resources['imgs/treasureExp.json'].textures 
 
  const door = new Sprite(textures['door.png']) 
  const dungeon = new Sprite(textures['dungeon.png'])
  const explorer = new Sprite(textures['explorer.png'])
  const treasure = new Sprite(textures['treasure.png'])
  baseContainer.addChild(dungeon)
  baseContainer.addChild(door)
  baseContainer.addChild(treasure)
  baseContainer.addChild(explorer)

  door.position.set(32,0)
  explorer.x = 68
  explorer.y = baseContainer.height / 2 - explorer.height / 2
  explorer.vx = 0;
  explorer.vy = 0;
  treasure.x = baseContainer.width - treasure.width - 48
  treasure.y = baseContainer.height / 2 - treasure.height / 2

  // 制作泡泡怪们
  for(let i = 1; i <= blobsNum ;i ++){
    let blob = new Sprite(textures['blob.png']); // 小怪物
    blob.x = spacing * i + xOffset
    blob.y = baseContainer.height / 2 - blob.height / 2 - 48
    direcion = speed * direcion
    direcion *= -1
    blob.vy = direcion
    blobs.push(blob)
    baseContainer.addChild(blob)
  }
  // 绘制边界图形
  let rect = new PIXI.Graphics()
  rect.lineStyle(5, 0xFF0000)
  rect.drawRect(28,11,450,470)
  baseContainer.addChild(rect)
}

loader
.add('imgs/treasureExp.json')
.load(setup)

// 执行动画
function play(){
  requestAnimationFrame(play)
  onBlobRun()
}
play()


function onBlobRun(){
  blobs.forEach(blob =>{
    blob.y += blob.vy
    let contain = onContain(blob,{x: 28, y: 11, width: 450, height: 470})
    if(contain.collision == COLLISION.TOP || contain.collision == COLLISION.BOTTOM){
      blob.vy *= -1
    }
  })
}


// 超出边界的范围如何处理
function onContain(sprite, container){
  let collision = undefined
  if(sprite.x < container.x) {
    collision = COLLISION.LEFT
  }
  if(sprite.y < container.y){
    collision = COLLISION.TOP
  }
  if(sprite.x > (container.x + container.width - sprite.width)){
    collision =  COLLISION.RIGHT
  }
  if(sprite.y > (container.y + container.height - sprite.height)){
    collision =  COLLISION.BOTTOM
  }
  return {collision}
}
keyBroand()
// 移动操作-鼠标和键盘事件
function keyBroand(){
  // 对键盘进行监听
  window.addEventListener('keydown',(e) =>{
    // 判断对象的位置
  })
}