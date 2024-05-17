<script lang="ts" setup>
import { onMounted } from 'vue'
import { baseRouter } from '@/config/variables'

onMounted(() => {
  globalThis.innerWidth < 1200 && (globalThis.location.href = `${globalThis.location.origin}${baseRouter}mobile.html`)
})
</script>

<template>
  <router-view />
</template>

<style lang="less">
@import './styles/index.less';
</style>
