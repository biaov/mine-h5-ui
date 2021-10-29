<template>
  <!-- 单选框 -->
  <div class="me-radio" @click="handleClick" :aria-checked="isChecked + ''" :aria-disabled="disabled + ''">
    <me-icon :name="iconName" :color="isChecked ? checkedColor : ''" :size="iconSize"></me-icon>
    <div class="u-value">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import MeIcon from "../MeIcon";
import { useHandler } from "./hooks";

export default defineComponent({
  name: "MeRadio",
  components: {
    MeIcon
  },
  props: {
    // v-model的值
    modelValue: {
      type: Boolean,
      default: false
    },
    // 单选框索引名称
    name: {
      type: [String, Number]
    },
    // 图标形状
    shape: {
      type: String,
      default: "round" // square|round
    },
    // 自定义图标
    icon: {
      type: String,
      default: ""
    },
    // 自定义选中图标
    iconSelect: {
      type: String,
      default: ""
    },
    // 图标大小
    iconSize: {
      type: String,
      default: "20px"
    },
    // 选中状态颜色
    checkedColor: {
      type: String,
      default: ""
    },
    // 禁用状态
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const { isChecked, iconName, handleClick, setStatus } = useHandler(props);
    return { isChecked, iconName, handleClick, setStatus };
  }
});
</script>
