<template>
  <!-- 添加复制功能 -->
  <div class="m-copy" ref="copy">
    <slot name="highlight"></slot>
    <me-icon name="icon-copy" class="u-btn" @on-click="onCopy" title="复制"></me-icon>
    <div class="m-more" @click="isShowMore=!isShowMore" v-if="isMore">
      <me-icon :name="`icon-down2 ${isShowMore?'active':''}`" size="20px" color="inherit"></me-icon><span>{{isShowMore?"隐藏更多":"显示更多"}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DemoBlock",
  data() {
    return {
      copyText: "", // 需要复制之后的内容
      isShowMore: false, // 是否显示更多
      isMore: false // 是否需要显示更多操作
    };
  },
  methods: {
    // 点击复制按钮
    onCopy() {
      const { $copyText, $api, $slots, $MeToast } = this;
      $copyText($api.GetNodeText($slots.highlight))
        .then(() => {
          $MeToast("复制成功");
        })
        .catch(() => {
          $MeToast("复制失败");
        });
    }
  },
  mounted() {
    const copyStyle = this.$refs.copy.style; // 获取DOM节点style属性
    // 判断是否超过最低限制高度
    if (this.$slots.highlight[0].elm.offsetHeight > 200) {
      this.isMore = true;
      copyStyle.height = "200px";
      copyStyle.paddingBottom = "50px";
    } else {
      this.isMore = false;
      copyStyle.height = "auto";
      copyStyle.paddingBottom = "0px";
    }
  },
  watch: {
    // 监听isShowMore属性
    isShowMore(value) {
      const copyStyle = this.$refs.copy.style; // 获取DOM节点style属性
      if (value) {
        // 设置高度自动为内容高度
        copyStyle.height = this.$slots.highlight[0].elm.offsetHeight + 50 + "px";
      } else {
        // 设置基础高度为200px
        copyStyle.height = "200px";
      }
    }
  }
};
</script>

<style scoped lang="less">
.m-copy {
  position: relative;
  width: 100%;
  overflow: hidden;
  transition: all 1s;
  .u-btn {
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 0 0 4px 4px;
    padding: 10px;
    color: @font-color-reduce;
    transition: all 0.4s;
    font-size: 18px;
    cursor: pointer;
    &:hover {
      color: @font-color;
    }
  }
  .m-more {
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 50px;
    line-height: 50px;
    color: transparent;
    background: rgba(34, 34, 34, 0.05);
    font-size: @font-size;
    transition: color 0.4s;
    cursor: pointer;
    &:hover {
      color: @color-primary;
    }
    .me-icon {
      transition: transform 0.4s;
      transform: rotate(0deg);
      &.active {
        transform: rotate(-180deg);
      }
    }
  }
  pre {
    margin: 0;
  }
}
</style>
