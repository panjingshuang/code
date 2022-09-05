let index = 0
let prize = 0 // 获奖的索引值
let speed = 500
let timeOut = null
let resultIndex = -1
let times = 50 // 至少旋转多少圈
let domItems = []
let length = document.getElementsByTagName('li').length - 1

let lotteryBtn = document.getElementById('turntable-btn-li')

lotteryBtn.addEventListener('click', onLotteryClick)

function onLotteryClick(){
  onShowAnimate()
  window.setTimeout(()=>{
    resultIndex = 3
  },2000)
}

function onInit(){
  resultIndex = -1
}


for(let i=1; i<=length ;i++){
  let item = document.getElementsByClassName(`lamp-li-${i}-img`)[0]
  domItems.push(item)
}


function onShowAnimate(){
  times --
  if(index > length - 1 ) index = 0
  domItems.forEach(item =>{
    item.classList.remove("on");
  })
  domItems[index].classList.add("on")
  console.log(times,index)
  if(resultIndex > -1 && index === resultIndex && times < 0){
    window.clearTimeout(timeOut)
    resultIndex = -1
  }else{
    index += 1
    if(resultIndex > - 1){
      if(speed > 500){
        speed = 500
      }else{
        speed += 50
      }
    }else{
      if(speed < 200){
        speed = 100
      }else if(speed < 1000) speed -= 50
    }
    timeOut = window.setTimeout(onShowAnimate,speed)
  }
}
// 现在还剩下旋转速度的操作和随机生成一个结果值的情况
