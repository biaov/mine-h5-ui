<template>
  <!-- 滑块 -->
  <ul class="m-slider">
    <li v-for="item in listData" :key="item.id">
      <div class="u-label">{{ item.label }}</div>
      <me-slider v-model="item.value" :max="item.max" :min="item.min" :styles="item.styles" :is-btn="item.isBtn" :disabled="item.disabled">
        <div class="u-btn" v-if="item.isBtn">{{ item.value }}</div>
      </me-slider>
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
.m-slider {
  cursor: pointer;
  > li {
    margin-bottom: 10px;
    .u-label {
      width: 100%;
      margin-bottom: 10px;
      color: @font-color-reduce;
      font-size: @font-size-min;
    }
    :deep(.me-slider) {
      .m-drag {
        cursor: grab;
      }
      &[aria-disabled="true"] :deep(.m-drag) {
        cursor: not-allowed;
      }
      .u-btn {
        width: 30px;
        height: 30px;
        line-height: 30px;
        border-radius: 3px;
        background: #f60;
        text-align: center;
        color: #fff;
        font-size: 12px;
      }
    }
  }
}
</style>
