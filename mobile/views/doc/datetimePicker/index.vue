<script lang="ts" setup>
import { useHandle } from './hooks'

const { listData, onSure } = useHandle()
</script>

<template>
  <!-- 时间选择器 -->
  <ul class="datetime-picker">
    <li v-for="item in listData" :key="item.id">
      <div class="label">{{ item.label }}</div>
      <div class="li" @click="item.visible = true">
        <span>{{ item.title }}</span>
        <me-icon name="icon-right1" size="20px" color="#ccc" />
      </div>
      <me-datetime-picker :type="item.type" v-model="item.value" :visible="item.visible" :min-date="item.minDate" :max-date="item.maxDate" @cancel="item.visible = false" @sure="onSure(item)" />
    </li>
  </ul>
</template>

<style scoped lang="less">
@import './index.less';
</style>
