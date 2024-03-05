<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useWebData } from './hooks'

const { listData, onClick } = useWebData()
const scrollNode = ref<Element>()

onMounted(() => {
  scrollNode.value = document.body as Element
})
</script>

<template>
  <!-- 悬浮按钮 -->
  <ul class="float-button">
    <li v-for="(item, index) in listData" :key="index">
      <div class="label">{{ item.label }}</div>
      <ul class="list-all" :style="{ height: item.height }">
        <li v-for="(it, i) in item.list" :key="i">
          <me-float-button v-bind="it" @click="onClick(item)">{{ it.value }}</me-float-button>
        </li>
      </ul>
    </li>
  </ul>
</template>

<style scoped lang="less">
@import './index.less';
</style>
