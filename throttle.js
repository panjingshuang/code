// 周期性的的执行 涉及到了对必包的使用
function throttle(delayTime,fn = ()=>{}){
  let time = 0
  return function(){
    let currentTime = new Date()
    if(currentTime - time > delayTime){
      // settimout 主要是为了最后一次进行操作的时候可以触发事件执行
      window.setTimeout(() =>{
        fn()
      },0)
      time = currentTime
    }
  }
}

// 设置输入框
let input = document.createElement('input')
input.type = 'text'
input.width = '200px'
input.height = '100px'
let asyncInput = throttle(1000,()=>{ console.log(input.value)})
input.addEventListener('keyup',asyncInput)
document.body.appendChild(input)
