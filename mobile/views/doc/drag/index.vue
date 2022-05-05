<style scoped lang="less">
@import './index.less';
</style>
<template>
  <!-- 索引栏 -->
  <div class="m-drag">
    <div class="u-label">基础使用</div>
    <me-drag v-model:list="listData" v-model:current="current" @on-change="onChange">
      <template #default="{ item }">
        <img :src="item.url" alt="img" mode="fill" />
      </template>
    </me-drag>
  </div>
</template>
<script lang="ts" setup>
import { useWebData } from './hooks'

const { listData, current, onChange } = useWebData()
</script>
