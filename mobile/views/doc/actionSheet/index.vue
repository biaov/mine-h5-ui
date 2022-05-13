<style scoped lang="less">
@import './index.less';
</style>
<template>
  <!-- 动作面板 -->
  <ul class="action-sheet">
    <li v-for="item in listData" :key="item.id">
      <div class="label">{{ item.label }}</div>
      <ul class="list-all">
        <li v-for="it in item.list" :key="it.id" @click="it.visible = true">
          <span>{{ it.value }}</span>
          <me-icon name="icon-right1" size="20px" color="#ccc"></me-icon>
          <me-action-sheet v-model:visible="it.visible" :list="it.list" @cancel="onCancel" @change="onChange"></me-action-sheet>
        </li>
      </ul>
    </li>
  </ul>
</template>
<script lang="ts" setup>
import { useHandle } from './hooks'

const { listData, onChange, onCancel } = useHandle()
</script>
