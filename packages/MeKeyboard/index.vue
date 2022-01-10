<template>
  <!-- 数字键盘 -->
  <ul class="me-keyboard" :class="`me-keyboard-${skinType} ${visible ? 'show' : ''} ${isActive ? 'me-keyboard-active' : ''}`" @click.stop>
    <li v-for="item in 9" :key="item" @click="onClick(item)">{{ item }}</li>
    <li @click="onComplate" class="u-complate">完成</li>
    <li @click="onClick(0)">0</li>
    <li @click="onDelete">
      <me-icon name="icon-delete"></me-icon>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import MeIcon from '../MeIcon'
import { SkinStyleValue } from './interfaces'
import { useHandler, usePadding } from './hooks'

export default defineComponent({
  name: 'MeKeyboard',
  components: {
    MeIcon
  },
  emits: ['update:visible', 'on-click', 'on-delete', 'on-complate'],
  props: {
    // 数字输入显示状态
    visible: {
      type: Boolean,
      default: false
    },
    // 系统皮肤样式
    skinType: {
      type: String,
      default: 'gray' // gray | dark
    },
    // 自定义皮肤样式
    skinStyle: {
      type: Object as PropType<SkinStyleValue>,
      default: () => ({
        bgc: '', // 背景色
        textBgc: '', // 文本背景
        color: '' // 字体颜色
      })
    },
    // 是否动态改变 padding
    isPadding: {
      type: Boolean,
      default: true
    }
  },
  setup(props, { emit }) {
    const { isActive } = usePadding(props, emit)
    const { onClick, onDelete, onComplate } = useHandler(emit)
    return { isActive, onClick, onDelete, onComplate }
  }
})
</script>
