<template>
  <!-- 搜索 -->
  <div class="me-search" :style="`border-radius:${radius};background:${background};color:${color};`">
    <me-icon name="icon-search1" size="15px" color="inherit"></me-icon>
    <input
      type="search"
      class="u-input"
      v-model="inputVal"
      @focus="onEvent('on-focus', $event)"
      @blur="onEvent('on-blur', $event)"
      @keypress="onKeypress"
      @input="onEvent('on-input', $event)"
      @change="onEvent('on-change', $event)"
      :placeholder="placeholder"
      :style="`text-align:${align};`"
      :disabled="disabled"
    />
    <transition name="fade">
      <me-icon name="icon-close" size="16px" color="inherit" @on-click="onClean" v-if="modelValue"></me-icon>
    </transition>
    <div class="u-btn" @click="handleBtn" v-if="btnText">{{ btnText }}</div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useSearch, useBtns } from "./hooks";
import MeIcon from "../MeIcon";

export default defineComponent({
  name: "MeSearch",
  components: {
    MeIcon
  },
  props: {
    // v-model绑定值
    modelValue: {
      type: String,
      required: true
    },
    // 占位符
    placeholder: {
      type: String,
      default: "请搜索"
    },
    // 右侧按钮内容
    btnText: {
      type: String,
      default: ""
    },
    // 搜索框对齐方式
    align: {
      type: String,
      default: "left" // left|center|right|justify|inherit
    },
    // 搜索框倒角
    radius: {
      type: String,
      default: "4px"
    },
    // 搜索框背景色
    background: {
      type: String,
      default: ""
    },
    // 字体颜色
    color: {
      type: String,
      default: ""
    },
    // 是否禁用输入框
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const { inputVal, onKeypress, onEvent } = useSearch(props);
    const { onClean, handleBtn } = useBtns();
    return { inputVal, onKeypress, onEvent, onClean, handleBtn };
  }
});
</script>
