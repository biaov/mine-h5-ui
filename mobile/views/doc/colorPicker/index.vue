<script lang="ts" setup>
import { useWebData } from './hooks'

const { listData, filterColor } = useWebData()
</script>

<template>
  <!-- 滑块 -->
  <ul class="color-picker">
    <li v-for="(item, index) in listData" :key="index">
      <div class="label">{{ item.label }}</div>
      <me-color-picker v-model="item.props.value" v-if="item.customShow">
        <div class="w-100 h-40 text-white flex justify-center items-center uppercase" :style="{ background: filterColor(item) }">{{ item.props.value?.type }}</div>
      </me-color-picker>
      <template v-else-if="item.size">
        <me-space size="40px">
          <me-color-picker v-for="(subItem, subIndex) in item.size" :key="subIndex" :size="subItem" />
        </me-space>
      </template>
      <me-color-picker v-model="item.props.value" :show-text="item.props.showText" :filter-text="item.props.filterText" v-else />
    </li>
  </ul>
</template>

<style scoped lang="less">
@import './index.less';
</style>
