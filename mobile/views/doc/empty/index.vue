<template>
  <!-- 空状态 -->
  <ul class="m-empty">
    <li v-for="(item, index) in listData" :key="index">
      <div class="u-label">{{ item.label }}</div>
      <me-empty v-bind="item"></me-empty>
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
.m-empty {
  > li {
    margin-bottom: 15px;
    .u-label {
      width: 100%;
      margin-bottom: 10px;
      color: @font-color-reduce;
      font-size: @font-size-min;
    }
  }
}
</style>
