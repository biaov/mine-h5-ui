<template>
  <div class="reload-prompt"></div>
</template>
<script lang="ts" setup>
import { useRegisterSW } from 'virtual:pwa-register/vue'

useRegisterSW()
</script>
<style scoped lang="less">
@import './index.less';
</style>
