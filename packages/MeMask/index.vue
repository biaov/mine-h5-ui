<template>
  <!-- 遮罩层 -->
  <div class="me-mask" :class="{ show: isShow }" @click="clickMask" v-show="isShowMask" :style="`--animation-duration:${animationDuration}ms;`">
    <slot :class="{ on: isShow }" @click.stop></slot>
  </div>
</template>
<script lang="ts" setup>
import { useHandler } from './hooks'

const emit = defineEmits<{
  (event: 'update:visible', bool: boolean): void
}>()

const props = withDefaults(
  defineProps<{
    visible?: boolean // 显示状态
    maskClose?: boolean // 点击遮罩层是否关闭
  }>(),
  {
    visible: false,
    maskClose: false
  }
)

const { isShowMask, isShow, clickMask, animationDuration } = useHandler(props, emit)
</script>
