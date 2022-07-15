<!-- ##### 单页应用程序的优势(相较于多页面程序) 或许并没有优势或则说是更合适的，减少对与服务器的请求了，通过vue-router等路由插件来模拟页面的跳转 -->
#### vue3数据更新了之后Dom并不是立即更新而是等到下一个nextTick周期的时候才会进行统一的DOM更新，但是这个nextTick是什么时候进行更新我并不是十分清楚,应该是页面重新说刷新的时候才进行更新，但是这就需要知道那个可以知道啥时候进行更新的接口
<!-- #### reactive响应式测试
![reactive响应式测试](./img/reactive%E6%B7%B1%E5%BA%A6%E7%9B%91%E5%90%AC%E7%9A%84%E5%93%8D%E5%BA%94%E5%BC%8F%E6%B5%8B%E8%AF%95.png) 就是监听引用对象的属性 但是当引用对象切换了之后是无法监听到之前对象的变换的-->
<!-- **最主要的是想知道reactive和ref之前的区别**
ref本质上还是reactive 但是由于reactive无法对基本进行就响应式（let obj = reactive({obj:1}); obj =  [2,323]这样直接变换引用的时候是无法监听到obj变换的，这里就需要使用ref来进行监听，obj其实就变换成了{value:obj}这样来就可以监听到obj的变换）
#### reactive的限制中 reactiv根本上没法监听基础类型的原因究竟是什么呢？ 这个根本原因应该是proxy的原因
![reactive的限制](./img/reactive%E7%9A%84%E9%99%90%E5%88%B6.png) -->
<!-- 
#### reactive和ref的根本上的区别和原理是什么了？为啥ref就可以直接将基础元素实现响应式嗯？但是为啥要在元素中添加个value，还是说本质上其实是一样的呢？ -->

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
<!-- ![什么情况下会是用flush:post先更新vue然后执行watch了](./img/v-model%E7%BB%84%E4%BB%B6%E4%B8%8A%E6%98%AF%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8%E7%9A%84.png) -->
<!-- ![路由加载的时候如果没有加载到对应的组件可以使用reject来返回一个失败的组件结果吗](./img/%E8%B7%AF%E7%94%B1%E5%8A%A0%E8%BD%BD%E7%9A%84%E6%97%B6%E5%80%99%E5%A6%82%E6%9E%9C%E6%B2%A1%E6%9C%89%E5%8A%A0%E8%BD%BD%E5%88%B0%E5%AF%B9%E5%BA%94%E7%9A%84%E7%BB%84%E4%BB%B6%E5%8F%AF%E4%BB%A5%E4%BD%BF%E7%94%A8reject%E6%9D%A5%E8%BF%94%E5%9B%9E%E4%B8%80%E4%B8%AA%E5%A4%B1%E8%B4%A5%E7%9A%84%E7%BB%84%E4%BB%B6%E7%BB%93%E6%9E%9C%E5%90%97.png) -->
<!-- ![异步加载组件的高级操作内容](./img/%E8%B7%AF%E7%94%B1%E5%8A%A0%E8%BD%BD%E7%9A%84%E6%97%B6%E5%80%99%E5%A6%82%E6%9E%9C%E6%B2%A1%E6%9C%89%E5%8A%A0%E8%BD%BD%E5%88%B0%E5%AF%B9%E5%BA%94%E7%9A%84%E7%BB%84%E4%BB%B6%E5%8F%AF%E4%BB%A5%E4%BD%BF%E7%94%A8reject%E6%9D%A5%E8%BF%94%E5%9B%9E%E4%B8%80%E4%B8%AA%E5%A4%B1%E8%B4%A5%E7%9A%84%E7%BB%84%E4%BB%B6%E7%BB%93%E6%9E%9C%E5%90%97.png) -->
<!-- ![插件内容的创建和使用](./img/%E6%8F%92%E4%BB%B6%E5%86%85%E5%AE%B9%E7%9A%84%E5%88%9B%E5%BB%BA%E5%92%8C%E7%BB%83%E4%B9%A0.png) -->
<!-- ![Teleport的实现原理是什么呢？还是FIxed? 修改了DOM结构但是没有修改逻辑结构](./img/teleport%E7%9A%84%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86%E6%98%AF%E4%BB%80%E4%B9%88%E5%91%A2%EF%BC%9F%E8%BF%98%E6%98%AFFixed%E5%90%97.png)
![Teleport同时输送两个组件到一个元素上](./img/%E5%90%8C%E6%97%B6%E8%BE%93%E9%80%81%E4%B8%A4%E4%B8%AA%E7%BB%84%E4%BB%B6teleport.png) -->

