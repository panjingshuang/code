
let Application = PIXI.Application,
  Sprite = PIXI.Sprite,
  Container = PIXI.Container

const COLLISION = {
  TOP: 'TOP',
  BOTTOM: 'BOTTOM',
  RIGHT: 'RIGHT',
  LEFT: 'LEFT'
}
//keyCode
const KEYCODE = {
  TOP: 38,
  BOTTOM: 40,
  RIGHT: 39,
  LEFT: 37
}
// 围墙范围
const RANGE = {
  WIDTH: 450,
  HEIGHT: 470,
  X: 28,
  Y: 11
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
let door, dungeon, explorer, treasure
let gamerOverBg, gameOverText, reBackText // 结果数据


loader
  .add('imgs/treasureExp.json')
  .load(setup)

// 执行动画
function play() {
  requestAnimationFrame(play)
  if (isStart) {
    onBlobRun()
  }
}
play()

function setup(loader, resources) {
  let textures = resources['imgs/treasureExp.json'].textures

  door = new Sprite(textures['door.png'])
  dungeon = new Sprite(textures['dungeon.png'])
  explorer = new Sprite(textures['explorer.png'])
  treasure = new Sprite(textures['treasure.png'])
  baseContainer.addChild(dungeon)
  baseContainer.addChild(door)
  baseContainer.addChild(treasure)
  baseContainer.addChild(explorer)

  door.position.set(32, 0)
  explorer.x = 38
  explorer.y = 40
  explorer.vx = 3;
  explorer.vy = 3;
  treasure.x = baseContainer.width - treasure.width - 48
  treasure.y = baseContainer.height / 2 - treasure.height / 2

  // 制作泡泡怪们
  for (let i = 1; i <= blobsNum; i++) {
    let blob = new Sprite(textures['blob.png']); // 小怪物
    blob.x = spacing * i + xOffset
    blob.y = baseContainer.height / 2 - blob.height / 2 - 48
    direcion = speed * direcion
    direcion *= -1
    blob.vy = direcion
    blobs.push(blob)
    baseContainer.addChild(blob)
  }
  onGameData() // 结果数据渲染
  onInit() // 初始化数据
  gameOverContainer.visible = false
  window.addEventListener('keydown', onkeyDown)
}

function onInit() { // 初始化数据
  isStart = true
  gameOverContainer.visible = false
  explorer.position.set(38, 40)
}

// 移动和变换小怪为的动作
function onBlobRun() {
  blobs.forEach(blob => {
    blob.y += blob.vy
    let contain = onContain(blob, { x: RANGE.X, y: RANGE.Y, width: RANGE.WIDTH, height: RANGE.HEIGHT })
    if (contain.collision == COLLISION.TOP || contain.collision == COLLISION.BOTTOM) {
      blob.vy *= -1
    }
    if (onCollision(blob, explorer)) {
      isStart = false
      gameOverContainer.visible = true
      onGameData('Game Over!')
    }
  })
}

// 超出边界的范围如何处理
function onContain(sprite, container) {
  let collision = undefined
  if (sprite.x < container.x) {
    collision = COLLISION.LEFT
  }
  if (sprite.y < container.y) {
    collision = COLLISION.TOP
  }
  if (sprite.x > (container.x + container.width - sprite.width)) {
    collision = COLLISION.RIGHT
  }
  if (sprite.y > (container.y + container.height - sprite.height)) {
    collision = COLLISION.BOTTOM
  }
  return { collision }
}

// 键盘事件
function onkeyDown(e) {
  if (!isStart) return
  if (e.keyCode == KEYCODE.LEFT) {
    explorer.x -= explorer.vx
  } else if (e.keyCode == KEYCODE.RIGHT) {
    explorer.x += explorer.vx
  } else if (e.keyCode == KEYCODE.TOP) {
    explorer.y -= explorer.vy
  } else if (e.keyCode == KEYCODE.BOTTOM) {
    explorer.y += explorer.vy
  }
  let contain = onContain(explorer, { x: RANGE.X, y: RANGE.Y, width: RANGE.WIDTH, height: RANGE.HEIGHT })
  if (contain.collision) {
    switch (contain.collision) {
      case COLLISION.TOP:
        explorer.y = RANGE.Y
        break
      case COLLISION.BOTTOM:
        explorer.y = RANGE.HEIGHT + RANGE.Y - explorer.height
        break
      case COLLISION.LEFT:
        explorer.x = RANGE.X
        break
      case COLLISION.RIGHT:
        explorer.x = RANGE.WIDTH + RANGE.X - explorer.width
        break
    }
  }
  if (onCollision(explorer, treasure)) {
    isStart = false
    gameOverContainer.visible = true
    onGameData('You Win the Game')
  }
}
// 判断对象是否发生了碰撞
function onCollision(blob, explorer) {
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

  if (currentWidth < widthX && currentHeight < heightY) {
    return true
  }
  return false
}

// 结果界面的渲染
function onGameData(text = 'Game Over!') {

  if (!gamerOverBg) {
    gamerOverBg = new PIXI.Graphics()
    gamerOverBg.beginFill(0x000000, 0.5)
    gamerOverBg.drawRect(0, 0, app.stage.width, app.stage.height)
    gamerOverBg.endFill()
    gameOverContainer.addChild(gamerOverBg)
  }

  if (!gameOverText) {
    gameOverText = new PIXI.Text(text, {
      fontFamily: 'Arial',
      fontSize: 44,
      fill: 0xffffff,
      align: 'center'
    });
    gameOverContainer.addChild(gameOverText)
  }
  if (!reBackText) {
    reBackText = new PIXI.Text('rePlay', {
      fontFamily: 'Arial',
      fontSize: 20,
      fill: 0xffffff,
      align: 'center',
    });
    gameOverContainer.addChild(reBackText)
    reBackText.x = onPositionCenter(app.stage, reBackText).x
    reBackText.y = onPositionCenter(app.stage, reBackText).y + 50
    reBackText.interactive = true
    reBackText.on('click',onReplayFun)  
  }

  gameOverText.text = text
  gameOverText.x = onPositionCenter(app.stage, gameOverText).x 
  gameOverText.y = onPositionCenter(app.stage, gameOverText).y - 50
}


function onPositionCenter(stage, elem) {
  return {
    x: stage.width / 2 - elem.width / 2,
    y: stage.height / 2 - elem.height
  }
}

function onReplayFun(e){
  onInit()
}


