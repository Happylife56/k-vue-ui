<template>
  <!-- 基础输入框 -->
  <el-input v-model.trim="inputValue" v-bind="$attrs" class="input-style" @keyup.enter.native="searchContent" @change="changeValue">
    <template slot="append">
      <slot />
    </template>
    <template slot="prepend">
      <slot name="prepend" />
    </template>
    <template slot="prefix">
      <slot name="prefix" />
    </template>
    <template slot="suffix">
      <slot name="suffix" />
    </template>
  </el-input>
</template>

<script>
export default {
  name: 'KInput',
  props: {
    value: {
      type: [String, Number],
      default: '',
    },
    /**
     * @param { ?number } point 小数点后几位
     * @example :point="2"
     * @param { ?string } 输入框的类型 integer 只能输入整数
     */
    point: {
      type: Number,
      default: 2,
    },
    type: {
      type: String,
      default: 'number',
    },
  },
  data() {
    return {
      stopTime: null,
      keyupStatus: true,
    };
  },
  computed: {
    inputValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.changeInput(value);
      },
    },
  },
  methods: {
    changeInput(val) {
      let value = val;
      if (this.type === 'number') {
        value = value.replace(/[^\d.]/g, ''); // 清除“数字”和“.”以外的字符
        value = value.replace(/^\./g, ''); // 验证第一个字符是数字而不是.
        value = value.replace(/\.{2,}/g, '.'); // 只保留第一个. 清除多余的.
        value = value.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.');
        if (value.indexOf('.') < 0 && value !== '') { // 以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额
          if (value.substr(0, 1) === '0' && value.length === 2) {
            value = value.substr(1, value.length);
          }
        }

        if (value !== '') {
          if (value.indexOf('.') > 0) {
            if (this.point === 3) {
              if (value.split('.')[1].length > 3) { // 控制只能输入小数点后3位
                value = (value.match(/^\d*(\.?\d{0,3})/g)[0]) || null;
              }
            } else if (value.split('.')[1].length > 2) { // 控制只能输入小数点后2位
              value = (value.match(/^\d*(\.?\d{0,2})/g)[0]) || null;
            }
          }
        }
      } else if (this.type === 'integer') { // 只能输入整数
        value = value.replace(/[^\d]/g, '');
      }

      this.$emit('input', value);
    },
    // 搜索内容
    searchContent() {
      if (this.keyupStatus) {
        this.keyupStatus = false;
        if (this.inputValue) this.$emit('enter');
      }
      this.setButton();
    },
    // 数据改变
    changeValue(val) {
      this.$emit('change', val);
    },
    setButton() {
      // 添加一个定时器，点击之后延时0.8s，防二次点击后台报错
      clearTimeout(this.stopTime);
      this.stopTime = setTimeout(() => {
        this.keyupStatus = true;
      }, 800);
    },
    getFoucus() {

    },
  },
};
</script>

<style lang="scss">
.input-style {
  .el-input__icon {
    height: 38px;
  }
}
</style>
