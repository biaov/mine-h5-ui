<template>
  <!-- 标签 -->
  <div class="me-tag" :class="[type, plain && 'plain']" :style="`width:${width}px;height:${height}px;border-color:${color};border-radius:${radius}px;background:${color};color:${textColor};`">
    <div class="txt">
      <span>{{ text }}</span>
      <i class="iconfont icon-baseline-close-px" @click="onClose" v-if="closeable"></i>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useHandler } from './hooks'

const emit = defineEmits<{
  (event: 'close', e: MouseEvent): void
}>()

withDefaults(
  defineProps<{
    type?: string // 类型, primary | success | info | warning | danger
    plain?: boolean // 空心
    radius?: number // 倒角
    width?: number // 宽度
    height?: number // 高度
    color?: string // 标签颜色
    text?: string // 标签内容
    textColor?: string // 文本颜色
    closeable?: boolean // 关闭状态
  }>(),
  {
    type: 'primary',
    plain: false,
    radius: 4,
    height: 24,
    color: '',
    text: '标签',
    textColor: '',
    closeable: false
  }
)

const { onClose } = useHandler(emit)
</script>
