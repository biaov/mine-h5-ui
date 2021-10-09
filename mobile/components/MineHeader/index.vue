<template>
  <!-- 头部组件 -->
  <div class="g-header">
    <router-link :to="{ name: 'Layout' }" class="u-return">
      <me-icon name="icon-left" color="#949494" size="20px"></me-icon>
    </router-link>
    <h3 class="u-tit">
      <slot>演示</slot>
    </h3>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MineHeader",
  setup() {
    return {};
  }
});
</script>
<style scoped lang="less">
@height: 50px;
.g-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  width: 100%;
  height: @height;
  border-bottom: 1px solid @border-color-common;
  background: fade(@color-white, 90%);
  // 相同的高度
  .same-height {
    height: @height;
    line-height: @height;
    text-align: center;
  }
  // 返回按钮
  .u-return {
    .same-height;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 40px;
  }
  // 标题信息
  .u-tit {
    .clamp();
    .same-height;
    width: 100%;
    padding: 0 40px;
    color: @font-color;
    font-size: @font-size + 2px;
  }
}
</style>
