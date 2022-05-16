<template>
  <!-- 单元格 -->
  <div class="me-cell" :class="{ bottom }" :style="getStyle" @click="onClick">
    <div class="lf">
      <slot name="left">
        <me-icon :name="icon" size="20px" v-if="icon"></me-icon>
        <span>{{ title }}</span>
      </slot>
    </div>
    <div class="rt">
      <slot name="right">
        <span :class="{ placeholder }">{{ value || placeholder }}</span>
        <me-icon name="icon-right1" v-if="arrow"></me-icon>
      </slot>
    </div>
  </div>
</template>
<script>
import MeIcon from '../MeIcon'
export default {
  name: 'MeCell',
  components: {
    MeIcon
  },
  props: {
    // 标题
    title: {
      type: String,
      default: ''
    },
    // 内容
    value: {
      type: [String, Number],
      default: ''
    },
    // 图标名称
    icon: {
      type: String,
      default: ''
    },
    // 图标颜色
    iconColor: {
      type: String,
      default: '#494949'
    },
    // 占位符
    placeholder: {
      type: String,
      default: ''
    },
    // 箭头的显示状态
    arrow: {
      type: Boolean,
      default: false
    },
    // 高度
    height: {
      type: String,
      default: '100%'
    },
    // 底部边框的显示状态
    bottom: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
  computed: {
    // 样式
    getStyle() {
      return `height:${this.height};--icon-color:${this.iconColor};`
    }
  },
  methods: {
    // 点击
    onClick(e) {
      this.$emit('on-click', e)
    }
  }
}
</script>
