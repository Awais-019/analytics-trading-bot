<script lang="ts" setup>
  const currencies = ref({});

  const res = await $fetch<any>(
    "http://api.coinlayer.com/live?access_key=e2638ae5f2caba120d0962f5ba9cda97"
  );
  currencies.value = res.rates as { [key: string]: number };
  const currencyNames = Object.keys(currencies.value);
  const currencyRates = Object.values(currencies.value);
</script>

<template>
  <div class="app-container">
    <div
      class="grid grid-flow-col grid-cols-3 border-2 border-[#7B4C28] rounded-2xl text-center"
    >
      <div>
        <h3 class="head text-h6-reg h-12 rounded-tl-xl">No.</h3>
        <div v-for="(_, index) in currencyNames" class="h-12">
          {{ index + 1 }}
        </div>
      </div>
      <div>
        <h3 class="head text-h6-reg h-12">Currency</h3>
        <div v-for="(currency, index) in currencyNames" class="h-12">
          {{ currency }}
        </div>
      </div>
      <div>
        <h3 class="head text-h6-reg h-12 rounded-tr-xl">Rate</h3>
        <div v-for="(rate, index) in currencyRates" class="h-12">
          {{ rate }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
  .head {
    @apply text-neutrals-gray;
    background-color: #262f33;
  }
</style>
