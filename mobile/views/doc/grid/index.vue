<script lang="ts" setup>
import { useHandle } from './hooks'

const { grids, handleLi } = useHandle()
</script>

<template>
  <!-- 宫格 -->
  <div class="grid">
    <me-grid border-color="#d9d9d9" :cols="3">
      <me-grid-item v-for="item in grids" :key="item.icon" v-bind="item" @click="handleLi(item)"></me-grid-item>
      <me-grid-item>
        <div class="cust">
          <me-icon name="icon-love" color="#999" size="28px" />
          <p>自定义</p>
        </div>
      </me-grid-item>
    </me-grid>
  </div>
</template>

<style scoped lang="less">
@import './index.less';
</style>
