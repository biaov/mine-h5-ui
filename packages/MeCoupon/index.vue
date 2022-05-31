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
const props = withDefaults(
  defineProps<{
    width?: string // 宽度
    height?: string // 高度
    border?: string // 边框
    radius?: string // 倒角
    background?: string // 背景色
    circleSize?: string // 镂空圆的大小
    circleX?: string // 镂空圆的横向位置
    circleBg?: string // 镂空圆的颜色
    outWidth?: string // 外层渐变背景的宽度
  }>(),
  {
    width: '100%',
    height: 'auto',
    border: '',
    radius: '4px',
    background: '#f5f5f5',
    circleSize: '20px',
    circleX: '30%',
    circleBg: '#fff',
    outWidth: '100%'
  }
)
</script>
