<script lang="ts" setup>
import type { DefaultSlots } from '../types'
import { useShow } from './hooks'
import type { Props } from './types'

defineOptions({
  name: 'MeDialog'
})

defineSlots<DefaultSlots>()

withDefaults(defineProps<Props>(), {
  tips: '提示'
})

/**
 * 显示状态
 */
const visible = defineModel<boolean>('visible', { default: false })

const { isShowMask, isShow, hideMask, animationDuration } = useShow({ visible })
</script>

<template>
  <!-- 对话框 -->
  <div v-show="isShowMask" class="me-dialog" :class="{ show: isShow }" :style="`--animation-duration:${animationDuration}ms;`" @click="hideMask">
    <div class="picker" :class="{ show: isShow }" @click.stop>
      <!-- 提示语 -->
      <h3 class="tips">{{ tips }}</h3>
      <!-- 内容 -->
      <slot></slot>
    </div>
  </div>
</template>
