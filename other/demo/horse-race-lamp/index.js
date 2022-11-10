let index = 0
let prize = 0 // 获奖的索引值
let speed = 120
let timeOut = null
let resultIndex = -1
let times = 0 // 旋转了多少圈
let baseTimes = random(80,120)// 至少转动
let isClick = false

let domItems = []
let length = document.getElementsByTagName('li').length - 1
for(let i=1; i<=length ;i++){
  let item = document.getElementsByClassName(`lamp-li-${i}-img`)[0]
  domItems.push(item)
}


let lotteryBtn = document.getElementById('turntable-btn-li')
lotteryBtn.addEventListener('click', onLotteryClick)

function onLotteryClick(){
  if(isClick) return
  isClick = true
  onShowAnimate()
  window.setTimeout(()=>{
    resultIndex = random(0, 7) // 随机生成
  },2000)
}
  
function onShowAnimate(){
  times ++
  if(index > length - 1 ) index = 0
  domItems.forEach(item =>{
    item.classList.remove("on");
  })
  domItems[index].classList.add("on")
  if(resultIndex > -1 && index === resultIndex && times > baseTimes+8 ){
    window.clearTimeout(timeOut)
    resultIndex = -1
    isClick = false
  }else{
    index += 1
    if( times < baseTimes ){
      speed -= 5
    }else{
      speed += 25
    }
    if(speed < 20) speed = 20
    timeOut = window.setTimeout(onShowAnimate,speed)
  }
}
// 随机生成整数
function random(n, m){
	var c = m-n+1;  
  return Math.floor(Math.random() * c + n);
}
