<template>
  <!-- 对话框 -->
  <div class="me-dialog" :class="{show:isShow}" @click="hideMask" v-show="isShowMask">
    <div class="m-picker" :class="{show:isShow}" @click.stop>
      <!-- 提示语 -->
      <h3 class="u-tips">{{tips}}</h3>
      <!-- 内容 -->
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "MeDialog",
  props: {
    // v-model 绑定值
    value: {
      type: Boolean,
      default: false
    },
    // 提示文本
    tips: {
      type: String,
      default: "提示"
    }
  },
  data() {
    return {
      isShowMask: false, // 是否显示模态框
      isShow: false // 是否显示模态框的过渡动画
    };
  },
  methods: {
    // 显示模态框
    showMask() {
      const that = this;
      that.isShowMask = true;
      setTimeout(() => {
        that.isShow = true;
      }, 100);
    },
    // 隐藏模态框
    hideMask() {
      const that = this;
      that.isShow = false;
      setTimeout(() => {
        that.isShowMask = false;
        that.$emit("input", false);
      }, 400);
    }
  },
  watch: {
    // 监听是否显示弹出层参数
    value(value) {
      const { showMask, hideMask } = this;
      value ? showMask() : hideMask();
    }
  }
};
</script>