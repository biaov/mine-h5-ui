<template>
  <!-- 导航栏 -->
  <div class="me-nav-bar" :style="`background:${styles.background};border-bottom-color:${styles.borderColor};`">
    <!-- 左侧按钮 -->
    <div class="u-lf" @click="handleClick($event,'left')" :style="`color:${styles.leftColor};`">
      <i class="iconfont icon-left" v-if="leftArrow"></i>
      <span>{{leftText}}</span>
    </div>
    <!-- 中间标题 -->
    <h2 class="u-tit" :style="`color:${styles.titleColor};`">{{title}}</h2>
    <!-- 右侧按钮 -->
    <div class="u-rt">
      <div class="u-btn" v-if="rightText" @click="handleClick($event,'right')" :style="`color:${styles.rightColor};`">{{rightText}}</div>
      <slot v-else></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "MeNavBar",
  props: {
    // 标题
    title: {
      type: String,
      default: ""
    },
    // 左侧按钮箭头显示状态
    leftArrow: {
      type: Boolean,
      default: true
    },
    // 左侧按钮文本
    leftText: {
      type: String,
      default: ""
    },
    // 右侧按钮文本
    rightText: {
      type: String,
      default: ""
    },
    // 组件样式
    styles: {
      type: Object,
      default() {
        return {
          borderColor: "#dcdfe6", // 边框颜色
          background: "#fff", // 背景颜色
          titleColor: "#494949", // 标题颜色
          leftColor: "#949494", // 左侧按钮颜色
          rightColor: "#949494" // 右侧按钮颜色
        };
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    // 点击左侧按钮
    handleClick(e, name) {
      this.$emit(`click-${name}`, e);
    }
  }
};
</script>