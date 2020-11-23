---
Methods:
 - name: mt10, mt20
   parameters: null
   description: 上边距10px，上边距20px
 - name: mb10, mb20
   parameters: null
   description: 下边距10px，下边距20px
 - name: ml10, mt20
   parameters: null
   description: 左边距10px，左边距20px
 - name: mr10, mr20
   parameters: null
   description: 右边距10px，右边距10px
 - name: line-through
   parameters: null
   description: 中划线
 - name: pointer
   parameters: null
   description: 光标手指指针
 - name: not-allowed
   parameters: null
   description: 禁用样式
 - name: flex
   parameters: null
   description: 设置flex布局
 - name: flex-warp
   parameters: null
   description: 超出换行
 - name: flex-align
   parameters: null
   description: 左右居中
 - name: flex-justify
   parameters: null
   description: 上下居中
 - name: flex-center
   parameters: null
   description: 左右上下居中
 - name: flex-around
   parameters: null
   description: 两侧的间隔相等
 - name: flex-between
   parameters: null
   description: 两端对齐，项目之间的间隔都相等
 - name: flexs-justify
   parameters: null
   description: 多轴方式：左右居中
 - name: flexs-align
   parameters: null
   description: 多轴方式：上下居中
 - name: flexs-center
   parameters: null
   description: 多轴方式：上下左右居中
---

### 布局

:::tip
  总结一些常用的布局模式
:::

#### 基础用法 
> 常用的外边距设置  

<vuecode md>
<div>
 <layout margin/>
</div>
<div slot="code">

```html
<template>
  <div class="guid-content">
    <div class="bg-purple mt10 mr10">
      <span>mt10 上边距10px：margin-top:10px</span><br />
        <span>mr10 右边距10px：margin-right:10px</span>
      </div>
      <div class="bg-purple mb10 ml10">
        <span>mb10 下边距10px：margin-bottom:10px</span><br />
        <span>ml10 左边距10px：margin-left:10px</span>
      </div>
    </div>
    <div class="guid-content">
      <div class="bg-purple mt20 mr20">
        <span>mt20 上边距20px：margin-top:20px</span><br />
        <span>mr20 右边距20px：margin-right:20px</span>
      </div>
      <div class="bg-purple mb20 ml20">
        <span>mb20 下边距10px：margin-bottom:20px</span><br />
        <span>ml20 左边距10px：margin-left:20px</span>
      </div>
    </div>
  </div>
</template>

<script>
export default { }
</script>

<style></style>
```

</div>
</vuecode>

#### 字体颜色 

<vuecode md>
<div>
  <layout font />
</div>
<div slot="code">

```html
<template>
  <div>
    <span class="c-red">红色 red</span>
    <span class="c-yellow">黄色 yellow</span>
    <span class="c-blue">蓝色 blue</span>
    <span class="c-green">绿色 green</span>
    <span class="color-33">#333333</span>
    <span class="color-66">#666666</span>
    <span class="color-99">#999999</span>
  </div>
</template>

<script>
export default { }
</script>

<style></style>
```

</div>
</vuecode>

#### 样式类型

<vuecode md>
<div>
  <layout vStyle />
</div>

<div slot="code">

```html
<template>
  <div>
    <span class="line-through">中划线</span>
    <span class="pointer ml10">光标手指指针</span>
    <span class="not-allowed ml10">禁用样式</span>
  </div>
</template>

<script>
export default { }
</script>

<style></style>
```

</div>
</vuecode>

#### flex布局

<vuecode md>
<div>
  <layout flex />
</div>

<div slot="code">

```html
<template>
  <div class="mb10">单轴方式：</div>
  <div>
    <div class="mb10">flex：flex</div>
    <ul class="guid-content flex">
      <li class="bg-purple">content1</li>
      <li class="bg-purple">content2</li>
      <li class="bg-purple">content3</li>
      <li class="bg-purple">content4</li>
    </ul>
  </div>
  <div>
    <div class="mb10 mt10">超出换行：flex-warp</div>
    <ul class="guid-content flex-warp">
      <li class="bg-purple">content1</li>
      <li class="bg-purple">content2</li>
      <li class="bg-purple">content3</li>
      <li class="bg-purple">content4</li>
    </ul>
  </div>
  <div>
    <div class="mb10 mt10">左右居中：flex-align</div>
    <div class="flex-align flex1 bg-row">左右</div>
  </div>
  <div class="mt10">
    <div class="mb10">上下居中：flex-justify</div>
    <div class="flex-justify flex1 bg-row">上下</div>
  </div>
  <div class="mt10">
    <div class="mb10">左右上下居中：flex-center</div>
    <div class="flex-center flex1 bg-row">上下左右</div>
  </div>
  <div class="mt10">
    <div class="mb10">两侧的间隔相等：flex-around</div>
    <ul class="guid-content flex-around">
      <li class="bg-purple flex-center">左右</li>
      <li class="bg-purple flex-center">上下</li>
    </ul>
  </div>
  <div class="mt10">
    <div class="mb10">两端对齐，项目之间的间隔都相等: flex-between</div>
    <ul class="guid-content flex-between">
      <li class="bg-purple flex-center">左右</li>
      <li class="bg-purple flex-center">上下</li>
    </ul>
  </div>
  <div class="mb10 mt20">多轴方式：</div>
  <div>
    <div class="mb10">左右居中：flexs-justify</div>
    <ul class="guid-content flexs-justify">
      <li class="bg-purple flex-center">左右</li>
      <li class="bg-purple flex-center">上下</li>
    </ul>
  </div>
  <div>
    <div class="mb10 mt10">上下居中：flexs-align</div>
    <ul class="guid-content flexs-align">
      <li class="bg-purple flex-center">左右</li>
      <li class="bg-purple flex-center">上下</li>
    </ul>
  </div>
  <div>
    <div class="mb10 mt10">上下左右居中：flexs-center</div>
    <ul class="guid-content flexs-center">
      <li class="bg-purple flex-center">左右</li>
      <li class="bg-purple flex-center">上下</li>
    </ul>
  </div>
</template>

<script>
export default { }
</script>

<style lang="scss" scoped>
.guid-content {
  border: 1px solid #eaeefb;
  padding: 10px;
  border-radius: 4px;
  display: flex;
  .bg-purple,
  .bg-purple-light {
    padding: 10px;
    border: 1px solid #eaeefb;
    border-radius: 4px;
    line-height: 1.5;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .bg-purple {
    width: 240px;
    background-color: #d3dce6;
  }
}
.bg-row {
  background-color: #d3dce6;
  padding: 10px;
  border-radius: 4px;
}
.width-240 {
  width: 240px;
}
</style>
```

</div>
</vuecode>


#### 样式属性class


<vuetable methods></vuetable>



