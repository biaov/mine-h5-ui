<template>
  <!-- 标签选项 -->
  <div class="me-step-item" :class="[parentProps.direction, parentProps.type, isActive ? 'active' : '']" :style="`color:${isActive ? parentProps.activeColor : parentProps.color};`">
    <!-- 点 -->
    <div class="u-dot" :style="`color:${isActive ? parentProps.activeColor : parentProps.color};`">
      <i class="iconfont" :class="`icon-${parentProps[isActive ? 'activeIcon' : 'icon']}`"></i>
    </div>
    <!-- 线 -->
    <div class="u-line" :style="`background:${isActive ? parentProps.activeColor : parentProps.color};`"></div>
    <!-- 文本 -->
    <div class="u-text" :style="`color:${isActive ? parentProps.activeColor : parentProps.color};`">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MeStepItem',
  props: {
    // 索引名称
    name: {
      type: [String, Number],
      required: true
    }
  },
  data() {
    return {
      isActive: false // 激活状态
    }
  },
  computed: {
    // 父组件参数
    parentProps() {
      const { $options, _props } = this.$parent
      return $options._componentTag === 'me-step' ? _props : {}
    }
  },
  watch: {
    // 监听父组件参数
    parentProps: {
      handler() {
        this.isActive = this.parentProps.active.includes(this.name)
      },
      deep: true,
      immediate: true
    }
  }
}
</script>
