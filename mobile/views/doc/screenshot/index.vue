<style scoped lang="less">
@import './index.less';
</style>
<template>
  <!-- 截长图 -->
  <ul class="m-screenshot">
    <li v-for="list in listData" :key="list.id">
      <div class="u-label">{{ list.label }}</div>
      <me-screenshot :allow-down="list.allowDown" :image-name="list.imageName" :start="list.start" @on-click="onClick(list)" @on-end="onEnd">
        <div class="u-desc-cell">
          <span>{{ list.text }}</span>
          <me-icon name="icon-right1" size="20px" color="#ccc"></me-icon>
        </div>
      </me-screenshot>
    </li>
  </ul>
</template>
<script lang="ts" setup>
import { useHandlerClick } from './hooks'

const { listData, onClick, onEnd } = useHandlerClick()
</script>
