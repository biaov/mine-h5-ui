<style scoped lang="less">
@import './index.less';
</style>
<template>
  <!-- 开关 -->
  <ul class="m-switch">
    <li v-for="item in listData" :key="item.id">
      <div class="u-label">{{ item.label }}</div>
      <me-switch
        v-model="item.value"
        :size="item.size"
        :active-color="item.activeColor"
        :inactive-color="item.inactiveColor"
        :disabled="item.disabled"
        :async="item.async"
        @on-click="onClick(item)"
      ></me-switch>
    </li>
  </ul>
</template>
<script lang="ts" setup>
import { useHandlerClick } from './hooks'

const { listData, onClick } = useHandlerClick()
</script>
