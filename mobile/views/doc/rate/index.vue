<style scoped lang="less">
@import './index.less';
</style>
<template>
  <!-- 评分 -->
  <ul class="m-rate">
    <li v-for="item in listData" :key="item.id">
      <div class="u-label">{{ item.label }}</div>
      <me-rate
        v-model="item.value"
        :icon="item.icon"
        :icon-select="item.iconSelect"
        :color="item.color"
        :count="item.count"
        :readonly="item.readonly"
        :disabled="item.disabled"
        :tips="item.tips"
        :tips-color="item.tipsColor"
        :size="item.size"
        @on-change="onChange(item)"
      ></me-rate>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useHandlerClick } from './hooks'

export default defineComponent({
  setup() {
    const { listData, onChange } = useHandlerClick()
    return { listData, onChange }
  }
})
</script>
