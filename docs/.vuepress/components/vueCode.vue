<template lang="html">
  <div class="vue-code">
    <div class="vue-component">
      <slot></slot>
    </div>
    <el-collapse-transition>  
      <div class="pre-code" v-if="showCode">
        <div class="code-html" ref="code">
        <div class="code-explain" v-if="$slots.explain">
          <slot name="explain"></slot>
        </div>
          <slot name="code"></slot>
        </div>
      </div>
    </el-collapse-transition>
    <div @click="clickHandler" class="block-control">
      <details>
        <summary>{{ showCode ? "隐藏代码" : "查看代码" }}</summary>
      </details>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Vuecode',
  props: {
    md: {
      default: false,
      type: Boolean
    }
  },
  data() {
    return {
      showCode: false,
    }
  },
  mounted() {
    if (this.$refs.code) {
      var md = require('markdown-it')();
      const text = this.$refs.code.textContent
      let code = md.render(text);
      this.$refs.code.innerHTML = code
    }
  },
  methods: {
    clickHandler() {
      this.showCode = !this.showCode
    }
  }
}
</script>

<style lang="stylus" scoped>
.vue-code {
  margin-top: 20px;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: 0.2s;

  .vue-component {
    padding: 20px;
  }

  .pre-code {
    width: 100%;
    background: #f5f7fb;

    .code-html {
      padding: 20px;

      .code-explain {
        padding: 15px 20px;
        border: 1px solid #ebebeb;
        border-radius: 3px;
        background: #fff;
      }

      .language-html {
        margin: 0;
        padding: 0 !important;
      }
    }
  }

  .block-control {
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-top: 1px solid #eaeefb;
  }
}
</style> 