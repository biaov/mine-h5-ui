<template>
  <!-- 遮罩层 -->
  <div class="me-mask" :class="{ show: isShow }" @click="clickMask" v-show="isShowMask" :style="`--animation-duration:${animationDuration}ms;`">
    <slot :class="{ on: isShow }" @click.stop></slot>
  </div>
</template>
<script lang="ts" setup>
import { useHandler } from './hooks'
import type { Props, Emits, Slots } from './types'

defineOptions({
  name: 'MeMask'
})

defineSlots<Slots>()

const emit = defineEmits<Emits>()

const props = withDefaults(defineProps<Props>(), {
  visible: false,
  maskClose: false
})

const { isShowMask, isShow, clickMask, animationDuration } = useHandler(props, emit)
</script>
