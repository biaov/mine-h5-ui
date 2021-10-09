<template>
  <!-- 手风琴 -->
  <div class="m-accordion">
    <div class="u-label">基础用法</div>
    <me-accordion v-model="accordionActive">
      <me-accordion-item v-for="(item, index) in listData" :key="index" :label="item.label" :name="index">
        <div v-html="item.html"></div>
      </me-accordion-item>
    </me-accordion>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useWebData } from "./hooks";

export default defineComponent({
  setup() {
    const { accordionActive, listData } = useWebData();
    return { accordionActive, listData };
  }
});
</script>
<style scoped lang="less">
.m-accordion {
  .u-label {
    width: 100%;
    margin-bottom: 10px;
    color: @font-color-reduce;
    font-size: @font-size-min;
  }
  :deep(.me-accordion-item) {
    .m-hd {
      cursor: pointer;
    }
    p {
      line-height: 24px;
      margin-bottom: 5px;
      text-indent: 2em;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
