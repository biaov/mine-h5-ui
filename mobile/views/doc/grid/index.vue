<style scoped lang="less">
@import './index.less';
</style>
<template>
  <!-- 宫格 -->
  <div class="m-grid">
    <me-grid border-color="#d9d9d9" :cols="3">
      <me-grid-item v-for="item in grids" :key="item.icon" v-bind="item" @on-click="handleLi(item)"></me-grid-item>
      <me-grid-item>
        <div class="u-cust">
          <me-icon name="icon-love" color="#999" size="28px"></me-icon>
          <p>自定义</p>
        </div>
      </me-grid-item>
    </me-grid>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useHandlerClick } from './hooks'

export default defineComponent({
  setup() {
    const { grids, handleLi } = useHandlerClick()
    return { grids, handleLi }
  }
})
</script>
