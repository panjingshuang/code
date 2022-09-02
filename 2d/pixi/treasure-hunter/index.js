
let Application = PIXI.Application,
Sprite = PIXI.Sprite,
Container = PIXI.Container
const  COLLISION = {
  TOP: 'TOP',
  BOTTOM: 'BOTTOM',
  RIGHT: 'RIGHT',
  LEFT: 'LEFT'
}

const KEYCODE = {
  TOP: 38,
  BOTTOM: 40,
  RIGHT: 39,
  LEFT: 37
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
let gameOverContainer = new Container() // gameOverContainer
app.stage.addChild(gameOverContainer)

let isStart = true

let blobs = [],
blobsNum = 3,
spacing = 60
xOffset = 100,
speed = 1,
direcion = 1
let door,dungeon,explorer,treasure

const setup = (loader, resources)  =>{
  let textures = resources['imgs/treasureExp.json'].textures 
 
  door = new Sprite(textures['door.png']) 
  dungeon = new Sprite(textures['dungeon.png'])
  explorer = new Sprite(textures['explorer.png'])
  treasure = new Sprite(textures['treasure.png'])
  baseContainer.addChild(dungeon)
  baseContainer.addChild(door)
  baseContainer.addChild(treasure)
  baseContainer.addChild(explorer)

  door.position.set(32,0)
  explorer.x = 38
  explorer.y = 40
  explorer.vx = 3;
  explorer.vy = 3;
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
  onGameOver()
  // // 绘制边界图形
  // let rect = new PIXI.Graphics()
  // rect.lineStyle(5, 0xFF0000)
  // rect.drawRect(28,11,450,470)
  // baseContainer.addChild(rect)
}

loader
.add('imgs/treasureExp.json')
.load(setup)

// 执行动画
function play(){
  requestAnimationFrame(play)
  if(isStart){
    onBlobRun()
  }
}
play()


function onBlobRun(){
  blobs.forEach(blob =>{
    blob.y += blob.vy
    let contain = onContain(blob,{x: 28, y: 11, width: 450, height: 470})
    if(contain.collision == COLLISION.TOP || contain.collision == COLLISION.BOTTOM){
      blob.vy *= -1
    }
    if(onCollision(blob,explorer)){
      isStart = false
      onGameMsg('Game Over!')
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
  window.addEventListener('keydown',onkeyDown)
}

function onkeyDown(e){
  if(e.keyCode == KEYCODE.LEFT) {
    explorer.x -= explorer.vx
  }else if(e.keyCode == KEYCODE.RIGHT){
    explorer.x += explorer.vx
  }else if(e.keyCode == KEYCODE.TOP){
    explorer.y -= explorer.vy
  }else if(e.keyCode == KEYCODE.BOTTOM){
    explorer.y += explorer.vy
  }
  let contain = onContain(explorer, {x: 28, y: 11, width: 450, height: 470})
  if(contain.collision){
    switch(contain.collision){
      case COLLISION.TOP:
        explorer.y = 11
        break
      case COLLISION.BOTTOM:
        explorer.y = 481 - explorer.height
        break
      case COLLISION.LEFT:
        explorer.x = 28
        break
      case COLLISION.RIGHT:
        explorer.x = 478 - explorer.width
        break
    }
  }
  if(onCollision(explorer, treasure)){
    isStart = false
    onGameMsg('You Win the Game!')
  }
}

// 主要是判断是否小怪物和猎人是否出现了碰撞了
function onCollision(blob, explorer){
  let blobPoint = {}
  let explorerPoint = {}

  // 转换到坐标中点上去
  blobPoint.x = blob.x + blob.width / 2
  blobPoint.y = blob.y + blob.height / 2
  
  explorerPoint.x = explorer.x + explorer.width / 2 
  explorerPoint.y = explorer.y + explorer.height / 2

  // 宽度间的碰撞
  let widthX = blob.width / 2 + explorer.width / 2
  let heightY = explorer.height / 2 + blob.height / 2

  let currentWidth = Math.abs(blobPoint.x - explorer.x)
  let currentHeight = Math.abs(blobPoint.y - explorer.y)

  if(currentWidth < widthX &&  currentHeight < heightY){
    return true
  } 
  return false
}

function onGameMsg(text = 'Game Over!'){
  let gamerOverBg = new PIXI.Graphics()
  gamerOverBg.beginFill(0x000000,0.5)
  gamerOverBg.drawRect(0,0,app.stage.width,app.stage.height)
  gamerOverBg.endFill()
  gameOverContainer.addChild(gamerOverBg)
  let gameOverText =  new PIXI.Text(text,{
    fontFamily : 'Arial',
    fontSize: 44, 
    fill : 0xffffff, 
    align : 'center'
  });
  gameOverText.x = app.stage.width / 2  - gameOverText.width / 2
  gameOverText.y = app.stage.height / 2  - gameOverText.height 
  gameOverContainer.addChild(gameOverText)

  window.removeEventListener('keydown', onkeyDown)
}