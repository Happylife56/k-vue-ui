---
Methods:
 - name: focus
   parameters: null
   description: 输入框自动获取焦点
 - name: money
   parameters: 可选，point小数点后两位 
   description: 返参金额的处理
 - name: title
   parameters: null
   description: 内容超出显示省略号，hover显示提示
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

<div slot="explain">可选参数：point 浮点类型 小数点后两位</div>
<div slot="code">

```html
<template>
  <div>
    <span class="mr20">使用前金额：
      <span class="c-red">{{ price }}</span>
    </span>
    <span>使用后金额：
      <span class="c-red mr20" v-money>{{ price }}</span>
    </span>
    <span>浮点类型：
      <span class="c-red" v-money.point>{{ price }}</span>
    </span>
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

#### Tittle 文字提示
> 文字超出隐藏，鼠标hover显示全部

<vuecode md>
<filterDirective vTitle></filterDirective>
<div slot="code">

```html
<template>
  <div>
    <div class="row-bg">
      <div v-title>
         这是一段隐藏文字，这是一段隐藏文字,这是一段隐藏文字,这是一段隐藏文字
      </div>
    </div>
    <div class="row-purple mt20">
      <div v-title>
        这是一段隐藏文字，这是一段隐藏文字,这是一段隐藏文字,这是一段隐藏文字
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
```

</div>
</vuecode>


####  Methods
<vuetable methods></vuetable>



