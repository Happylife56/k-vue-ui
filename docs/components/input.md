---
API:
 - name: type
   type: String
   parameters: number, integer, text
   description: number:小数点或者小数点后两位  integer:只能输入整数 text:任意类型
   default: string
 - name: point
   type: Number
   parameters: 2, 3
   description: 小数点后位数
   default: 2
Methods:
 - name: change
   parameters: null
   description: 输入框失去焦点
 - name: search
   parameters: null
   description: 用户按下回车时触发或者点击搜索图标
---

### Input输入框

:::warning
Input 为受控组件，它总会显示 Vue 绑定值。

通常情况下，应当处理 input 事件，并更新组件的绑定值（或使用v-model）。否则，输入框内显示的值将不会改变。

不支持 v-model 修饰符。
:::

#### 基础用法 
> 默认数字或者小数点后两位  

<vuecode md>
<div>
 <InputDefault/>
</div>
<div slot="code">

```html
<template>
  <k-input placeholder="请输入内容" v-model="value"></k-input>
</template>

<script>
import k-input from 'k-vue-ui'
export default {
  data(){
    return {
      value: ''
    }
  },
  components: { k-input }
}
</script>

<style></style>
```

</div>
</vuecode>

#### 整数类型 
> 整数类型只能输入整数 

<vuecode md>
<div>
  <InputDefault type="integer" />
</div>
<div slot="explain">使用type="integer"输入框只能输入整数 </div>
<div slot="code">

```html
<template>
  <k-input placeholder="请输入内容" type="integer" v-model="value"></k-input>
</template>

<script>
import k-input from 'k-vue-ui'
export default {
  data(){
    return {
      value: ''
    }
  },
  components: { k-input }
}
</script>

<style></style>
```

</div>
</vuecode>

#### 带 icon 的输入框
> slot 方式

<vuecode md>
<div>
   <div class="flex">
      <InputDefault type="text" class="mr20">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </InputDefault>
      <InputDefault type="text">
        <i slot="suffix" class="el-input__icon el-icon-search"></i>
      </InputDefault>
   </div>
    <div class="flex mt20">
      <InputDefault type="number" class="mr20">
        <template slot="prepend">￥</template>
      </InputDefault>
      <InputDefault type="text">
        <template slot="append">.com</template>
      </InputDefault>
   </div>
</div>

<div slot="explain">可以通过 prefix-icon 和 suffix-icon 属性在 input 组件首部和尾部增加显示图标，也可以通过 slot 来放置图标 </div>
<div slot="code">

```html
<template>
  <k-input placeholder="请输入内容" v-model="value" type="text">
    <i slot="prefix" class="el-input__icon el-icon-search"></i>
  </k-input>
  <k-input placeholder="请输入内容" v-model="value" type="text">
    <i slot="suffix" class="el-input__icon el-icon-search"></i>
  </k-input>
  <k-input placeholder="请输入内容" v-model="value" type="number">
    <template slot="prepend">￥</template>
  </k-input>
  <k-input placeholder="请输入内容" v-model="value" type="text">
    <template slot="append">.com</template>
  </k-input>
</template>

<script>
import k-input from 'k-vue-ui'
export default {
  data(){
    return {
      value: ''
    }
  },
  components: { k-input }
}
</script>

<style></style>
```

</div>
</vuecode>


#### Input Attributes

<vuetable></vuetable>

:::tip
   其他参数和element-ui类似，可以直接用element-ui参数
:::

#### Input Methods
<vuetable methods></vuetable>



