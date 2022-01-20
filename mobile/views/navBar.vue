<template>
  <!-- 导航栏 -->
  <div class="m-navbar">
    <div class="u-label">基础用法</div>
    <me-nav-bar title="标题" left-text="返回" right-text="按钮" @click-left="handleClick('返回')" @click-right="handleClick('按钮')"></me-nav-bar>
    <div class="u-label">使用插槽</div>
    <me-nav-bar title="标题" :left-arrow="false" @click-left="handleClick('返回')">
      <me-icon name="icon-search1" size="20px" color="#409eff" @on-click="handleClick('搜索')"></me-icon>
    </me-nav-bar>
    <div class="u-label">自定义样式</div>
    <me-nav-bar title="标题" left-text="返回" right-text="自定义" @click-left="handleClick('返回')" :styles="styles" @click-right="handleClick('自定义')"></me-nav-bar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 自定义样式
      styles: {
        borderColor: "#008fff", // 边框颜色
        background: "linear-gradient(-45deg, #4bb0ff, #6149f6)", // 背景颜色
        titleColor: "#f56c6c", // 标题颜色
        leftColor: "#aedbff", // 左侧按钮颜色
        rightColor: "#fff" // 右侧按钮颜色
      }
    };
  },
  methods: {
    // 点击导航栏
    handleClick(tips) {
      this.$MeToast(`你点击了${tips}`);
    }
  }
};
</script>
<style scoped lang="less">
.m-navbar {
  min-height: calc(100vh - 75px);
  background: @bg-color;
  .u-label {
    width: 100%;
    line-height: 40px;
    padding-left: 15px;
    color: @font-color-reduce;
    font-size: @font-size-min;
  }
  .me-nav-bar {
    margin-bottom: 10px;
    .me-icon {
      display: block;
      text-align: right;
      height: 44px;
      line-height: 44px;
      padding: 0 15px;
    }
  }
}
</style>