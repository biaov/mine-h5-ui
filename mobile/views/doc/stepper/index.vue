<script lang="ts" setup>
import { useWebData } from './hooks'

const { listData } = useWebData()
</script>

<template>
  <!-- 空状态 -->
  <ul class="stepper">
    <li v-for="(item, index) in listData" :key="index" class="mb-15">
      <div class="label w-full mb-10">{{ item.label }}</div>
      <div class="flex flex-wrap gap-12 items-end">
        <me-stepper v-bind="it" v-for="(it,i) in item.list" :key="i" />
      </div>
    </li>
  </ul>
</template>

<style scoped lang="less">
@import './index.less';
</style>
