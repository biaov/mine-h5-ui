<template>
  <!-- 开关 -->
  <div class="me-switch" :class="{ 'me-switch-on': isActived }" :aria-disabled="disabled" @click="handleClick" :style="`font-size:${size};`">
    <span class="u-round"></span>
  </div>
</template>
<script>
export default {
  name: 'MeSwitch',
  props: {
    // v-model绑定值
    value: {
      type: Boolean,
      default: false
    },
    // 自定义大小
    size: {
      type: String,
      default: '' // 30px
    },
    // 自定义激活颜色
    activeColor: {
      type: String,
      default: ''
    },
    // 自定义未激活颜色
    inactiveColor: {
      type: String,
      default: ''
    },
    // 异步状态
    async: {
      type: Boolean,
      default: false
    },
    // 禁用状态
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isActived: this.value // 激活状态
    }
  },
  methods: {
    // 点击 Switch 开关
    handleClick() {
      const { disabled, async, isActived } = this
      // 判断是否被禁用
      if (!disabled) {
        // 判断是否异步
        !async && this.$emit('input', !isActived)
        this.$emit('on-click')
      }
    },
    // 设置自定义颜色
    setColor() {
      const { activeColor, inactiveColor, isActived, $el } = this
      // 判断是否处于未激活状态
      if (activeColor && isActived) {
        $el.style.background = activeColor
      } else if (inactiveColor && !isActived) {
        $el.style.background = inactiveColor
      }
    }
  },
  mounted() {
    this.setColor()
  },
  watch: {
    // 监听value的值
    value(value) {
      this.isActived = value
      this.setColor()
    }
  }
}
</script>
