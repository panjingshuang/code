##### 单页应用程序的优势(相较于多页面程序) 或许并没有优势或则说是更合适的，减少对与服务器的请求了，通过vue-router等路由插件来模拟页面的跳转
#### vue3数据更新了之后Dom并不是立即更新而是等到下一个nextTick周期的时候才会进行统一的DOM更新，但是这个nextTick是什么时候进行更新我并不是十分清楚

#### reactive响应式测试
![reactive响应式测试](./img/reactive%E6%B7%B1%E5%BA%A6%E7%9B%91%E5%90%AC%E7%9A%84%E5%93%8D%E5%BA%94%E5%BC%8F%E6%B5%8B%E8%AF%95.png)


#### reactive的限制中 reactiv根本上没法监听基础类型的原因究竟是什么呢？
![reactive的限制](./img/reactive%E7%9A%84%E9%99%90%E5%88%B6.png)

#### reactive和ref的根本上的区别和原理是什么了？为啥ref就可以直接将基础元素实现响应式嗯？但是为啥要在元素中添加个value，还是说本质上其实是一样的呢？
