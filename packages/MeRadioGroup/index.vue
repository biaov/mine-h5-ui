<template>
  <!-- 单选框组 -->
  <div class="me-radio-group" :class="{inline:direction==='horizontal'}">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "MeRadioGroup",
  props: {
    // v-model值
    value: {
      type: [String, Number],
      default: ""
    },
    // 排列方向
    direction: {
      type: String,
      default: "" // vertical|horizontal
    }
  },
  data() {
    return {
      currentValue: this.value // 当前value值
    };
  },
  methods: {
    // 更新子组件状态
    updateValue() {
      this.$children.forEach(elem => elem.setStatus());
    },
    // 改变触发
    onChange(data) {
      this.$emit("input", data);
      this.$emit("on-change", data);
    }
  },
  watch: {
    // 监听vue变化
    value(value) {
      this.currentValue = value;
      this.updateValue(); // 更新子组件状态
    }
  }
};
</script>