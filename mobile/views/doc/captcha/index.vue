<script lang="ts" setup>
import { useWebData } from './hooks'

const { listData, onShowCaptcha, onCheck, onRefresh } = useWebData()
</script>

<template>
  <!-- 图片验证器 -->
  <ul class="captcha">
    <li v-for="(item, index) in listData" :key="index">
      <div class="label">{{ item.label }}</div>
      <div class="flex items-center h-40 border-b border-gray-300 text-sm" @click="onShowCaptcha(item)">显示图片验证器</div>
      <me-captcha :item="item.item" v-model:visible="item.visible" v-model:status-code="item.statusCode" @check="onCheck($event, item)" @refresh="onRefresh(item)" />
    </li>
  </ul>
</template>

<style scoped lang="less">
@import './index.less';
</style>
