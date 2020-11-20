---
Methods:
 - name: moneyType
   parameters: null
   description: 金额类型，返回￥10
 - name: moneyPoint
   parameters: 可选，如果有参数，为0则返回0
   description: 金额浮点类型，返回￥10.00 
 - name: dataType
   parameters: null
   description: 为空返回0
 - name: paramsType
   parameters: null
   description: 为空返回- 
 - name: rounding
   parameters: null
   description: 限制小数点后两位
---

### 常用的过滤器

:::tip
Vue.js 允许你自定义过滤器，可被用于一些常见的文本格式化。

过滤器可以用在两个地方：双花括号插值和 v-bind 表达式 (后者从 2.1.0+ 开始支持)。过滤器应该被添加在 JavaScript 表达式的尾部，由“管道”符号指示：
:::

#### 金额类型 
> 处理金额类型的参数

<vuecode md>
<filterDirective money></filterDirective>
<div slot="code">

```html
<template>
  <div>
    <span>金额类型：{{ price | moneyType }}</span>
    <span>金额浮点类型：{{ string | paramsType }}</span>
  </div>
</template>

<script>
export default {
  data(){
    return {
      price: 100,
    }
  },
}
</script>

<style></style>
```

</div>
</vuecode>

#### 数据类型 
> 处理数据类型，为空返回 - 

<vuecode md>
<filterDirective params></filterDirective>
<div slot="code">

```html
<template>
  <div>
    <span>参数不为空：{{ string | paramsType }}</span>
    <span>参数为空：{{ string2 | paramsType }}</span>
  </div>
</template>

<script>
export default {
  data(){
    return {
      string: '这是一段字符串',
      string2: ''
    }
  },
}
</script>

<style></style>
```

</div>
</vuecode>


####  Methods
<vuetable methods></vuetable>



