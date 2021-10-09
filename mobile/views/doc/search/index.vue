<template>
  <!-- 搜索 -->
  <ul class="m-search">
    <li v-for="item in listData" :key="item.id">
      <div class="u-label">{{ item.label }}</div>
      <me-search
        v-model="item.value"
        :placeholder="item.placeholder"
        :btn-text="item.btnText"
        :align="item.align"
        :radius="item.radius"
        :background="item.background"
        :color="item.color"
        :disabled="item.disabled"
        @on-search="onSearch"
        @on-click="onClick"
      ></me-search>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useHandlerClick } from "./hooks";

export default defineComponent({
  setup() {
    const { listData, onSearch, onClick } = useHandlerClick();
    return { listData, onSearch, onClick };
  }
});
</script>
<style scoped lang="less">
.m-search {
  cursor: pointer;
  > li {
    margin-bottom: 10px;
    .u-label {
      width: 100%;
      margin-bottom: 10px;
      color: @font-color-reduce;
      font-size: @font-size-min;
    }
    :deep(.me-search) {
      :deep(.u-input[disabled="disabled"]) {
        cursor: not-allowed;
      }
    }
  }
}
</style>
