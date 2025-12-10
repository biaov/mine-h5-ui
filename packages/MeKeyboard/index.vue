<script lang="ts" setup>
import MeIcon from '../MeIcon/index.vue'
import { useHandler, usePadding } from './hooks'
import type { Props, Emits } from './types'

defineOptions({
  name: 'MeKeyboard'
})

const emit = defineEmits<Emits>()

const props = withDefaults(defineProps<Props>(), {
  skinType: 'gray',
  skinStyle: () => ({
    bgc: '',
    textBgc: '',
    color: ''
  }),
  isPadding: true
})
/**
 * 数字输入显示状态
 */
const visibleModel = defineModel<boolean>('visible', { default: false })

const { isActive } = usePadding({ props, visibleModel })
const { onClick, onDelete, onComplate } = useHandler({ emit, visibleModel })
</script>

<template>
  <!-- 数字键盘 -->
  <ul class="me-keyboard" :class="`me-keyboard-${skinType} ${visibleModel ? 'show' : ''} ${isActive ? 'me-keyboard-active' : ''}`" @click.stop>
    <li v-for="item in 9" :key="item" @click="onClick(item)">{{ item }}</li>
    <li class="complate" @click="onComplate">完成</li>
    <li @click="onClick(0)">0</li>
    <li @click="onDelete">
      <me-icon name="icon-delete" />
    </li>
  </ul>
</template>
