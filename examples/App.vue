<script lang="ts" setup>
import { onMounted } from 'vue'
import { useGlobalVars } from '@/config/variables'

const { BaseRouter } = useGlobalVars()

onMounted(() => {
  globalThis.innerWidth < 1200 && (globalThis.location.href = `${globalThis.location.origin}${BaseRouter}mobile.html`)
})
</script>

<template>
  <router-view></router-view>
</template>

<style lang="less">
@import './styles/index.less';
</style>
