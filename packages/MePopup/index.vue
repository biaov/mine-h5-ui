<template>
  <!-- 弹出层 -->
  <div class="me-popup" :class="{ show: isShow }" :style="`background:rgba(0,0,0,${modal ? 0.7 : 0});--animation-duration:${animationDuration}ms;`" @click="hideMask" v-show="isShowMask">
    <div :class="position" :style="setRadius" @click.stop>
      <me-icon name="icon-baseline-close-px" size="20px" @click="hideMask" v-if="closeable"></me-icon>
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useMask, useRadius } from './hooks'
import { MeIcon } from '../MeIcon'

const emit = defineEmits<{
  (event: 'update:visible', bool: boolean): void
  (event: 'cancel'): void
}>()

const props = withDefaults(
  defineProps<{
    visible?: boolean // 是否显示弹出层
    modal?: boolean // 是否显示模态框
    position?: string // 弹出位置
    closeable?: boolean // 是否显示关闭图标
    radius?: string // 倒角数值
  }>(),
  {
    visible: false,
    modal: true,
    position: 'center',
    closeable: false,
    radius: ''
  }
)

const { isShow, isShowMask, hideMask, animationDuration } = useMask(props, emit)
const { setRadius } = useRadius(props)
</script>
