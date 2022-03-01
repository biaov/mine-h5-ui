<template>
  <!-- 图片 -->
  <div class="me-img" @click="handleImg">
    <img :src="src" width="40px" height="40px" :alt="alt" v-if="!fill" :style="`width:${width};height:${height};border-radius:${radius};`" />
    <span :style="`width:${width};height:${height};border-radius:${radius};background:url(${src}) no-repeat center;background-size:${fill};`" v-else></span>
  </div>
</template>
<script>
export default {
  name: 'MeImg',
  props: {
    // 图片地址
    src: {
      type: String,
      required: true
    },
    // 宽度
    width: {
      type: String,
      default: ''
    },
    // 高度
    height: {
      type: String,
      default: ''
    },
    // 填充方式
    fill: {
      type: String,
      default: ''
    },
    // 倒角
    radius: {
      type: String,
      default: '0'
    },
    // 错误显示alt
    alt: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  },
  methods: {
    // 点击图片
    handleImg() {
      this.$emit('on-click')
    }
  }
}
</script>
