<template>
  <!-- 分割线 -->
  <ul class="m-divider">
    <li v-for="(item, index) in listData" :key="index">
      <div class="u-label">{{ item.label }}</div>
      <me-divider v-bind="item"></me-divider>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useWebData } from "./hooks";

export default defineComponent({
  setup() {
    const { listData } = useWebData();
    return { listData };
  }
});
</script>
<style scoped lang="less">
// 循环设置列表
.loop-li(@index) when(@index<=10) {
  li:nth-child(@{index}) {
    margin-bottom: @index * 10px;
  }
  .loop-li(@index+1);
}
.m-divider {
  .u-label {
    width: 100%;
    margin-bottom: 10px;
    color: @font-color-reduce;
    font-size: @font-size-min;
  }
  :deep(.me-divider) {
    margin: 0 auto;
  }
  .loop-li(1);
}
</style>
