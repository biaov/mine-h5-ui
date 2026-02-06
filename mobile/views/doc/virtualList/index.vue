<script lang="ts" setup>
import { useHandler } from './hooks'

const { listData, loadMoreText, onLoadMore } = useHandler()
</script>

<template>
  <!-- 上传图片 -->
  <ul class="virtual-list">
    <li v-for="list in listData" :key="list.id">
      <div class="label">{{ list.label }}</div>
      <me-virtual-list height="300px" :list="list.list" :item-height="list.itemHeight" :remain="16" @load-more="onLoadMore(list)">
        <template #="{ item }">
          <div class="item" :class="{ auto: list.auto }">
            <p>
              <span>#{{ item.virtualId }}.</span>
              {{ item.text }}
            </p>
          </div>
        </template>
        <template #more>
          <div v-if="list.loadStatus" class="more">{{ loadMoreText[list.loadStatus] }}</div>
        </template>
      </me-virtual-list>
    </li>
  </ul>
</template>

<style scoped lang="less">
@import './index.less';
</style>
