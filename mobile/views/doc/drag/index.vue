<script lang="ts" setup>
import { useWebData } from './hooks'

const { listData, current, onChange } = useWebData()
</script>

<template>
  <!-- 索引栏 -->
  <div class="drag">
    <div class="label">基础使用</div>
    <me-drag v-model:list="listData" v-model:current="current" @change="onChange">
      <template #default="{ item }">
        <img :src="item.url" alt="img" mode="fill" draggable="false" />
      </template>
    </me-drag>
  </div>
</template>

<style scoped lang="less">
@import './index.less';
</style>
