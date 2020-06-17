<template>
  <!-- 搜索 -->
  <div class="me-search" :style="`border-radius:${radius};background:${background};color:${color};`">
    <me-icon name="icon-search1" size="15px" color="inherit"></me-icon>
    <input type="search" class="u-input" v-model="inputVal" @focus="onEvent('on-focus',$event)" @blur="onEvent('on-blur',$event)" @keypress="onKeypress" @input="onEvent('on-input',$event)" @change="onEvent('on-change',$event)" :placeholder="placeholder" :style="`text-align:${align};`" :disabled="disabled">
    <transition name="fade">
      <me-icon name="icon-close" size="16px" color="inherit" @on-click="onClean" v-if="value"></me-icon>
    </transition>
    <div class="u-btn" @click="handleBtn" v-if="btnText">{{btnText}}</div>
  </div>
</template>
<script>
import MeIcon from "~/MeIcon";
export default {
  name: "MeSearch",
  components: {
    MeIcon
  },
  props: {
    // v-model绑定值
    value: {
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
  data() {
    return {
      inputVal: this.value // 输入框值
    };
  },
  methods: {
    // 点击清理按钮
    onClean() {
      this.$emit("input", "");
    },
    // 点击软键盘的搜索/回车按钮
    onKeypress(e) {
      e.keyCode === 13 && this.$emit("on-search");
    },
    // 点击自定义按钮
    handleBtn() {
      this.$emit("on-click");
    },
    // 搜索框聚焦时触发
    onEvent(name, e) {
      this.$emit(name, e);
    }
  },
  watch: {
    // 监听参数value的变化
    value(value) {
      this.inputVal = value; // 设置value
    },
    // 监听输入框的值的变化
    inputVal(value) {
      this.$emit("input", value);
    }
  }
};
</script>