# Vue笔记

## 创建实例

```html
<div id="app">
        <input type="text" v-model='name' placeholder="your name">
        <h1>hello, {{ name }}</h1>
</div>
```

```javascript
var app = new Vue({
    el: '#app',
    data: {
        name: 'niko'
    }
    //option
})
```

app代表这个实例，el用于指定一个页面已存在的DOM元素来挂载Vue实例，可以是HTML元素（' #something '），也可以是CSS选择器。

挂载成功后可以通过`app.$el`访问该元素，Vue提供的实例属性和方法都以`$`开头。

`v-model`的值对应于创建的实例中的`data`选项的`name`字段，这就是数据绑定，通过这个可以声明应用中需要双向绑定的数据，**建议所有会用到的数据都预先在`data`中声明**。

Vue实例本身也代理了data对象里所有的属性，所以可以

```javascript
var app = new Vue({
    el: '#app',
    data: {
        a: '2'
    }
})
console.log(app.a);
```

来访问属性。

除了显示声明数据外，也可以指向一个已有的变量，并且他们之间默认建立双向绑定。当修改其中一个，另一个也将发生变化：

``` javascript
var myData = {
    a: 1
}
var app = new Vue({
    el: '#app',
    data: MyData
})
console.log(app.a);
app.a = 2;
console.log(myData.a);
myData.a = 3;
console.log(app.a);
```

## 生命周期

常用的生命周期钩子：

- created：实例创建完成后调用，此阶段完成了数据的观测（读取？），但尚未挂载，$el还不可用。需要初始化一些数据是会比较有用
- mounted：el挂载到实例上后调用，一般第一个业务逻辑从这里开始
- beforeDestroy：实例销毁前调用。主要解绑一些使用addEventListener监听事件。

这些钩子与el和data类似，作为选项写入到Vue实例内，并且钩子的this指向的是调用它的Vue实例：

```javascript
var app = new Vue({
    el:'#app',
    data:{
        a:2
    },
    created:function(){
        console.log(this.a);
    },
    mounted: function(){
        console.log(this.$el);
    }
})
```

## 插值与表达式

使用`{{}}`是最基本的文本插值方法，它会自动显示双向绑定的数据，例如：

```html
<div id="app">
    {{ book }}
</div>
<script>
    var app = new Vue({
        el: '#app',
        data:{
            book: 'How to go to Canada'
        }
    })
</script>
```

如果要输出HTML，而不是纯文本，可以使用v-html：

```html
<div id="app">
    <span v-html="link"></span>
</div>
<script>
    var app = new Vue({
        el: '#app',
        data:{
            link:'<a href="#">this is a link</a>'
        }
    })
</script>
```

