<script lang="ts" setup>
import { useHandle } from './hooks'

const { time, btnList, handleStatus, onClick } = useHandle()
</script>

<template>
  <!-- 倒计时 -->
  <div class="count-down">
    <div class="label">基础用法</div>
    <me-count-down :time="2 * 60 * 60 * 1000"></me-count-down>
    <div class="label">毫秒级渲染</div>
    <me-count-down :time="time" format="hh:mm:ss:ms"></me-count-down>
    <div class="label">自定义样式</div>
    <me-count-down :time="time">
      <template #="{ hh, mm, ss }">
        <span class="unit">{{ hh }}</span>
        :
        <span class="unit">{{ mm }}</span>
        :
        <span class="unit">{{ ss }}</span>
      </template>
    </me-count-down>
    <div class="label">手动控制</div>
    <me-count-down format="hh:mm:ss:ms" v-bind="{ ...handleStatus, time }"></me-count-down>
    <ul class="btn">
      <li v-for="(item, index) in btnList" :key="index" @click="onClick(item)">
        <me-icon :name="item.icon" size="16px" />
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>

<style scoped lang="less">
@import './index.less';
</style>
