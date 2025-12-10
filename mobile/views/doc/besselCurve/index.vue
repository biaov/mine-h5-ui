<script lang="ts" setup>
import { useWebData } from './hooks'

const { listData, targetRef } = useWebData()
</script>

<template>
  <!-- 弹出框 -->
  <ul class="popup">
    <li v-for="item in listData" :key="item.id">
      <div class="label">{{ item.label }}</div>
      <ul class="list-all">
        <li v-for="it in item.list" :key="it.id" class="relative w-fill">
          <me-bessel-curve v-bind="it" :list="it.rect ? [it.rect] : []" />
          <div :ref="e => targetRef(e as Element, it, 'start')" class="absolute" :style="it.startPointStyle"></div>
          <div :ref="e => targetRef(e as Element, it, 'end')" class="absolute" :style="it.endPointStyle"></div>
        </li>
      </ul>
    </li>
  </ul>
</template>

<style scoped lang="less">
@import './index.less';
</style>
