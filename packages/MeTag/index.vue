<template>
  <!-- 标签 -->
  <div class="me-tag" :class="[type, plain && 'plain']" :style="`width:${width}px;height:${height}px;border-color:${color};border-radius:${radius}px;background:${color};color:${textColor};`">
    <div class="u-txt">
      <span>{{ text }}</span>
      <i class="iconfont icon-baseline-close-px" @click="onClose" v-if="closeable"></i>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useHandler } from './hooks'

export default defineComponent({
  name: 'MeTag',
  emits: ['on-close'],
  props: {
    // 类型
    type: {
      type: String,
      default: 'primary' // primary|success|info|warning|danger
    },
    // 空心
    plain: {
      type: Boolean,
      default: false
    },
    // 倒角
    radius: {
      type: Number,
      default: 4
    },
    // 宽度
    width: {
      type: Number
    },
    // 高度
    height: {
      type: Number,
      default: 24
    },
    // 标签颜色
    color: {
      type: String,
      default: ''
    },
    // 标签内容
    text: {
      type: String,
      default: '标签'
    },
    // 文本颜色
    textColor: {
      type: String,
      default: ''
    },
    // 关闭状态
    closeable: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    const { onClose } = useHandler(emit)
    return { onClose }
  }
})
</script>
