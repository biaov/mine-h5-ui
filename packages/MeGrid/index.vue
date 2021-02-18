<template>
  <!-- 宫格 -->
  <div class="me-grid">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "MeGrid",
  props: {
    // 一行几个
    cols: {
      type: Number,
      default: 4
    },
    // 边框颜色
    borderColor: {
      type: String,
      default: "#edeff2"
    }
  },
  data() {
    return {};
  },
  methods: {
    // 更新子组件状态
    updateValue() {
      const { cols, $children, borderColor } = this;
      $children.forEach((elem, i) => elem.setData(i, cols, borderColor));
    },
    // 状态改变时触发此方法
    onChange(num) {
      this.$emit("on-change", num);
    }
  },
  mounted() {
    this.updateValue();
  }
};
</script>