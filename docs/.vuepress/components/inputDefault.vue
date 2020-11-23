<template>
  <div class="input-box">
    <k-input v-model="value" placeholder="请输入内容" :type="type">
      <template>
        <slot name="append" />
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
    </k-input>
  </div>
</template>

<script>
export default {
  name: 'inputDefault',
  props: {
    type: { type: String, default: 'number' }
  },
  data() {
    return {
      value: ''
    }
  },
}
</script>

<style lang="scss">
.input-box {
  width: 240px;
}
</style>