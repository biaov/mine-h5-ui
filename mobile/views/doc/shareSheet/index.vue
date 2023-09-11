<style scoped lang="less">
@import './index.less';
</style>
<template>
  <!-- 分享面板 -->
  <ul class="share-sheet">
    <li v-for="item in listData" :key="item.id">
      <div class="label">{{ item.label }}</div>
      <ul class="list-all">
        <li v-for="it in item.list" :key="it.id" @click="onClick(it)">
          <span>{{ it.value }}</span>
          <me-icon name="icon-right1" size="20px" color="#ccc"></me-icon>
          <me-share-sheet v-model:visible="it.visible" :list="it.list" tips="立即分享给好友" @change="onChange" @cancel="onCancel"></me-share-sheet>
        </li>
      </ul>
    </li>
  </ul>
</template>
<script lang="ts" setup>
import { useHandle } from './hooks'

const { listData, onClick, onChange, onCancel } = useHandle()
</script>
