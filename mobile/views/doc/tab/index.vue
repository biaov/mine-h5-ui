<style scoped lang="less">
@import './index.less';
</style>
<template>
  <!-- 标签页 -->
  <ul class="m-tab">
    <li v-for="list in listData" :key="list.id">
      <div class="u-label">{{ list.label }}</div>
      <me-tab v-model="list.active" v-bind="{ color: list.color, activeColor: list.activeColor, lineColor: list.lineColor }" @on-change="onChange">
        <me-tab-item v-for="item in list.children" :key="item.id" :name="item.id" :label="item.label">{{ item.content }}</me-tab-item>
      </me-tab>
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
