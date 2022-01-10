<style scoped lang="less">
@import './index.less';
</style>
<template>
  <!-- 标签 -->
  <ul class="m-tag">
    <li v-for="(item, index) in listData" :key="index">
      <div class="u-label">{{ item.label }}</div>
      <me-tag v-for="(it, i) in item.children" :key="i" v-bind="it" @on-close="onClose"></me-tag>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useHandlerClick } from './hooks'

export default defineComponent({
  setup() {
    const { listData, onClose } = useHandlerClick()
    return { listData, onClose }
  }
})
</script>
