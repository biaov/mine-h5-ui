<script lang="ts" setup>
import { useHandle } from './hooks'

const { listData, onClick } = useHandle()
</script>

<template>
  <!-- 开关 -->
  <ul class="switch">
    <li v-for="item in listData" :key="item.id">
      <div class="label">{{ item.label }}</div>
      <me-switch v-model="item.value" :size="item.size" :active-color="item.activeColor" :inactive-color="item.inactiveColor" :disabled="item.disabled" :async="item.async" @click="onClick(item)" />
    </li>
  </ul>
</template>

<style scoped lang="less">
@import './index.less';
</style>
