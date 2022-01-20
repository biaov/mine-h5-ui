<style scoped lang="less">
@import './index.less';
</style>
<template>
  <!-- 上传图片 -->
  <ul class="m-virtual-list">
    <li v-for="list in listData" :key="list.id">
      <div class="u-label">{{ list.label }}</div>
      <me-virtual-list height="300px" :list="list.list" :itemHeight="list.itemHeight" :remain="16" @on-load-more="onLoadMore(list)">
        <template #default="{ item }">
          <div class="item" :class="{ auto: list.auto }">
            <p>
              <span>#{{ item.virtualId }}.</span>
              {{ item.text }}
            </p>
          </div>
        </template>
        <template #more>
          <div class="u-more" v-if="list.loadStatus">{{ loadMoreText[list.loadStatus] }}</div>
        </template>
      </me-virtual-list>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useHandler } from './hooks'

export default defineComponent({
  setup() {
    const { listData, loadMoreText, onLoadMore } = useHandler()
    return { listData, loadMoreText, onLoadMore }
  }
})
</script>
