<template>
  <!-- 复选框组 -->
  <div class="me-checkbox-group" :class="{inline:direction==='horizontal'}">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "MeCheckboxGroup",
  props: {
    // v-model值
    value: {
      type: Array,
      default: () => []
    },
    // 排列方向
    direction: {
      type: String,
      default: "vertical" // vertical|horizontal
    }
  },
  data() {
    return {
      currentValue: [] // 当前value值
    };
  },
  methods: {
    // 更新子组件状态
    updateValue() {
      this.$children.forEach(elem => elem.setStatus());
    },
    // 改变触发
    onChange({ name, isChecked }) {
      const arr = this.currentValue;
      // 判断之前是否选中
      if (isChecked) {
        // 取消选中状态
        arr.splice(arr.indexOf(name), 1);
      } else {
        // 选中状态
        arr.push(name);
      }
      this.$emit("input", arr);
      this.$emit("on-change", arr);
    }
  },
  created() {
    this.currentValue = [...this.value];
  },
  watch: {
    // 监听vue变化
    value: {
      handler(value) {
        this.currentValue = value;
        this.updateValue(); // 更新子组件状态
      },
      deep: true
    }
  }
};
</script>