<!-- ![assert图片文本等加载文件需要加载之前好像是使用加载器，现在是使用assert/resource来进行处理](./img/webpack/assert%E5%9B%BE%E7%89%87%E6%96%87%E5%AD%97%E7%AD%89%E7%9A%84%E5%8A%A0%E8%BD%BD%20%E4%B9%8B%E5%89%8D%E6%98%AF%E4%BD%BF%E7%94%A8%E5%8A%A0%E8%BD%BD%E5%99%A8%20%E7%8E%B0%E5%9C%A8%E5%A5%BD%E5%83%8F%E6%98%AF%E7%9B%B4%E6%8E%A5%E4%BD%BF%E7%94%A8assert/resource%E8%BF%99%E6%A0%B7%E6%9D%A5%E6%93%8D%E4%BD%9C%E7%9A%84.png)
不是太理解 为什么webpack5中要assert/resource 要加强资源的耦合了现在 之前不是要求分开的。这个加强资源的耦合应该是主要是放在了作为第三方资源或则是组件的时候 可以直接对整个模块进行导入不比需要在外部进行资源的导入。对于自己的项目来说资源最好是整合到一起比较好看点 -->
<!-- ![这个预加载是在干什么没有看明白这说了啥](./img/webpack/%E8%BF%99%E4%B8%AA%E9%A2%84%E5%8A%A0%E8%BD%BD%E6%98%AF%E5%9C%A8%E8%AF%B4%E5%95%A5%E5%91%80%E6%B2%A1%E6%9C%89%E7%9C%8B%E6%87%82.png) 这个预加载是当前页面素材加载的时候同步加载的，但是也可以异步来对数据进行加载，自己来控制加载，可以用import来异步加载，也可以用script来加载，但是script加载出错的时候不会抛出任何错误，webpack自动移除该错误-->
![需要学会这些东西并使用这些东西来分析项目的，这个需要创建一个webpack项目](./img/webpack/%E9%9C%80%E8%A6%81%E6%9F%A5%E7%9C%8B%E5%92%8C%E5%AD%A6%E4%BC%9A%E4%BD%BF%E7%94%A8%E8%BF%99%E4%BA%9B%E5%8A%9F%E8%83%BD%E6%9D%A5%E5%AF%B9%E9%A1%B9%E7%9B%AE%E8%BF%9B%E8%A1%8C%E5%88%86%E6%9E%90.png)
<!-- ![不是十分理解为什么文件没有改变但是当重新构建的时候文件名称会变换](./img/webpack/%E4%B8%8D%E6%98%AF%E5%8D%81%E5%88%86%E7%90%86%E8%A7%A3%E4%B8%BA%E4%BB%80%E4%B9%88%E6%96%87%E4%BB%B6%E6%B2%A1%E6%9C%89%E6%94%B9%E5%8F%98%E4%BD%86%E6%98%AF%E5%BD%93%E9%87%8D%E6%96%B0%E6%9E%84%E5%BB%BA%E7%9A%84%E6%97%B6%E5%80%99%E6%96%87%E4%BB%B6%E5%90%8D%E7%A7%B0%E4%BC%9A%E5%8F%98%E6%8D%A2.png)应该是名称创建规则有啥哇？但看文档的解释是运行的时候入口文件中包含了一些样板文件或则是模板哇，应该是这样的，应该是运行时候的一些模板变换了引起了名称的变换 -->


<!-- ![不明白构建出来的runtime.js文件到底是指啥了](./img/webpack/%E8%BF%99%E9%87%8C%E4%B8%8D%E6%98%AF%E5%8D%81%E5%88%86%E7%9F%A5%E9%81%93%E8%BF%99%E4%B8%AAruntime.js%E5%88%B0%E5%BA%95%E6%98%AF%E5%95%A5%E6%84%8F%E8%AF%86%E5%91%A2%EF%BC%9F.png)不太理解这个运行时的文件到底是包含了些啥内容 是编译之后的所有文件的内容吗？还是什么呢？应该是运行时需要的一些程序文件哇 -->

