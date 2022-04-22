<style scoped lang="less">
@import './index.less';
</style>
<template>
  <!-- 公告栏 -->
  <ul class="m-notice-bar">
    <li v-for="(item, index) in listData" :key="index">
      <div class="u-label">{{ item.label }}</div>
      <me-notice-bar v-bind="item" loop @on-click:preappend="onClick('preappend', $event)" @on-click:append="onClick('append', $event)" @on-click="onClick('notice', $event)"></me-notice-bar>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useHandlerClick } from './hooks'

export default defineComponent({
  setup() {
    const { listData, onClick } = useHandlerClick()
    return { listData, onClick }
  }
})
</script>
