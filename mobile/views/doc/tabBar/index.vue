<template>
  <!-- 标签栏 -->
  <ul class="m-tab-bar">
    <li v-for="(item, index) in listData" :key="index">
      <div class="u-label">{{ item.label }}</div>
      <me-tab-bar v-bind="item" @on-change="onChange($event, item)"></me-tab-bar>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useHandlerClick } from "./hooks";

export default defineComponent({
  setup() {
    const { listData, onChange } = useHandlerClick();
    return { listData, onChange };
  }
});
</script>
<style scoped lang="less">
.m-tab-bar {
  min-height: calc(100vh - 75px);
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  background: @bg-color;
  .u-label {
    width: 100%;
    line-height: 40px;
    padding-left: 15px;
    color: @font-color-reduce;
    font-size: @font-size-min;
  }
  :deep(.me-tab-bar) {
    margin-bottom: 10px;
  }
}
</style>
