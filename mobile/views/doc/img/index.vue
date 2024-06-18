<script lang="ts" setup>
import { useWebData } from './hooks'

const { isShowMask, listData, onLoad, onError } = useWebData()
</script>

<template>
  <!-- 图片 -->
  <div class="img">
    <ul class="list-img">
      <li v-for="item in listData" :key="item.id">
        <div class="label">{{ item.label }}</div>
        <ul class="list-all">
          <li v-for="it in item.list" :key="it.id">
            <me-img :src="it.src" :width="it.width" :height="it.height" :fill="it.fill" :radius="it.radius" @load="onLoad" @error="onError"></me-img>
            <span v-if="it.width && !it.height">width:{{ it.width }}</span>
            <span v-if="!it.width && it.height">height:{{ it.height }}</span>
            <span v-if="it.width && it.height">width:{{ it.width }};height:{{ it.height }}</span>
            <span v-if="it.fill">fill:{{ it.fill }}</span>
            <span v-if="it.radius">radius:{{ it.radius }}</span>
          </li>
        </ul>
      </li>
    </ul>
    <me-mask :visible="isShowMask">
      <me-loading color="#f56c6c" size="100px">
        <div class="text">加载中...</div>
      </me-loading>
    </me-mask>
  </div>
</template>

<style scoped lang="less">
@import './index.less';
</style>
