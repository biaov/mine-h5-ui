<template>
  <!-- 图标 -->
  <i class="iconfont me-icon" :class="name" :style="`color:${color};font-size:${size};`" @click="onClick"></i>
</template>
<script>
export default {
  name: "MeIcon",
  props: {
    // class名称
    name: {
      type: String,
      required: true
    },
    // 图标颜色
    color: {
      type: String,
      default: ""
    },
    // 图标大小
    size: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  methods: {
    // 点击图标
    onClick(e) {
      this.$emit("on-click", e);
    }
  }
};
</script>