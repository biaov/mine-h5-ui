<template>
  <!-- 手风琴  -->
  <div class="me-accordion">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'MeAccordion',
  props: {
    /**
     * v-model 绑定值
     */
    value: {
      type: [Number, String],
      required: true
    }
  },
  data() {
    return {}
  },
  methods: {
    /**
     * 更新子组件状态
     */
    updateValue() {
      this.$children.forEach((elem, i) => {
        elem.setData(i, this.value)
      })
    },
    /**
     * 状态改变时触发此方法
     */
    onChange(active) {
      this.$emit('input', active)
      this.$emit('on-change', active)
      this.$nextTick(this.updateValue)
    }
  },
  mounted() {
    this.updateValue()
  }
}
</script>
