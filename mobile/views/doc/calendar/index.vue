<script lang="ts" setup>
import { useWebData } from './hooks'

const { listData } = useWebData()
</script>

<template>
  <!-- 动作面板 -->
  <ul class="mask-default">
    <li v-for="(item, index) in listData" :key="index">
      <div class="label">{{ item.label }}</div>
      <ul class="list-all">
        <li v-for="(it, i) in item.list" :key="i" @click="it.visible = true">
          <span>{{ it.value }} - {{ it.modelValue || '' }}</span>
          <me-icon name="icon-right1" size="20px" color="#ccc" />
          <me-calendar v-model:visible="it.visible" v-model="it.modelValue" style="position: absolute; top: 50px; left: 0px" :theme-color="it.themeColor" :closable="it.closable" />
        </li>
      </ul>
    </li>
  </ul>
</template>

<style scoped lang="less">
@import './index.less';
</style>
