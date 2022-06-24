// 主要是promise的一些基本方法的了解和使用
// Promise.all []
// Promise.race
// Promise.allSettled


// 需要完成对于Promise的基础了解和使用
// Promise 保存着某个未来才结束的事件 pending fufilled rejected 进行中 已成功 已失败
// 同一时刻只会存在一个状态，一旦改变就不会回退 pending-fulfilled pending-rejected

// 基础使用

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
  static resolve(value){
    if(value instanceof myPromise) return value
    else if(value instanceof Object && 'then' in value){
      // 这里不太明白
      return new myPromise((resolve,reject) =>{
        value.then(resolve,reject)
      })
    }
    return new myPromise((resolve)=>{
      resolve(value)
    })
  }
  /**
     * myPromise.reject
     * @param {*} reason 表示Promise被拒绝的原因
     * @returns 
     */
   static reject(reason) {
      return new myPromise((resolve, reject) => {
        reject(reason);     
    })
   }  
  /**
   * Promise.all
   * @param {iterable} promises 一个promise的iterable类型（注：Array，Map，Set都属于ES6的iterable类型）的输入
   * @returns 
   */
  // 1. 如何异步获取获取到所有的结果,creat a new isuuic
  static all(promises){
    return new myPromise((resolve,reject)=>{
      if(Array.isArray(promises)){
        let result = []
        let count = 0
          if(promises.length == 0) return resolve(promises)
          promises.forEach((item,index) =>{
            if(item instanceof myPromise){
              myPromise.resolve(item).then(res =>{
                count ++ 
                result[index] = res
                if(count === promises.length ){
                  resolve(result)
                }
              },reson => {
                reject(reson)
              })
            }else{
              count++
              result[index] = item
              if(count === promises.length ) {
                resolve(result)
              }
            }
          })
      }else{
        return reject(new TypeError('Argument is not iterable'))
      }
    })
  }

  static allSettled(promises){
    return new myPromise((resolve,reject)=>{
      if(Array.isArray(promises)){
        let result = []
        let count = 0
          if(promises.length == 0) return resolve(promises)
          promises.forEach((item,index) =>{
            myPromise.resolve(item).then(res =>{
              count ++ 
              result[index] = {
                status: 'fulfilled',
                value: res
              }
              if(count === promises.length ){
                resolve(result)
              }
            },reason => {
              count ++ 
              result[index] = {
                status: 'rejected',
                reason: reason
              }
              if(count === promises.length ){
                resolve(result)
              }
            })
          })
      }else{
        return reject(new TypeError('Argument is not iterable'))
      }
    })
  }

  // 这里确实有为
  static any(promises){
    return new myPromise((resolve,reject)=>{
      let error = []
      let count = 0
        if(promises.length == 0) return reject(new AggregateError('All promises were rejected'))
        promises.forEach((item,index) =>{
          myPromise.resolve(item).then(res =>{
            resolve(res)
          },reason => {
            count ++ 
            error.push(reason)
            if(count === promises.length ){
              reject(error)
            }
          })
        })
    })
  }

  static race(promises){
    return new myPromise((resolve,reject)=>{
      if(Array.isArray(promises)){
        if(promises.length > 0){
          promises.forEach(item => {
            myPromise.resolve(item).then(resolve,reject)
          })
        }
      }else{
        reject(new Error('Argument is not iterable'))
      }
    })
  }

  catch(onRejcted){
    return this.then(undefined,onRejcted)
  }

  finally(callback){
    return this.then(callback,callback)
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


// 第一个问题就是如何获取到函数参数中的方法
// 第二个问题 每个实例有个状态属性 
// 执行过程中遇到错误抛出的时候 需要将状态变成REJCTED
// 现在需要考虑下异步执行的问题
// 然后就是then的链式调用

// 这部分是promiseA+测试
// myPromise.deferred = function(){
//   let result = {}
//   result.promise = new myPromise((resolve,reject) =>{
//     result.resolve = resolve
//     result.reject = reject
//   })
//   return result
// }

module.exports = myPromise