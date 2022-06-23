// 主要是promise的一些基本方法的了解和使用
// Promise.all []
// Promise.race
// Promise.allSettled


// 需要完成对于Promise的基础了解和使用
// Promise 保存着某个未来才结束的事件 pending fufilled rejected 进行中 已成功 已失败
// 同一时刻只会存在一个状态，一旦改变就不会回退 pending-fulfilled pending-rejected

// 基础使用

// const promise = new Promise(function(resolve, reject){
//  // ...
//   if(true){ // 异步操作成功
//     resolve(value)
//   }else{
//     reject(value)
//   }
// })

// promise.then((value)=>{
//   console.log(value,'成功')
// },(error)=>{
//   console.log(error,'失败')
// })

// 如何实现一个Promise
// 实现一个Promsie.all
// Promise.rece
// Promise.allSettled

// 周日的时候可以重新梳理下这些代码内容，以及完成简历内容的更新

class myPromise {
  static PENDING = 'pending'
  static FULFILLED = 'fulfilled'
  static REJECTED = 'rejected'
  constructor(fn){
    this.PromiseState = myPromise.PENDING
    this.PromiseResult = null
    this.onFulfilledCallbacks = []
    this.onRejectedCallbacks = []
    try{
      fn(this.resolve.bind(this),this.reject.bind(this))
    }catch(error){
      this.reject(error)
    }
  }
  resolve(result){
    if(this.PromiseState === myPromise.PENDING){
      setTimeout(() =>{
        this.PromiseState = myPromise.FULFILLED
        this.PromiseResult = result
        this.onFulfilledCallbacks.forEach(callback => callback(result))
      })
    }
  }
  reject(reason){
    if(this.PromiseState === myPromise.PENDING){
      setTimeout(() =>{ 
        this.PromiseState = myPromise.REJECTED
        this.PromiseResult =  reason
        this.onRejectedCallbacks.forEach(callback => callback(reason))
      })
    }
  }

  then(onFulfilled,onRejected){
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
    onRejected = typeof onRejected === 'function' ? onRejected : reson => {
      throw reson
    }
    const promise2 = new myPromise((resolve,reject)=>{
      if(this.PromiseState === myPromise.PENDING){
        this.onFulfilledCallbacks.push(()=>{
          try {
            let x = onFulfilled(this.PromiseResult)
            resolvePromise(promise2,x,resolve,reject)
          } catch (error) {
            reject(error)
          }
        })
        this.onRejectedCallbacks.push(()=>{
          try {
            let x = onRejected(this.PromiseResult)
            resolvePromise(promise2,x,resolve,reject)
          } catch (error) {
            reject(error)
          }
        })
      }
      if(this.PromiseState === myPromise.FULFILLED){
        setTimeout(()=>{ 
          try{
            let x = onFulfilled(this.PromiseResult) 
            resolvePromise(promise2,x,resolve,reject)
          }catch(error){
            reject(error)
          }
        })
      }
      if(this.PromiseState === myPromise.REJECTED){
        setTimeout(() =>{ 
          try {
            let x = onRejected(this.PromiseResult)
            resolvePromise(promise2,x,resolve,reject)
          } catch (error) {
            reject(error)
          }
        })
      }
    })
    return promise2
  }
} 

function resolvePromise(promise2, x, resolve, reject){
  if( x ===  promise2) {
    return reject(new TypeError('Chaining cycle detected for promise'))
  }
  if(x instanceof myPromise){
    if(x.PromiseState ===  myPromise.PENDING){
      x.then(y =>{
        resolvePromise(promise2, y, resolve, reject)
      },reject)
    } else if(x.PromiseState ===  myPromise.FULFILLED){
      resolve(x.PromiseResult)
    }else if(x.PromiseState ===  myPromise.REJECTED){
      reject(x.PromiseResult)
    } 
  }else if(x !== null && ((typeof x === 'object' || (typeof x === 'function')))){
    try{
      var then = x.then
    }catch(error){
      return reject(error)
    }

    if(typeof then === 'function'){
      let called = false
      try {
        then.call(
          x,
          y=>{
            if(called) return 
            called = true
            resolvePromise(promise2,y,resolve,reject)
          },
          r =>{
              if( called ) return
              called = true
              reject(r)
            }
          )
      } catch (error) {
        if(called) return 
        called = true
        reject(error)
      }
    }else{
       resolve(x)
    }
  }else {
    return resolve(x)
  }
}
// const promise = new myPromise(function(resolve,reject){
//   resolve('这里是成功')
// })

// promise.then(res =>{
//   console.log(res) 
// })

// const promise = new myPromise(function(resolve,reject){
//   throw new Error('出现问题了呢')
// })
//  在抛出异常的时候产生了一个错误
// promise.then(res =>{
//   console.log(res) 
// },reason =>{
//   console.log(reason)
// })


// console.log(1)
// const promise = new myPromise(function(resolve,reject){
//   console.log(2)
//   setTimeout(() =>{
//     resolve('这里是成功')
//     console.log(4)
//   })
// })

// promise.then(res =>{
//   console.log(res)
// })
// console.log(3)


// const promise = new myPromise(function(resolve,reject){
//   setTimeout(() =>{
//     resolve(1)
//   })
// })

// promise.then(res =>{
//   console.log(1)
//   console.log(res)
// })
// promise.then(res =>{
//   console.log(2)
//   console.log(res)
// })
// promise.then(res =>{
//   console.log(2)
//   return 2 * res
// }).then(res =>{
//   console.log(res)
// })

// 第一个问题就是如何获取到函数参数中的方法
// 第二个问题 每个实例有个状态属性 
// 执行过程中遇到错误抛出的时候 需要将状态变成REJCTED
// 现在需要考虑下异步执行的问题
// 然后就是then的链式调用

myPromise.deferred = function(){
  let result = {}
  result.promise = new myPromise((resolve,reject) =>{
    result.resolve = resolve
    result.reject = reject
  })
  return result
}

module.exports = myPromise




