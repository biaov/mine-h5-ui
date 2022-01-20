<style scoped lang="less">
@import './index.less';
</style>
<template>
  <!-- 下拉刷新 -->
  <div class="m-pull-refresh">
    <me-tab v-model="active">
      <me-tab-item v-for="item in listData" :key="item.id" :name="item.id" :label="`${item.label}使用`">
        <me-pull-refresh v-model="item.loading" :load-text="item.loadText" :load-icon="item.loadIcon" @on-refresh="onRefresh(item)">刷新次数{{ item.count }}</me-pull-refresh>
      </me-tab-item>
    </me-tab>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useRefresh } from './hooks'

export default defineComponent({
  setup() {
    const { active, listData, onRefresh } = useRefresh()
    return { active, listData, onRefresh }
  }
})
</script>
