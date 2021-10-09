<template>
  <!-- 手风琴选项 -->
  <div class="me-accordion-item">
    <!-- 头部区域 -->
    <div class="m-hd" @click="onClick" :style="`border-bottom-color:${borderColor};`">
      <h3>{{ label }}</h3>
      <i class="iconfont icon-right1" :class="{ open: isShow }"></i>
    </div>
    <!-- 内容区域 -->
    <div class="m-bd" :style="`height:${curHeight}px;`">
      <div ref="accordionItemCont">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useHandler } from "./hooks";

export default defineComponent({
  name: "MeAccordionItem",
  props: {
    // 标题
    label: {
      type: String,
      required: true
    },
    // index值
    name: {
      type: [Number, String],
      required: true
    },
    // 下边框颜色
    borderColor: {
      type: String,
      default: "#dcdfe6"
    }
  },
  setup(props) {
    const { accordionItemCont, isShow, curHeight, onClick } = useHandler(props);
    return { accordionItemCont, isShow, curHeight, onClick };
  }
});
</script>
