<script lang="ts" setup>
import { useHandle } from './hooks'

const { listData, onDelete, onCollect } = useHandle()
</script>

<template>
  <!-- 滑动单元格 -->
  <ul class="swipe-cell">
    <li v-for="item in listData" :key="item.id">
      <div class="label">{{ item.label }}</div>
      <me-swipe-cell>
        <template #content>
          <h3 class="tit">{{ item.liText }}</h3>
        </template>
        <template #hidden>
          <div class="btns" :style="`width:${item.width}px;`">
            <me-button type="danger" icon="icon-delete1" @click="onDelete">删除</me-button>
            <me-button type="success" icon="icon-aixinD" @click="onCollect" v-if="item.width > 100">收藏</me-button>
          </div>
        </template>
      </me-swipe-cell>
    </li>
  </ul>
</template>

<style scoped lang="less">
@import './index.less';
</style>
