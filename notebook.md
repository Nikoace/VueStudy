# Vue.js笔记
## First Day

### 声明式渲染

Vue.js 的核心是一个允许采用简洁的模板语法来声明式地将数据渲染进 DOM 的系统：

``` html
<div id="app">
  {{ message }}
</div>
```

``` javascript
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
```

所有东西都是响应式的

### **指令** 

指令带有前缀 `v-`，以表示它们是 Vue 提供的特殊特性，它们会在渲染的 DOM 上应用特殊的响应式行为 。

### 条件与循环

``` html
<div id="app-3">
  <p v-if="seen">现在你看到我了</p>
</div>
```

``` javascript
var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})
```

我们不仅可以把数据绑定到 DOM 文本或特性，还可以绑定到 DOM **结构**。此外，Vue 也提供一个强大的过渡效果系统，可以在 Vue 插入/更新/移除元素时自动应用[过渡效果](https://cn.vuejs.org/v2/guide/transitions.html)。 