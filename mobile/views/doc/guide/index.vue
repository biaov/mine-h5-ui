<script lang="ts" setup>
import { useWebData } from './hooks'

const { listData, onFinish } = useWebData()
</script>

<template>
  <!-- 动作面板 -->
  <ul class="guide">
    <li v-for="(item, index) in listData" :key="index">
      <div class="label">{{ item.label }}</div>
      <ul class="list-all">
        <li v-for="(it, i) in item.list" :key="i" @click="it.visible = true">
          <span>{{ it.value }}</span>
          <me-icon name="icon-right1" size="20px" color="#ccc" />
          <me-guide v-model:visible="it.visible" :list="it.list" @finish="onFinish" />
        </li>
      </ul>
    </li>
  </ul>
</template>

<style scoped lang="less">
@import './index.less';
</style>
