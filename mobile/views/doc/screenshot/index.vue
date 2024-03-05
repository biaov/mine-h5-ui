<script lang="ts" setup>
import { useHandle } from './hooks'

const { listData, onClick, onEnd } = useHandle()
</script>

<template>
  <!-- 截长图 -->
  <ul class="screenshot">
    <li v-for="list in listData" :key="list.id">
      <div class="label">{{ list.label }}</div>
      <me-screenshot :allow-down="list.allowDown" :image-name="list.imageName" :start="list.start" @click="onClick(list)" @end="onEnd">
        <div class="desc-cell">
          <span>{{ list.text }}</span>
          <me-icon name="icon-right1" size="20px" color="#ccc" />
        </div>
      </me-screenshot>
    </li>
  </ul>
</template>

<style scoped lang="less">
@import './index.less';
</style>
