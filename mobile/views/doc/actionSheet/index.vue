<style scoped lang="less">
@import './index.less';
</style>
<template>
  <!-- 动作面板 -->
  <ul class="m-action-sheet">
    <li v-for="item in listData" :key="item.id">
      <div class="u-label">{{ item.label }}</div>
      <ul class="m-list-all">
        <li v-for="it in item.list" :key="it.id" @click="it.visible = true">
          <span>{{ it.value }}</span>
          <me-icon name="icon-right1" size="20px" color="#ccc"></me-icon>
          <me-action-sheet v-model:visible="it.visible" :list="it.list" @on-cancel="onCancel" @on-change="onChange"></me-action-sheet>
        </li>
      </ul>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useHandlerClick } from './hooks'

export default defineComponent({
  setup() {
    const { listData, onChange, onCancel } = useHandlerClick()
    return { listData, onChange, onCancel }
  }
})
</script>
