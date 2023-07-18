<template>
  <!-- 单选框组 -->
  <div class="me-radio-group" :class="{ inline: direction === 'horizontal' }">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'MeRadioGroup',
  props: {
    /**
     * v-model 值
     */
    value: {
      type: [String, Number],
      default: ''
    },
    /**
     * 排列方向
     */
    direction: {
      type: String,
      default: '' // vertical | horizontal
    }
  },
  data() {
    return {
      /**
       * 当前 value 值
       */
      currentValue: this.value
    }
  },
  methods: {
    /**
     * 更新子组件状态
     */
    updateValue() {
      this.$children.forEach(elem => elem.setStatus())
    },
    /**
     * 改变触发
     */
    onChange(data) {
      this.$emit('input', data)
      this.$emit('on-change', data)
    }
  },
  watch: {
    /**
     * 监听 vue 变化
     */
    value(value) {
      this.currentValue = value
      /**
       * 更新子组件状态
       */
      this.updateValue()
    }
  }
}
</script>
