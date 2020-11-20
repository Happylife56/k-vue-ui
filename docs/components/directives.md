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

### 自定义指令

:::tip
除了核心功能默认内置的指令 (v-model 和 v-show)，Vue 也允许注册自定义指令。

这里写了一些常用的指令，通过v-自定义指令进行调用
:::

#### 输入框自动获取焦点 

<vuecode md>
<filterDirective vInput></filterDirective>

<div slot="explain">可以使用 v-focus   让输入框自动获取焦点 </div>
<div slot="code">

```html
<template>
  <k-input v-model="value" placeholder="请输入内容" v-focus/>
</template>

<script>
export default {
  data(){
    return {
      value: '',
    }
  },
}
</script>

<style></style>
```

</div>
</vuecode>

#### 金额类型 
> 处理金额类型，为空返回 ￥ + 金额

<vuecode md>
<filterDirective vMoney></filterDirective>
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



