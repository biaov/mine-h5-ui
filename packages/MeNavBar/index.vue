<template>
  <!-- 导航栏 -->
  <div class="me-nav-bar" :style="`background:${styles.background};border-bottom-color:${styles.borderColor};`">
    <!-- 左侧按钮 -->
    <div class="lf" @click="onClickLeft" :style="`color:${styles.leftColor};`">
      <i class="iconfont icon-left" v-if="leftArrow"></i>
      <span>{{ leftText }}</span>
    </div>
    <!-- 中间标题 -->
    <h2 class="tit" :style="`color:${styles.titleColor};`">{{ title }}</h2>
    <!-- 右侧按钮 -->
    <div class="rt">
      <div class="btn" v-if="rightText" @click="onClickRight" :style="`color:${styles.rightColor};`">{{ rightText }}</div>
      <slot v-else></slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { DefaultSlots } from '../types'
import { useHandler } from './hooks'
import type { Props, Emits } from './types'

defineOptions({
  name: 'MeNavBar'
})

defineSlots<Partial<DefaultSlots>>()

const emit = defineEmits<Emits>()

withDefaults(defineProps<Props>(), {
  title: '',
  leftArrow: true,
  leftText: '',
  rightText: '',
  styles: () => ({
    borderColor: '#dcdfe6',
    background: '#fff',
    titleColor: '#494949',
    leftColor: '#949494',
    rightColor: '#949494'
  })
})

const { onClickLeft, onClickRight } = useHandler(emit)
</script>
