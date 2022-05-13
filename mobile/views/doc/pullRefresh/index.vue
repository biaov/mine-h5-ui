<style scoped lang="less">
@import './index.less';
</style>
<template>
  <!-- 下拉刷新 -->
  <div class="pull-refresh">
    <me-tab v-model="active">
      <me-tab-item v-for="item in listData" :key="item.id" :name="item.id" :label="`${item.label}使用`">
        <me-pull-refresh v-model="item.loading" :load-text="item.loadText" :load-icon="item.loadIcon" @refresh="onRefresh(item)">刷新次数{{ item.count }}</me-pull-refresh>
      </me-tab-item>
    </me-tab>
  </div>
</template>
<script lang="ts" setup>
import { useRefresh } from './hooks'

const { active, listData, onRefresh } = useRefresh()
</script>
