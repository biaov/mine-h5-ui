<template>
  <!-- 优惠券 -->
  <div class="me-coupon" :style="`width:${width};height:${height};border-radius:${radius};background:${background};--border:${border};--circle-size:${circleSize};--circle-bg:${circleBg};--out-width:${outWidth};`">
    <div class="content"><slot></slot></div>
    <span class="circle" :style="`left:${circleX};`"></span>
    <span class="circle" :style="`left:${circleX};`"></span>
  </div>
</template>
<script>
export default {
  name: 'MeCoupon',
  props: {
    // 宽度
    width: {
      type: String,
      default: '100%'
    },
    // 高度
    height: {
      type: String,
      default: 'auto'
    },
    // 边框
    border: {
      type: String,
      default: ''
    },
    // 倒角
    radius: {
      type: String,
      default: '4px'
    },
    // 背景色
    background: {
      type: String,
      default: '#f5f5f5'
    },
    // 镂空圆的大小
    circleSize: {
      type: String,
      default: '20px'
    },
    // 镂空圆的横向位置
    circleX: {
      type: String,
      default: '30%'
    },
    // 镂空圆的颜色
    circleBg: {
      type: String,
      default: '#fff'
    },
    // 外层渐变背景的宽度
    outWidth: {
      type: String,
      default: '100%'
    }
  }
}
</script>
