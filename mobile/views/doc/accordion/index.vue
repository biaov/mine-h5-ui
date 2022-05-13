<style scoped lang="less">
@import './index.less';
</style>
<template>
  <!-- 手风琴 -->
  <div class="accordion">
    <div class="label">基础用法</div>
    <me-accordion v-model="accordionActive">
      <me-accordion-item v-for="(item, index) in listData" :key="index" :label="item.label" :name="index">
        <div v-html="item.html"></div>
      </me-accordion-item>
    </me-accordion>
  </div>
</template>
<script lang="ts" setup>
import { useWebData } from './hooks'

const { accordionActive, listData } = useWebData()
</script>
