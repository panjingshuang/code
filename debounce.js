
// 防抖 只执行者最后一次 设计到了对必包的使用
function debounce(delayTime,fn = ()=>{}){
  let time = null
  return function(){
    if(time) window.clearTimeout(time)
    time = window.setTimeout(()=>{
      fn()
    },delayTime)
  }
}

let asyncInput = debounce(1000,()=>{ console.log('执行完成数据')})
// 设置输入框
let input = document.createElement('input')
input.type = 'text'
input.width = '200px'
input.height = '100px'
input.addEventListener('keyup',asyncInput)
document.body.appendChild(input)

