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
  <div class="me-mask" :class="{ show: isShow }" @click="clickMask" v-show="isShowMask" :style="`--animation-duration:${animationDuration}ms;`">
    <slot :class="{ on: isShow }" @click.stop></slot>
  </div>
</template>
