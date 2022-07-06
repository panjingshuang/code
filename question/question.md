##### 单页应用程序的优势(相较于多页面程序) 或许并没有优势或则说是更合适的，减少对与服务器的请求了，通过vue-router等路由插件来模拟页面的跳转
#### vue3数据更新了之后Dom并不是立即更新而是等到下一个nextTick周期的时候才会进行统一的DOM更新，但是这个nextTick是什么时候进行更新我并不是十分清楚
#### reactive响应式测试
![reactive响应式测试](./img/reactive%E6%B7%B1%E5%BA%A6%E7%9B%91%E5%90%AC%E7%9A%84%E5%93%8D%E5%BA%94%E5%BC%8F%E6%B5%8B%E8%AF%95.png)
**最主要的是想知道reactive和ref之前的区别**
#### reactive的限制中 reactiv根本上没法监听基础类型的原因究竟是什么呢？
![reactive的限制](./img/reactive%E7%9A%84%E9%99%90%E5%88%B6.png)

#### reactive和ref的根本上的区别和原理是什么了？为啥ref就可以直接将基础元素实现响应式嗯？但是为啥要在元素中添加个value，还是说本质上其实是一样的呢？

<!-- #### what's happend when nactive element binding click event?
![native click](./img/native_element_bind_click_what_happend_on_child.png)
> the child component will be binding native event and self event (this sort is slef to native) -->

<!-- ### how to through attrs on nested component?
![native click](./img/nest_component_inheritance_how_to_through_attr.png)
>确实是会传递给孙子组件 -->


<!-- #### hot to make attrs reactive? 父组件中的reactive对象中的数据如何在子组件中修改了？
![attrs reactive](./img/attrs_reactive.png)
> 在子组件中可以直接使用父组件传来的reactive数据 并且在父组件中也是可以实现响应式的 。 -->

<!-- ![表单元素的动态属性绑定](./img/%E8%A1%A8%E5%8D%95%E5%85%83%E7%B4%A0%E7%9A%84%E5%8A%A8%E6%80%81%E5%B1%9E%E6%80%A7%E7%9A%84%E7%BB%91%E5%AE%9A.png)
意识是多选只有没有被选择的时候可以使用false-value来设置，没有选的时候也是有值的  正确的意识是只有这个checkbox作为单选的时候，只有一个的才会实现yes no的切换，v-model中绑定的数据是个普通数据不是数组的时候-->

<!-- ![lazy修饰符的操作需要看下](./img/lazy%E4%BF%AE%E9%A5%B0%E7%AC%A6%E7%9A%84%E6%93%8D%E4%BD%9C%E9%9C%80%E8%A6%81%E6%9F%A5%E7%9C%8B%E4%B8%8B.png) 这的意识是失去光标或者enter之后才会执行change数据，才会重新同步数据，并不是实时更新而是失去光标之后才更新 -->
<!-- ![组件上是如何使用v-model的](./img/v-model%E7%BB%84%E4%BB%B6%E4%B8%8A%E6%98%AF%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8%E7%9A%84.png)model还是使用emit来做u哦 和普通的没啥差别 -->
<!-- ![watch深度监听reactive对象并且普通的对象变换是否可以监听到,getters返回某个对象的属性来进行监听](./img/watcher%E6%B7%B1%E5%BA%A6%E7%9B%91%E5%90%ACreactive%E5%AF%B9%E8%B1%A1%E5%B9%B6%E6%9F%A5%E7%9C%8B%E4%B8%8B%E6%99%AE%E9%80%9A%E7%9A%84%E5%AF%B9%E8%B1%A1%E6%98%AF%E5%90%A6%E5%8F%AF%E4%BB%A5%E7%9B%91%E5%90%AC%E5%88%B0%E5%8F%98%E6%8D%A2.png)
watch只能监听到响应式数据的变换 但是可以监听到普通对象用getter返回的情况 -->
![什么情况下会是用flush:post先更新vue然后执行watch了](./img/v-model%E7%BB%84%E4%BB%B6%E4%B8%8A%E6%98%AF%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8%E7%9A%84.png)
<!-- ![路由加载的时候如果没有加载到对应的组件可以使用reject来返回一个失败的组件结果吗](./img/%E8%B7%AF%E7%94%B1%E5%8A%A0%E8%BD%BD%E7%9A%84%E6%97%B6%E5%80%99%E5%A6%82%E6%9E%9C%E6%B2%A1%E6%9C%89%E5%8A%A0%E8%BD%BD%E5%88%B0%E5%AF%B9%E5%BA%94%E7%9A%84%E7%BB%84%E4%BB%B6%E5%8F%AF%E4%BB%A5%E4%BD%BF%E7%94%A8reject%E6%9D%A5%E8%BF%94%E5%9B%9E%E4%B8%80%E4%B8%AA%E5%A4%B1%E8%B4%A5%E7%9A%84%E7%BB%84%E4%BB%B6%E7%BB%93%E6%9E%9C%E5%90%97.png) -->
![异步加载组件的高级操作内容](./img/%E8%B7%AF%E7%94%B1%E5%8A%A0%E8%BD%BD%E7%9A%84%E6%97%B6%E5%80%99%E5%A6%82%E6%9E%9C%E6%B2%A1%E6%9C%89%E5%8A%A0%E8%BD%BD%E5%88%B0%E5%AF%B9%E5%BA%94%E7%9A%84%E7%BB%84%E4%BB%B6%E5%8F%AF%E4%BB%A5%E4%BD%BF%E7%94%A8reject%E6%9D%A5%E8%BF%94%E5%9B%9E%E4%B8%80%E4%B8%AA%E5%A4%B1%E8%B4%A5%E7%9A%84%E7%BB%84%E4%BB%B6%E7%BB%93%E6%9E%9C%E5%90%97.png)
![插件内容的创建和使用](./img/%E6%8F%92%E4%BB%B6%E5%86%85%E5%AE%B9%E7%9A%84%E5%88%9B%E5%BB%BA%E5%92%8C%E7%BB%83%E4%B9%A0.png)
![Teleport的实现原理是什么呢？还是FIxed? 修改了DOM结构但是没有修改逻辑结构](./img/teleport%E7%9A%84%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86%E6%98%AF%E4%BB%80%E4%B9%88%E5%91%A2%EF%BC%9F%E8%BF%98%E6%98%AFFixed%E5%90%97.png)
![Teleport同时输送两个组件到一个元素上](./img/%E5%90%8C%E6%97%B6%E8%BE%93%E9%80%81%E4%B8%A4%E4%B8%AA%E7%BB%84%E4%BB%B6teleport.png)