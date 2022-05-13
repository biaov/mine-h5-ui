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
import { useHandler } from './hooks'
import { Styles } from './interfaces'

const emit = defineEmits<{
  (event: 'click-left', e: MouseEvent): void
  (event: 'click-right', e: MouseEvent): void
}>()

const props = withDefaults(
  defineProps<{
    title?: string // 标题
    leftArrow?: boolean // 左侧按钮箭头显示状态
    leftText?: string // 左侧按钮文本
    rightText?: string // 右侧按钮文本
    styles?: Styles // 组件样式
  }>(),
  {
    title: '',
    leftArrow: true,
    leftText: '',
    rightText: '',
    styles: () => ({
      borderColor: '#dcdfe6', // 边框颜色
      background: '#fff', // 背景颜色
      titleColor: '#494949', // 标题颜色
      leftColor: '#949494', // 左侧按钮颜色
      rightColor: '#949494' // 右侧按钮颜色
    })
  }
)

const { onClickLeft, onClickRight } = useHandler(emit)
</script>
