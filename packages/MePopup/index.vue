<script lang="ts" setup>
import type { DefaultSlots } from '../types'
import { useMask, useRadius } from './hooks'
import MeIcon from '../MeIcon/index.vue'
import type { Props, Emits } from './types'

defineOptions({
  name: 'MePopup'
})

defineSlots<DefaultSlots>()

const emit = defineEmits<Emits>()

const props = withDefaults(defineProps<Props>(), {
  modal: true,
  position: 'center',
  closeable: false,
  radius: ''
})

/**
 * 是否显示弹出层
 */
const visibleModel = defineModel<boolean>('visible', { default: false })
const { isShow, isShowMask, hideMask, animationDuration } = useMask({ emit, visibleModel })
const { setRadius } = useRadius(props)
</script>

<template>
  <!-- 弹出层 -->
  <div class="me-popup" :class="{ show: isShow }" :style="`background:rgba(0,0,0,${modal ? 0.7 : 0});--animation-duration:${animationDuration}ms;`" @click="hideMask" v-show="isShowMask">
    <div :class="position" :style="setRadius" @click.stop>
      <me-icon name="icon-baseline-close-px" size="20px" @click="hideMask" v-if="closeable" />
      <slot></slot>
    </div>
  </div>
</template>
