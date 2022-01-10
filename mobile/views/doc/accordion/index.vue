<style scoped lang="less">
@import './index.less';
</style>
<template>
  <!-- 手风琴 -->
  <div class="m-accordion">
    <div class="u-label">基础用法</div>
    <me-accordion v-model="accordionActive">
      <me-accordion-item v-for="(item, index) in listData" :key="index" :label="item.label" :name="index">
        <div v-html="item.html"></div>
      </me-accordion-item>
    </me-accordion>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useWebData } from './hooks'

export default defineComponent({
  setup() {
    const { accordionActive, listData } = useWebData()
    return { accordionActive, listData }
  }
})
</script>
