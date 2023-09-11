<template>
  <!-- 优惠券 -->
  <div
    class="me-coupon"
    :style="`width:${width};height:${height};border-radius:${radius};background:${background};--border:${border};--circle-size:${circleSize};--circle-bg:${circleBg};--out-width:${outWidth};`"
  >
    <div class="content"><slot></slot></div>
    <span class="circle" :style="`left:${circleX};`"></span>
    <span class="circle" :style="`left:${circleX};`"></span>
  </div>
</template>
<script lang="ts" setup>
import type { DefaultSlots } from '../types'
import type { Props } from './types'

defineOptions({
  name: 'MeCoupon'
})

defineSlots<DefaultSlots>()

withDefaults(defineProps<Props>(), {
  width: '100%',
  height: 'auto',
  border: '',
  radius: '4px',
  background: '#f5f5f5',
  circleSize: '20px',
  circleX: '30%',
  circleBg: '#fff',
  outWidth: '100%'
})
</script>
