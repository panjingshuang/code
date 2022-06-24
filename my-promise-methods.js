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


// 对all方法的判断-SUCCESS
// const promise1 = myPromise.resolve(3);
// const promise2 = 42;
// const promise3 = new myPromise((resolve, reject) => {
//     setTimeout(resolve, 100, 'foo');
// });

// var p1 = new myPromise((resolve, reject) => {
//   setTimeout(resolve, 1000, 'one');
// });
// var p2 = new myPromise((resolve, reject) => {
//   setTimeout(resolve, 2000, 'two');
// });
// var p3 = new myPromise((resolve, reject) => {
//   setTimeout(resolve, 3000, 'three');
// });
// var p4 = new myPromise((resolve, reject) => {
//   setTimeout(resolve, 4000, 'four');
// });
// var p5 = new myPromise((resolve, reject) => {
//   reject('reject');
// });

// myPromise.all([p1,p2,p3,p4,p5]).then(value =>{
//   console.log(value)
// }).catch(reason =>{
//   console.log(reason)
// })


// allSettled测试
// const promise1 = myPromise.resolve(3);
// const promise2 = 1;
// const promises = [promise1, promise2];
// myPromise.allSettled(promises).then((results) =>{
//   console.log(results)
// });

// any 测试
const pErr = new myPromise((resolve, reject) => {
  reject("总是失败");
});

const pSlow = new myPromise((resolve, reject) => {
  setTimeout(resolve, 500, "最终完成");
});

const pFast = new myPromise((resolve, reject) => {
  setTimeout(resolve, 100, "很快完成");
});

myPromise.any([pErr, pSlow, pFast]).then((value) => {
  console.log(value);
},reason =>{
  console.log(reason)
})


