<template>
  <!--  按钮防多次点击 -->
  <el-button :type="type" :size="size" :plain="plain" :disabled="!buttonStatus || disabled" v-bind="$attrs" @click="onclick">
    <slot />
    <i v-if="iconfont" class="el-icon--right" :class="iconfont" />
  </el-button>
</template>

<script>
export default {
  name: 'KButton',
  props: {
    // 是否可以点击
    disabled: {
      type: Boolean,
      default: false,
    },
    // 按钮的类型
    type: {
      type: String,
      default: 'primary',
    },
    // 按钮的大小
    size: {
      type: String,
      default: '',
    },
    // 按钮的背景颜色
    plain: {
      type: String,
      default: null,
    },
    iconfont: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      buttonStatus: true,
      stopTime: null,
    };
  },
  methods: {
    onclick() {
      // 如果没有权限，提示没有权限
      if (this.iconLock) {
        this.warnAuthor();
        return;
      }
      if (this.buttonStatus) {
        this.buttonStatus = false;
        this.$emit('click');
      }
      this.setButton();
    },
    setButton() {
      // 添加一个定时器，点击之后延时0.8s，防二次点击后台报错
      clearTimeout(this.stopTime);
      this.stopTime = setTimeout(() => {
        this.buttonStatus = true;
      }, 800);
    },
  },
};
</script>
