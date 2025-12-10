<script lang="ts" setup>
import { useImgEvent } from './hooks'
import type { Props, Emits } from './types'

defineOptions({
  name: 'MeImg'
})

const emit = defineEmits<Emits>()

withDefaults(defineProps<Props>(), {
  width: '',
  height: '',
  fill: '',
  radius: '0',
  alt: ''
})

const { onClick, onLoad, onError } = useImgEvent(emit)
</script>

<template>
  <!-- 图片 -->
  <div class="me-img" @click="onClick">
    <img v-if="!fill" :src="src" width="40px" height="40px" :alt="alt" :style="`width:${width};height:${height};border-radius:${radius};`" @load="onLoad" @error="onError" />
    <span v-else :style="`width:${width};height:${height};border-radius:${radius};background:url(${src}) no-repeat center;background-size:${fill};`"></span>
  </div>
</template>
