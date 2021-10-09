<template>
  <!-- 数字滚动 -->
  <ul class="m-count-to">
    <li v-for="(item, index) in listData" :key="index">
      <div class="u-label">{{ item.label }}</div>
      <me-count-to v-bind="item"></me-count-to>
    </li>
    <li>
      <div class="u-label">手动控制</div>
      <me-count-to v-bind="manual" v-model="manual.value"></me-count-to>
      <me-button type="danger" plain @on-click="manual.value = true">重新开始</me-button>
    </li>
  </ul>
</template>
<script>
import { useWebData } from "./hooks";

export default {
  setup() {
    const { listData, manual } = useWebData();
    return { listData, manual };
  }
};
</script>
<style scoped lang="less">
.m-count-to {
  > li {
    .u-label {
      width: 100%;
      margin-bottom: 10px;
      color: @font-color-reduce;
      font-size: @font-size-min;
    }
    :deep(.me-count-to) {
      margin-bottom: 15px;
    }
    :deep(.me-button) {
      cursor: pointer;
    }
  }
}
</style>
