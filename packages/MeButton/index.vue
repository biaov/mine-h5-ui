<template>
  <!-- 按钮 -->
  <div class="me-btn" :class="`me-btn-${type} ${plain?'me-btn-plain':''} ${disabled?'disabled':''}`" :style="`width:${width}; color:${type==='default'||plain?color:'#fff'}; background:${!plain?color:'#fff'}; border-color:${color};`" @click="$emit('on-click')">
    <me-icon :name="icon" :color="`${type==='default'||plain?color:'#fff'}`" v-if="!!icon"></me-icon>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "MeButton",
  props: {
    // 宽度
    width: {
      type: String,
      default: ""
    },
    // 类型
    type: {
      validator: value => value === "default" || value === "primary" || value === "success" || value === "info" || value === "warning" || value === "danger",
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
  data() {
    return {};
  }
};
</script>