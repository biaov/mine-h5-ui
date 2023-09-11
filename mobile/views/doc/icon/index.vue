<style scoped lang="less">
@import './index.less';
</style>
<template>
  <!-- 图标 -->
  <p class="top-tips">点击图标即可复制名称</p>
  <ul class="icon" ref="icons" data-clipboard-action="copy">
    <li v-for="item in listData" :key="item.id">
      <div class="label">{{ item.label }}</div>
      <ul class="list-all">
        <li v-for="(it, i) in item.list" :key="i" @click="onClick(it.name)">
          <me-icon :name="it.name" :color="it.color" :size="it.size"></me-icon>
          <span>{{ it.name }}</span>
        </li>
      </ul>
    </li>
  </ul>
</template>
<script lang="ts" setup>
import { useWebData } from './hooks'

const { icons, listData, onClick } = useWebData()
</script>
