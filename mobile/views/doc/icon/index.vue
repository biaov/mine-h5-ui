<style scoped lang="less">
@import './index.less';
</style>
<template>
  <!-- 图标 -->
  <p class="u-top-tips">点击图标即可复制名称</p>
  <ul class="m-icon" ref="icons" data-clipboard-action="copy">
    <li v-for="item in listData" :key="item.id">
      <div class="u-label">{{ item.label }}</div>
      <ul class="m-list-all">
        <li v-for="(it, i) in item.list" :key="i" @click="onClick(it.name)">
          <me-icon :name="it.name" :color="it.color" :size="it.size"></me-icon>
          <span>{{ it.name }}</span>
        </li>
      </ul>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useWebData } from './hooks'

export default defineComponent({
  setup() {
    const { icons, listData, onClick } = useWebData()
    return { icons, listData, onClick }
  }
})
</script>
