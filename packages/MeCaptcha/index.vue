<script lang="ts" setup>
import { name } from './config'
import { useImgRect, useSlider } from './hooks'
import type { Props, Emits } from './types'

defineOptions({
  name
})

const emit = defineEmits<Emits>()

const props = withDefaults(defineProps<Props>(), {
  visible: false
})
</script>

<template>
  <!-- 图片验证器 -->
  <div :class="name"></div>
</template>
