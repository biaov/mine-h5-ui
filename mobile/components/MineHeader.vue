<template>
  <!-- 头部 -->
  <div class="g-header">
    <!-- 返回按钮 -->
    <router-link :to="{name:'index'}" class="u-return">
      <me-icon name="icon-left" color="#949494" size="20px"></me-icon>
    </router-link>
    <!-- 头部内容 -->
    <h3 class="u-title">
      <slot></slot>
    </h3>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
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
  border-bottom: 1px solid rgba(34, 34, 34, 0.1);
  background: rgba(255, 255, 255, 0.9);
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
  .u-title {
    .clamp();
    .same-height;
    width: 100%;
    padding: 0 40px;
    color: @font-color;
    font-size: 16px;
  }
}
</style>