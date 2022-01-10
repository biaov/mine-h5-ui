<style scoped lang="less">
@import './index.less';
</style>
<template>
  <!-- 动作面板 -->
  <ul class="m-mask-default">
    <li v-for="item in listData" :key="item.id">
      <div class="u-label">{{ item.label }}</div>
      <ul class="m-list-all">
        <li v-for="it in item.list" :key="it.id" @click="it.visible = true">
          <span>{{ it.value }}</span>
          <me-icon name="icon-right1" size="20px" color="#ccc"></me-icon>
          <me-mask v-model:visible="it.visible" mask-close>
            <me-loading type="circle2" color="#f56c6c" size="100px">
              <div class="u-text">加载中...</div>
            </me-loading>
          </me-mask>
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
