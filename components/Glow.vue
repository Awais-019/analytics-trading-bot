<template>
  <div class="glow"></div>
</template>

<style lang="postcss" scoped>
  .glow {
    @apply bg-primary-tango w-[318px] h-[318px] rounded-full absolute top-20 opacity-[40%] blur-[175px];
    left: calc(50% - 159px);
  }
</style>
