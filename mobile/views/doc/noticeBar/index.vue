<style scoped lang="less">
@import './index.less';
</style>
<template>
  <!-- 公告栏 -->
  <ul class="notice-bar">
    <li v-for="(item, index) in listData" :key="index">
      <div class="label">{{ item.label }}</div>
      <me-notice-bar v-bind="item" loop @click:preappend="onClick('preappend', $event)" @click:append="onClick('append', $event)" @click="onClick('notice', $event)"></me-notice-bar>
    </li>
  </ul>
</template>
<script lang="ts" setup>
import { useHandle } from './hooks'

const { listData, onClick } = useHandle()
</script>
