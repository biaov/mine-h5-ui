<template>
  <!-- 轮播图 -->
  <ul class="m-swiper">
    <li v-for="({ label, loop, height, children, dot }, index) in listData" :key="index">
      <div class="u-label">{{ label }}</div>
      <me-swiper v-bind="{ loop, height, dot }">
        <me-swiper-item v-for="(it, i) in children" :key="i" :name="i" v-bind="it"></me-swiper-item>
      </me-swiper>
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
.m-swiper {
  > li {
    .u-label {
      width: 100%;
      margin-bottom: 10px;
      color: @font-color-reduce;
      font-size: @font-size-min;
    }
    :deep(.me-swiper) {
      margin-bottom: 15px;
      cursor: grab;
    }
  }
}
</style>
