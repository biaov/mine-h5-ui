<template>
  <!-- 按钮 -->
  <ul class="m-button">
    <li v-for="item in listData" :key="item.id">
      <div class="u-label">{{ item.label }}</div>
      <me-button v-for="it in item.btns" :key="it.id" :type="it.type" :plain="!!it.plain" :disabled="!!it.disabled" :color="!it.color ? '' : it.color" :icon="!it.icon ? '' : it.icon">
        {{ it.value }}
      </me-button>
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
:deep(.me-btn) {
  cursor: pointer;
}
.m-button {
  > li {
    .clear-flex();
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 10px;
    .u-label {
      width: 100%;
      margin-bottom: 10px;
      color: @font-color-reduce;
      font-size: @font-size-min;
    }
    :deep(.me-btn) {
      margin-bottom: 10px;
    }
  }
}
</style>
