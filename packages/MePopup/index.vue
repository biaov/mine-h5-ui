<template>
  <!-- 弹出层 -->
  <div class="me-popup" :class="{ show: isShow }" :style="`background:rgba(0,0,0,${modal ? 0.7 : 0});`" @click="hideMask" v-show="isShowMask">
    <div :class="position" :style="setRadius" @click.stop>
      <me-icon name="icon-baseline-close-px" size="20px" @on-click="hideMask" v-if="closeable"></me-icon>
      <slot></slot>
    </div>
  </div>
</template>
<script>
import MeIcon from '~/MeIcon'
export default {
  name: 'MePopup',
  components: {
    MeIcon
  },
  model: {
    prop: 'visible',
    event: 'input'
  },
  props: {
    // 是否显示弹出层
    visible: {
      type: Boolean,
      default: false
    },
    // 是否显示模态框
    modal: {
      type: Boolean,
      default: true
    },
    // 弹出位置
    position: {
      type: String,
      default: 'center'
    },
    // 是否显示关闭图标
    closeable: {
      type: Boolean,
      default: false
    },
    // 倒角数值
    radius: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isShowMask: false, // 是否显示模态框
      isShow: false // 是否显示模态框的过渡动画
    }
  },
  computed: {
    // 设置倒角
    setRadius() {
      let radiusStyle = ''
      const { position, radius } = this
      switch (position) {
        case 'top':
          radiusStyle = `0px 0px ${radius} ${radius}`
          break
        case 'right':
          radiusStyle = `${radius} 0px 0px ${radius}`
          break
        case 'bottom':
          radiusStyle = `${radius} ${radius} 0px 0px`
          break
        case 'left':
          radiusStyle = `0px ${radius} ${radius} 0px`
          break
      }
      return `border-radius:${radiusStyle};`
    }
  },
  methods: {
    // 显示模态框
    showMask() {
      this.isShowMask = true
      setTimeout(() => {
        this.isShow = true
      }, 100)
    },
    // 隐藏模态框
    hideMask() {
      this.isShow = false
      setTimeout(() => {
        this.isShowMask = false
        this.$emit('input', false)
        this.$emit('on-cancel')
      }, 400)
    }
  },
  watch: {
    // 监听是否显示弹出层参数
    visible(value) {
      value ? this.showMask() : this.hideMask()
    }
  }
}
</script>
