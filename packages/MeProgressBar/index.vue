<template>
  <!-- 进度条 -->
  <div class="me-progress-bar" :style="`padding:${padding};`">
    <!-- 线型进度条 -->
    <div class="m-line" v-if="type === 'line'" :style="`width:${width};`">
      <h3 class="u-txt" :style="`left:${modelValue}%;background:${activeColor};color:${textColor};`" v-if="textShow">{{ curText }}</h3>
      <span class="u-dot" :style="`width:${size + 8}px;height:${size + 8}px;left:${modelValue}%;background:${activeColor};`" v-else></span>
      <p class="u-line" :style="`height:${size}px; background:${backgorund};`"><span :style="`background:${activeColor}; transform:translateX(${modelValue - 100}%)`"></span></p>
    </div>
    <!-- 环形进度条 -->
    <div class="m-circle" :style="`width:${width};height:${width};`" v-else>
      <svg :viewBox="`0 0 ${curPosi * 2} ${curPosi * 2}`">
        <path :d="`M ${curPosi} ${curPosi} m 0, -500 a 500, 500 0 1, 1 0, 1000 a 500, 500 0 1, 1 0, -1000`" :stroke="backgorund" :stroke-width="`${10 * this.size}px`"></path>
        <path
          :d="`M ${curPosi} ${curPosi} m 0, -500 a 500, 500 0 1, 1 0, 1000 a 500, 500 0 1, 1 0, -1000`"
          :stroke="activeColor"
          :stroke-dasharray="`${Math.round(31.4 * modelValue)}px, 3140px`"
          :stroke-width="`${10 * this.size}px`"
        ></path>
      </svg>
      <div class="u-txt" v-if="textShow" :style="`color:${textColor};`">{{ curText }}</div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useCounts } from './hooks'

export default defineComponent({
  name: 'MeProgressBar',
  props: {
    // v-model绑定值,0-100的整数
    modelValue: {
      type: Number,
      required: true
    },
    // 进度条类型
    type: {
      type: String,
      default: 'line' // line|circle
    },
    // 自定义文本
    text: {
      type: String,
      default: ''
    },
    // 文本显示状态
    textShow: {
      type: Boolean,
      default: true
    },
    // 进度条宽度
    width: {
      type: String,
      default: '100px'
    },
    // 线性进度条倒角-line
    borderRadius: {
      type: String,
      default: '8px'
    },
    // 进度条粗细
    size: {
      type: Number,
      default: 4
    },
    // 文本颜色 // line-#fff,circle-#409eff
    textColor: {
      type: String,
      default: ''
    },
    // 进度条活动色
    activeColor: {
      type: String,
      default: '#409eff'
    },
    // 进度条背景色
    backgorund: {
      type: String,
      default: '#ccc'
    },
    // 整体边距-line
    padding: {
      type: String,
      default: '0 10px'
    }
  },
  setup(props) {
    const { curText, curPosi } = useCounts(props)
    return { curText, curPosi }
  }
})
</script>
