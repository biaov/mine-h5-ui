<style scoped lang="less">
@import './index.less';
</style>
<template>
  <!-- 数字键盘 -->
  <div class="keyboard">
    <ul class="list">
      <li v-for="item in listData" :key="item.id">
        <div class="label">{{ item.label }}</div>
        <div class="tit" v-for="it in item.list" :key="it.id" @click.stop="onClick(it)">
          <span>{{ it.label }}</span>
          <me-icon name="icon-right1" size="20px" color="#ccc"></me-icon>
          <me-keyboard v-model:visible="it.value" @complate="onComplate" @click="handleNum" @delete="onDelete" :skin-type="it.skinType" :skin-style="it.skinStyle"></me-keyboard>
        </div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import { useHandle } from './hooks'

const { listData, onClick, handleNum, onDelete, onComplate } = useHandle()
</script>
