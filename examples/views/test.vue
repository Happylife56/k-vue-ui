<template>
  <div class="test">
    test
    <div>
      金额：<span v-money.point>{{ money }}</span>
    </div>
    <div v-params>
      参数：{{ money | moneyType }}
    </div>
    <k-input v-focus />
  </div>
</template>

<script>
import { KInput } from '../../packages';

export default {
  name: 'Test',
  components: { KInput },
  data() {
    return {
      money: '-0',
    };
  },
};
</script>

<style>
</style>
