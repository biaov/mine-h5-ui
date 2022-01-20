<template>
  <!-- 表单 -->
  <form class="me-form" @submit="onSubmit">
    <slot></slot>
  </form>
</template>
<script>
import MeToast from "~/MeToast";
export default {
  name: "MeForm",
  props: {
    // 验证数据
    model: {
      type: Object,
      default: () => ({})
    },
    // 验证规则
    rules: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  methods: {
    // 点击提交按钮按钮
    onSubmit(e) {
      e.preventDefault(); // 取消默认行为，防止form提交
      const { model, rules } = this;
      const arr = Object.keys(model); // 需要校验的属性数组
      const data = {
        valid: true,
        message: "",
        type: "",
        value: model
      }; // 回调参数
      for (let i = 0; i < rules.length; i++) {
        const { type, required, message, validator, pattern } = rules[i];
        // 判断是否该存在属性
        if (arr.includes(type)) {
          // 是否存在验证规则
          if (validator !== undefined || pattern !== undefined || required !== undefined) {
            // 是否通过验证
            const valid = validator !== undefined ? validator(model[type]) : pattern !== undefined ? pattern.test(model[type]) : String(model[type]).trim() !== "";
            // 只要存在验证不通过则结束此次循环
            if (!valid) {
              data.valid = valid; // 验证规则
              data.message = message || ""; // 提示信息
              data.type = type;
              message && MeToast(message); // 是否显示提示
              break;
            }
          }
        }
      }
      this.$emit("on-submit", data);
    }
  }
};
</script>