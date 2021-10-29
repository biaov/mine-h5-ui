<template>
  <!-- 按钮 -->
  <button
    :type="nativeType"
    class="me-btn"
    :class="`me-btn-${type} ${plain ? 'me-btn-plain' : ''} ${disabled ? 'disabled' : ''}`"
    :style="`width:${width}; color:${type === 'default' || plain ? color : '#fff'}; background:${!plain ? color : '#fff'}; border-color:${color};`"
    @click="onClick"
  >
    <me-icon :name="icon" :color="`${type === 'default' || plain ? color : '#fff'}`" size="16px" v-if="icon"></me-icon>
    <slot></slot>
  </button>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import MeIcon from "../MeIcon";
import { useHandler } from "./hooks";

export default defineComponent({
  name: "MeButton",
  components: {
    MeIcon
  },
  props: {
    // 原生 button 标签的 type 属性
    nativeType: {
      type: String,
      default: "button" // button|reset|submit
    },
    // 宽度
    width: {
      type: String,
      default: ""
    },
    // 类型
    type: {
      type: String,
      validator: (value: string) => value === "default" || value === "primary" || value === "success" || value === "info" || value === "warning" || value === "danger",
      default: "default"
    },
    // 朴素按钮
    plain: {
      type: Boolean
    },
    // 禁用状态
    disabled: {
      type: Boolean
    },
    // 图标按钮
    icon: {
      type: String,
      default: ""
    },
    // 自定义颜色
    color: {
      type: String,
      default: ""
    }
  },
  setup() {
    const { onClick } = useHandler();
    return { onClick };
  }
});
</script>
