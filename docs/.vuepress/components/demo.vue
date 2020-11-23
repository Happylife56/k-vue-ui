<template>
  <div class="demo">
    <div>{{ price | moneyType }}</div>
  </div>
</template>

<script>
export default {
  name: 'demo',
  data() {
    return {
      price: 100
    }
  },
}
</script>

<style>
</style>