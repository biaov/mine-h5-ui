<script lang="ts" setup>
import { useRegisterSW } from 'virtual:pwa-register/vue'

useRegisterSW()
</script>

<template>
  <div class="reload-prompt"></div>
</template>

<style scoped lang="less">
@import './index.less';
</style>
