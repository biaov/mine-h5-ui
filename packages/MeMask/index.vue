<script lang="ts" setup>
import { useHandler } from './hooks'
import type { Props, Slots } from './types'

defineOptions({
  name: 'MeMask'
})

defineSlots<Slots>()

const props = withDefaults(defineProps<Props>(), {
  maskClose: false
})
const visibleModel = defineModel<boolean>('visible', { default: false })

const { isShowMask, isShow, clickMask, animationDuration } = useHandler({ props, visibleModel })
</script>

<template>
  <!-- 遮罩层 -->
  <div v-show="isShowMask" class="me-mask" :class="{ show: isShow }" :style="`--animation-duration:${animationDuration}ms;`" @click="clickMask">
    <slot :class="{ on: isShow }" @click.stop></slot>
  </div>
</template>
