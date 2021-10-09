<template>
  <!-- 宫格 -->
  <div class="m-grid">
    <me-grid border-color="#d9d9d9" :cols="3">
      <me-grid-item v-for="item in grids" :key="item.icon" v-bind="item" @on-click="handleLi(item)"></me-grid-item>
      <me-grid-item>
        <div class="u-cust">
          <me-icon name="icon-love" color="#999" size="28px"></me-icon>
          <p>自定义</p>
        </div>
      </me-grid-item>
    </me-grid>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useHandlerClick } from "./hooks";

export default defineComponent({
  setup() {
    const { grids, handleLi } = useHandlerClick();
    return { grids, handleLi };
  }
});
</script>
<style scoped lang="less">
.m-grid {
  // 自定义内容
  .u-cust {
    :deep(.me-icon) {
      position: relative;
      display: block;
      margin: 0 auto 5px;
      &::after {
        content: "";
        position: absolute;
        top: -4px;
        right: 20px;
        border-radius: 50%;
        width: 14px;
        height: 14px;
        background: #f66;
      }
    }
  }
}
</style>
