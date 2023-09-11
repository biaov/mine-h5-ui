<style scoped lang="less">
@import './index.less';
</style>
<template>
  <!-- 加载 -->
  <ul class="loading">
    <li v-for="item in listData" :key="item.id">
      <div class="label">{{ item.label }}</div>
      <ul class="list-all">
        <li v-for="{ id, size, color, icon, text, dot } in item.list" :key="id">
          <me-loading v-bind="{ size, color, dot }">
            <div>{{ text }}</div>
            <template v-if="icon" #icon>
              <img :src="icon" :style="imgStyle" />
            </template>
          </me-loading>
        </li>
      </ul>
    </li>
  </ul>
</template>
<script lang="ts" setup>
import { useWebData } from './hooks'

const { listData } = useWebData()
const imgStyle = { width: '40px', height: '40rpx' }
</script>
