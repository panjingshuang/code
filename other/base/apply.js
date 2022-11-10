function myCall(obj){
  let name = Symbol(new Date().getTime())
  obj[name] = this
  let args = arguments[1] || []
  obj[name](...args)
  delete obj[name]
}