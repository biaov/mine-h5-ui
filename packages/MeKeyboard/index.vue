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
<script lang="ts" setup>
import MeIcon from '../MeIcon'
import { SkinStyleValue } from './interfaces'
import { useHandler, usePadding } from './hooks'

const emit = defineEmits<{
  (event: 'update:visible', bool: boolean): void
  (event: 'on-click', num: number): void
  (event: 'on-delete', e: MouseEvent): void
  (event: 'on-complate', e: MouseEvent): void
}>()

const props = withDefaults(
  defineProps<{
    visible?: boolean // 数字输入显示状态
    skinType?: string // 系统皮肤样式, gray | dark
    skinStyle?: SkinStyleValue // 自定义皮肤样式
    isPadding?: boolean // 是否动态改变 padding
  }>(),
  {
    visible: false,
    skinType: 'gray',
    skinStyle: () => ({
      bgc: '', // 背景色
      textBgc: '', // 文本背景
      color: '' // 字体颜色
    }),
    isPadding: true
  }
)

const { isActive } = usePadding(props, emit)
const { onClick, onDelete, onComplate } = useHandler(emit)
</script>
