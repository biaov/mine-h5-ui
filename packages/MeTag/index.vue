<template>
  <!-- 标签 -->
  <div class="me-tag" :class="[type, plain && 'plain']" :style="`width:${width}px;height:${height}px;border-color:${color};border-radius:${radius}px;background:${color};color:${textColor};`">
    <div class="txt">
      <span>{{ text }}</span>
      <i class="iconfont icon-baseline-close-px" @click="onClose" v-if="closeable"></i>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useHandler } from './hooks'
import type { Props, Emits } from './types'

defineOptions({
  name: 'MeTag'
})

const emit = defineEmits<Emits>()

withDefaults(defineProps<Props>(), {
  type: 'primary',
  plain: false,
  radius: 4,
  height: 24,
  color: '',
  text: '标签',
  textColor: '',
  closeable: false
})

const { onClose } = useHandler(emit)
</script>
