const myPromise = require('./my-promise')
// const promise = new myPromise(function(resolve,reject){
//   resolve('这里是成功')
// })

// promise.then(res =>{
//   console.log(res) 
// })


// const promise = new myPromise(function(resolve,reject){
//   resolve('这里是成功')
// })

// promise.then(res =>{
//   console.log(res) 
// })

// const promise = new myPromise(function(resolve,reject){
//   throw new Error('出现问题了呢')
// })
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
//   console.log(res,'执行')
// })


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

// const promise1 = new myPromise(function(resolve,reject){
//   resolve('这里是成功')
// })

// promise.then(res =>{
//   console.log(res) 
// })
// 基础元素 object 3 [2,4,5,5]
// null
// let demo = 2
// const staticResolve = myPromise.resolve(demo)
// staticResolve.then(res =>{
//   console.log(res)
//   return 3
// }).then(res =>{
//   console.log(res,'第二个')
// })

