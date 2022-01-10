<style scoped lang="less">
@import './index.less';
</style>
<template>
  <!-- 倒计时 -->
  <div class="m-count-down">
    <div class="u-label">基础用法</div>
    <me-count-down :time="2 * 60 * 60 * 1000"></me-count-down>
    <div class="u-label">毫秒级渲染</div>
    <me-count-down :time="time" format="hh:mm:ss:ms"></me-count-down>
    <div class="u-label">自定义样式</div>
    <me-count-down :time="time">
      <template #default="{ hh, mm, ss }">
        <span class="u-block">{{ hh }}</span>
        :
        <span class="u-block">{{ mm }}</span>
        :
        <span class="u-block">{{ ss }}</span>
      </template>
    </me-count-down>
    <div class="u-label">手动控制</div>
    <me-count-down format="hh:mm:ss:ms" v-bind="{ ...handleStatus, time }"></me-count-down>
    <ul class="m-btn">
      <li v-for="(item, index) in btnList" :key="index" @click="onClick(item)">
        <me-icon :name="item.icon" size="16px"></me-icon>
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useHandlerClick } from './hooks'

export default defineComponent({
  setup() {
    const { time, btnList, handleStatus, onClick } = useHandlerClick()
    return { time, btnList, handleStatus, onClick }
  }
})
</script>
