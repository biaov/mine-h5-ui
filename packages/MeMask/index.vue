<template>
  <!-- 遮罩层 -->
  <div class="me-mask" :class="{ show: isShow }" @click="hideMask" v-show="isShowMask">
    <slot :class="{ on: isShow }" @click.stop></slot>
  </div>
</template>
<script>
export default {
  name: 'MeMask',
  props: {
    // v-model 的绑定主
    value: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isShowMask: false, // 是否显示模态框
      isShow: false // 是否显示模态框的过渡动画
    }
  },
  methods: {
    // 显示模态框
    showMask() {
      const that = this
      that.isShowMask = true
      setTimeout(() => {
        that.isShow = true
      }, 100)
    },
    // 隐藏模态框
    hideMask() {
      const that = this
      that.isShow = false
      setTimeout(() => {
        that.isShowMask = false
        that.$emit('input', false)
      }, 400)
    }
  },
  watch: {
    // 监听是否显示弹出层参数
    value(value) {
      const { showMask, hideMask } = this
      value ? showMask() : hideMask()
    }
  }
}
</script>
