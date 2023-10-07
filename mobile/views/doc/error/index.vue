<script lang="ts" setup>
import { useWebData, useSwitch } from './hooks'

const { listData } = useWebData()
const { onClickSwitch } = useSwitch({ listData })
</script>

<template>
  <!-- 错误 -->
  <div class="btn">
    <me-button type="primary" @click="onClickSwitch">切换{{ listData[0].position !== 'fixed' ? '正常' : '列表' }}显示</me-button>
  </div>
  <ul class="error">
    <li v-for="(item, index) in listData" :key="index">
      <div class="label">{{ item.label }}</div>
      <me-error v-bind="item"></me-error>
    </li>
  </ul>
</template>

<style scoped lang="less">
@import './index.less';
</style>
