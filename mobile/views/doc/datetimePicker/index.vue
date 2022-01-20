<style scoped lang="less">
@import './index.less';
</style>
<template>
  <!-- 时间选择器 -->
  <ul class="m-datetime-picker">
    <li v-for="item in listData" :key="item.id">
      <div class="u-label">{{ item.label }}</div>
      <div class="u-li" @click="item.visible = true">
        <span>{{ item.title }}</span>
        <me-icon name="icon-right1" size="20px" color="#ccc"></me-icon>
      </div>
      <me-datetime-picker
        :type="item.type"
        v-model="item.value"
        :visible="item.visible"
        :min-date="item.minDate"
        :max-date="item.maxDate"
        @on-cancel="item.visible = false"
        @on-sure="onSure(item)"
      ></me-datetime-picker>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useHandlerClick } from './hooks'

export default defineComponent({
  setup() {
    const { listData, onSure } = useHandlerClick()
    return { listData, onSure }
  }
})
</script>
