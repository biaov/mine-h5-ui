<style scoped lang="less">
@import './index.less';
</style>
<template>
  <!-- 弹出框 -->
  <ul class="m-popup">
    <li v-for="item in listData" :key="item.id">
      <div class="u-label">{{ item.label }}</div>
      <ul class="m-list-all">
        <li v-for="it in item.list" :key="it.id" @click="it.visible = true">
          <span>{{ it.value }}</span>
          <me-icon name="icon-right1" size="20px" color="#ccc"></me-icon>
          <me-popup v-model:visible="it.visible" :position="it.position" :closeable="it.closeable" :radius="it.radius" @on-close="it.visible = false">内容...</me-popup>
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
    const { listData } = useWebData()
    return { listData }
  }
})
</script>
