<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
  useHead({
    titleTemplate: (titleChunk) =>
      titleChunk ? `${titleChunk} | CoinAnalytics` : "CoinAnalytics",
  });
</script>
