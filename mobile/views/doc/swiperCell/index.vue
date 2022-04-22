<style scoped lang="less">
@import './index.less';
</style>
<template>
  <!-- 滑动单元格 -->
  <ul class="m-swiper-cell">
    <li v-for="item in listData" :key="item.id">
      <div class="u-label">{{ item.label }}</div>
      <me-swiper-cell>
        <template #content>
          <h3 class="u-tit">{{ item.liText }}</h3>
        </template>
        <template #hidden>
          <div class="m-btns" :style="`width:${item.width}px;`">
            <me-button type="danger" icon="icon-delete1" @on-click="onDelete">删除</me-button>
            <me-button type="success" icon="icon-aixinD" @on-click="onCollect" v-if="item.width > 100">收藏</me-button>
          </div>
        </template>
      </me-swiper-cell>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useHandlerClick } from './hooks'

export default defineComponent({
  setup() {
    const { listData, onDelete, onCollect } = useHandlerClick()
    return { listData, onDelete, onCollect }
  }
})
</script>
