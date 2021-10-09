<template>
  <!-- 标签页 -->
  <div class="me-tab">
    <!-- 标签组 -->
    <div class="m-tabs" ref="tabsDom">
      <div
        class="m-tab-item"
        v-for="item in tabList"
        :key="item.name"
        :class="{ active: modelValue === item.name }"
        @click="onClick(item)"
        :style="`color:${modelValue === item.name ? activeColor : color};`"
      >
        {{ item.label }}
      </div>
      <div class="u-line-bt" :style="`transform:translateX(${transX * (curIndex * 2 + 1)}px) translateX(-50%);transition-duration:${duration}s;background:${lineColor};`"></div>
    </div>
    <!-- slot 内容 -->
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useInitSlots } from "./hooks";

export default defineComponent({
  name: "MeTab",
  props: {
    // v-model绑定值
    modelValue: {
      type: [String, Number],
      required: true
    },
    // 未聚焦时的颜色
    color: {
      type: String,
      default: "#949494"
    },
    // 聚焦时显示的颜色
    activeColor: {
      type: String,
      default: "#494949"
    },
    // 位移边框颜色
    lineColor: {
      type: String,
      default: "#f56c6c"
    }
  },
  setup(props) {
    const { tabsDom, tabList, transX, duration, initTranslateX, curIndex, onClick } = useInitSlots(props);
    return { tabsDom, tabList, transX, duration, initTranslateX, curIndex, onClick };
  }
});
</script>
