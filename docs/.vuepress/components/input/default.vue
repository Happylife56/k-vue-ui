<template>
  <div class="input-box">
    <KInput v-model="value" placeholder="请输入内容" :type="type">
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
    </KInput>
  </div>
</template>

<script>
import KInput from '../../../../packages/input/input'
export default {
  props: {
    type: { type: String, default: 'number' }
  },
  data() {
    return {
      value: ''
    }
  },
  components: { KInput }
}
</script>

<style lang="scss">
.input-box {
  width: 240px;
}
</style>