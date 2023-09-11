<style scoped lang="less">
@import './index.less';
</style>
<template>
  <!-- 滑动单元格 -->
  <ul class="swiper-cell">
    <li v-for="item in listData" :key="item.id">
      <div class="label">{{ item.label }}</div>
      <me-swiper-cell>
        <template #content>
          <h3 class="tit">{{ item.liText }}</h3>
        </template>
        <template #hidden>
          <div class="btns" :style="`width:${item.width}px;`">
            <me-button type="danger" icon="icon-delete1" @click="onDelete">删除</me-button>
            <me-button type="success" icon="icon-aixinD" @click="onCollect" v-if="item.width > 100">收藏</me-button>
          </div>
        </template>
      </me-swiper-cell>
    </li>
  </ul>
</template>
<script lang="ts" setup>
import { useHandle } from './hooks'

const { listData, onDelete, onCollect } = useHandle()
</script>
