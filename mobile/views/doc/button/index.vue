<script lang="ts" setup>
import { useWebData } from './hooks'

const { listData } = useWebData()
</script>

<template>
  <!-- 按钮 -->
  <ul class="button">
    <li v-for="item in listData" :key="item.id">
      <div class="label">{{ item.label }}</div>
      <me-button v-for="it in item.btns" :key="it.id" :type="it.type" :plain="!!it.plain" :disabled="!!it.disabled" :color="!it.color ? '' : it.color" :icon="!it.icon ? '' : it.icon">
        {{ it.value }}
      </me-button>
    </li>
  </ul>
</template>

<style scoped lang="less">
@import './index.less';
</style>
