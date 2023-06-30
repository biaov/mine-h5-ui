<template>
  <!-- 对话框 -->
  <div class="me-dialog" :class="{ show: isShow }" @click="hideMask" v-show="isShowMask" :style="`--animation-duration:${animationDuration}ms;`">
    <div class="picker" :class="{ show: isShow }" @click.stop>
      <!-- 提示语 -->
      <h3 class="tips">{{ tips }}</h3>
      <!-- 内容 -->
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { DefaultSlots } from '../types'
import { useShow } from './hooks'
import type { Props, Emits } from './types'

defineOptions({
  name: 'MeDialog'
})

defineSlots<DefaultSlots>()

const emit = defineEmits<Emits>()

const props = withDefaults(defineProps<Props>(), {
  visible: false,
  tips: '提示'
})

const { isShowMask, isShow, hideMask, animationDuration } = useShow(props, emit)
</script>
