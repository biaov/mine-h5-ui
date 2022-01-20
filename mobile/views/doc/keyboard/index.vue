<style scoped lang="less">
@import './index.less';
</style>
<template>
  <!-- 数字键盘 -->
  <div class="m-keyboard">
    <ul class="m-list">
      <li v-for="item in listData" :key="item.id">
        <div class="u-label">{{ item.label }}</div>
        <div class="u-tit" v-for="it in item.list" :key="it.id" @click.stop="onClick(it)">
          <span>{{ it.label }}</span>
          <me-icon name="icon-right1" size="20px" color="#ccc"></me-icon>
          <me-keyboard v-model:visible="it.value" @on-complate="onComplate" @on-click="handleNum" @on-delete="onDelete" :skin-type="it.skinType" :skin-style="it.skinStyle"></me-keyboard>
        </div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useHandlerClick } from './hooks'

export default defineComponent({
  setup() {
    const { listData, onClick, handleNum, onDelete, onComplate } = useHandlerClick()
    return { listData, onClick, handleNum, onDelete, onComplate }
  }
})
</script>