<!-- ![第三方库使用webpack的方式](./img/webpack/%E8%BF%99%E4%B8%AA%E5%BA%94%E8%AF%A5%E6%98%AF%E4%B8%89%E6%96%B9%E5%BA%93%E4%BD%BF%E7%94%A8webpack%E7%9A%84%E4%BD%BF%E7%94%A8%E6%96%B9%E5%BC%8F.png) -->


<!-- ![不理解这是什么？大量数据的处理吗](./img/webpack/%E4%B8%8D%E7%90%86%E8%A7%A3%E8%BF%99%E6%98%AF%E4%BB%80%E4%B9%88%E6%84%8F%E8%AF%86%E5%A4%A7%E9%87%8F%E6%95%B0%E6%8D%AE%E7%9A%84%E5%A4%84%E7%90%86%E5%90%97.png) -->
<!-- 
![tree shaking 这部分是不太理解啥意识](./img/webpack/%E8%BF%99%E4%B8%80%E9%83%A8%E5%88%86%E6%95%B4%E4%B8%AA%E9%83%BD%E4%B8%8D%E7%90%86%E8%A7%A3%E6%98%AF%E5%95%A5%E6%84%8F%E8%AF%86.png) 整个部分都不太明白 这个部分是另一个内容的执行过程哇 -->

【THREE】绘制一个以线条为例子的3d世界
【THREE】理论知识和基础知识需要先看下 
【THREE】基础的知识部分需要运行一遍
【THREE】网站完成了一个大致的浏览，明确了每个地方都是展示啥的
【THREE】const camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight, 0.1,1000)方法中的每个参数分别代表着什么了？会对图像有啥影响吗？（需要查看下 宽高比会影响到mesh的大小和形状啊咋）
【THREE】响应式变换有点问题 (renderer.setSize(canvas.clientWidth, canvas.clientHeight)  //边缘块状化) 这个宽度是手动的宽度变化是什么意识了？ 为啥canvsa.clientWidth 可以 window.innerHeight也可以了 不是十分理解这种情况 需要重新明白这些问题 本周五需要完成
<!-- 【THREE】mesh.rotation mesh元素的旋转角度是如何设置了？ 绕着某个元素进行旋转的情况 position位置的设置为什么会旋转了 设置了x 和 y 的变换 坐标是相对于mesh原生的坐标还是相对于canvas坐标系的坐标了 rotation.x-->
<!-- 【THREE】 geometry元素的颜色有问题 为什么都不是对应的数据呢 ? 颜色的问题应该是光的问题导致的 -->

<!-- 【THREE】ConeGeometry 圆锥的底边 即使设置的值非常大了还是不是很光滑 -->
【THREE】鼠标事件来移动位置和元素，主要是对控制器的使用
<!-- 【THREE】需要将多余相同的元素进行抽离和封装然后方便元素的使用 -->
【THREE】LatheGeometry元素内部为什么是黑色的呢 Vector1 2 3 这个向量方法是有什么不同吗？
<!-- 【THREE】修改场景的背景颜色 -->
【THREE】场景中放置一个立体的文本，这个部分可以直接获取到
<!-- 【THREE】使用骨架之后为什么已经去掉了灯光了 还有黑色在旋转啊 -->
【THREE】接着查看图元部分，将剩余的基础的一些元素也都看完 还有就是文字的那个尤其是
【THREE】controls.update()  控制器-autoRotate没有任何效果啊
【THREE】控制器的属性为什么改变了之后没有任何变动呢
<!-- 【THREE】这个线框是如何完成的了以及这个黑色的内容是什么了![线框是如何旋转的了](./img/three/%E8%BF%99%E4%B8%AA%E7%BA%BF%E6%A1%86%E5%88%B0%E5%BA%95%E6%98%AF%E5%A6%82%E4%BD%95%E6%89%8D%E6%97%8B%E8%BD%AC%E4%BA%86.png) 线条的素材要用LineBasicMaterial-->