<template>
  <div class="layout">
    <!-- 边距 -->
    <div v-if="margin">
      <div class="guid-content">
        <div class="bg-purple-light mt10 mr10">
          <span>mt10 上边距10px：margin-top:10px</span><br />
          <span>mr10 右边距10px：margin-right:10px</span>
        </div>
        <div class="bg-purple-light mb10 ml10">
          <span>mb10 下边距10px：margin-bottom:10px</span><br />
          <span>ml10 左边距10px：margin-left:10px</span>
        </div>
      </div>
      <div class="guid-content">
        <div class="bg-purple-light mt20 mr20">
          <span>mt20 上边距20px：margin-top:20px</span><br />
          <span>mr20 右边距20px：margin-right:20px</span>
        </div>
        <div class="bg-purple-light mb20 ml20">
          <span>mb20 下边距10px：margin-bottom:20px</span><br />
          <span>ml20 左边距10px：margin-left:20px</span>
        </div>
      </div>
    </div>
    <!-- 字体颜色 -->
    <div v-if="font">
      <span class="c-red">红色 red</span>
      <span class="c-yellow ml10">黄色 yellow</span>
      <span class="c-blue ml10">蓝色 blue</span>
      <span class="c-green ml10">绿色 green</span>
      <span class="color-33 ml10">#333333</span>
      <span class="color-66 ml10">#666666</span>
      <span class="color-99 ml10">#999999</span>
      <span class="font-weight ml10">文字加粗</span>
    </div>
    <!-- 样式类型 -->
    <div v-if="vStyle">
      <span class="line-through">中划线</span>
      <span class="pointer ml10">光标手指指针</span>
      <span class="not-allowed ml10">禁用样式</span>
    </div>
    <!-- flex布局 -->
    <div v-if="flex">
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'layout',
  props: {
    margin: { type: Boolean, default: false },
    font: { type: Boolean, default: false },
    vStyle: { type: Boolean, default: false },
    flex: { type: Boolean, default: false },
  }
}
</script>

<style lang="scss" scoped>
.layout {
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
}
</style>