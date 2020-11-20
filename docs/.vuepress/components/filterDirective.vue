<template>
  <div class="flilter">
    <!-- 金额类型 -->
    <div v-if="money">
      <span class="mr20">使用前金额：
        <span class="c-red">{{ price }}</span>
      </span>
      <span>使用后金额：
        <span class="c-red mr20">{{ price | moneyType }}</span>
      </span>
      <span>浮点类型：
        <span class="c-red">{{ price | moneyPoint | moneyType }}</span>
      </span>
    </div>
    <!-- 参数类型 -->
    <div v-if="params" class="mt20">
      <span>数据不为空：
        <span class="c-red mr20">{{ string }}</span>
      </span>
      <span>数据为空：
        <span class="c-red">{{ string2 | paramsType }}</span>
      </span>
    </div>
    <!-- 输入框自动获取焦点 -->
    <input-default v-model="value" placeholder="请输入" v-focus v-if="vInput" />
    <!-- 金额指令处理 -->
    <div v-if="vMoney">
      <span class="mr20">使用前金额：
        <span class="c-red">{{ price }}</span>
      </span>
      <span>使用后金额：
        <span class="c-red mr20" v-money>{{ price }}</span>
      </span>
      <span>浮点类型：
        <span class="c-red">{{ price | moneyPoint | moneyType }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    money: { type: Boolean, default: false },
    params: { type: Boolean, default: false },
    vInput: { type: Boolean, default: false },
    vMoney: { type: Boolean, default: false },
  },
  data() {
    return {
      price: 100,
      string: '这是一段字符串',
      string2: '',
      value: ''
    }
  },
}
</script>

<style>
</style>