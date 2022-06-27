// 限制大量并发请求数量, 这个内容还是不太理解
function limitMaxRequest(limitNum,urls,func){
  let executing = []
  let resultList = []
  let lastIndex = 0
  let onlineCount = 0

  // while(lastIndex > urls.length){
  //   let current = urls.splice(lastIndex,lastIndex + limitNum)
  
  //   lastIndex = lastIndex + limitNum
  // }
  // for(item in urls){
    
  //   // let p = Promise.resolve().then(() =>{
  //   //   return func(item)
  //   // })
  //   // resultList.push(p)

  // }
  return Promise.all(resultList)
}

const limitNum = 3
const urls = [10, 20, 30, 40, 50, 60, 60, 70, 80, 1000,]
const func = function(url){
  setTimeout(() =>{
    console.log(url)
  },100)
}
limitMaxRequest(limitNum,urls,func)
