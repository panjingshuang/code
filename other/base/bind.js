function myBind(obj){
  let fn = this
  return function(...newsArray){
    return fn.apply(obj,newsArray)
  }
}