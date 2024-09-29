<script lang="ts" setup>
import { onMounted } from 'vue'

onMounted(() => {
  // globalThis.innerWidth < 1200 && (globalThis.location.href = `${globalThis.location.origin}${import.meta.env.VITE_BASE_ROUTER}mobile.html`)
})
</script>

<template>
  <router-view />
</template>

<style lang="less">
@import './styles/index.less';
</style>
