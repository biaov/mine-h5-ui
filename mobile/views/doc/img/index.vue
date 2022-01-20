<style scoped lang="less">
@import './index.less';
</style>
<template>
  <!-- 图片 -->
  <div class="m-img">
    <ul class="m-list-img">
      <li v-for="item in listData" :key="item.id">
        <div class="u-label">{{ item.label }}</div>
        <ul class="m-list-all">
          <li v-for="it in item.list" :key="it.id">
            <me-img :src="it.src" :width="it.width" :height="it.height" :fill="it.fill" :radius="it.radius" @on-load="onLoad" @on-error="onError"></me-img>
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
      <me-loading type="circle2" color="#f56c6c" size="100px">
        <div class="u-text">加载中...</div>
      </me-loading>
    </me-mask>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useWebData } from './hooks'

export default defineComponent({
  setup() {
    const { isShowMask, listData, onLoad, onError } = useWebData()
    return { isShowMask, listData, onLoad, onError }
  }
})
</script>
