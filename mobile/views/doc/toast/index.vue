<style scoped lang="less">
@import './index.less';
</style>
<template>
  <!-- 动作面板 -->
  <ul class="m-toast">
    <li v-for="item in listData" :key="item.id">
      <div class="u-label">{{ item.label }}</div>
      <ul class="m-list-all">
        <li v-for="it in item.list" :key="it.id" @click="onClick">
          <span>{{ it.value }}</span>
          <me-icon name="icon-right1" size="20px" color="#ccc"></me-icon>
        </li>
      </ul>
    </li>
  </ul>
</template>
<script lang="ts" setup>
import { useHandlerClick } from './hooks'

const { listData, onClick } = useHandlerClick()
</script>
