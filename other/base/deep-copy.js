/**
 * 深拷贝 - 主要还是递归的问题
 * @param {*} element [元素]
 * @param {*} copyElement 【被拷贝元素】
 */


function deepCopy(obj){
  if(obj == null) return obj
  if(obj instanceof Date) return new Date(obj)
  if(obj instanceof RegExp) return new RegExp(obj)
  if(typeof obj != 'object') return obj
  let cloneObj = new obj.constructor();
  for(let key in obj){
    if(obj.hasOwnProperty(key)){
      cloneObj[key] = deepCopy(obj[key])
    }
  }
  return cloneObj
}

// 最方便的方法了这是
function deepCopy1(copyElement){
  let copyStr = JSON.stringify(copyElement)
  return JSON.parse(copyStr)
}

// 基础元素
// 对象元素
// 数组元素
let obj = { a:'a',b:{ b: { c: 'c'}} }
let objCopy = deepCopy(obj)
objCopy.a = 'here is changed'
console.log(obj, objCopy)



