/**
 * 改变对象的this指向
 */
function myCall(obj){
  let name = (Symbol(new Date().getTime()))
  obj[name] = this
  let args = [...arguments].slice(1)
  obj[name](...args)
  delete obj[name]
}

Function.prototype.myCall = myCall


// 原生的
function preCall (){
  console.log(this,this.color)
}
var color = 'orange'
var apple = {
  color: 'red'
}
// preCall()
preCall.myCall(apple)