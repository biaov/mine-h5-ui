<template>
  <!-- 开关 -->
  <ul class="m-switch">
    <li v-for="item in listData" :key="item.id">
      <div class="u-label">{{ item.label }}</div>
      <me-switch
        v-model="item.value"
        :size="item.size"
        :active-color="item.activeColor"
        :inactive-color="item.inactiveColor"
        :disabled="item.disabled"
        :async="item.async"
        @on-click="onClick(item)"
      ></me-switch>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useHandlerClick } from "./hooks";

export default defineComponent({
  setup() {
    const { listData, onClick } = useHandlerClick();
    return { listData, onClick };
  }
});
</script>
<style scoped lang="less">
.m-switch {
  cursor: pointer;
  &.disabled {
    cursor: not-allowed;
  }
  > li {
    margin-bottom: 10px;
    .u-label {
      width: 100%;
      margin-bottom: 10px;
      color: @font-color-reduce;
      font-size: @font-size-min;
    }
    :deep(.me-switch) {
      margin-bottom: 20px;
    }
  }
}
</style>
