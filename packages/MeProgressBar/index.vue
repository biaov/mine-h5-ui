<template>
  <!-- 进度条 -->
  <div class="me-progress-bar" :style="`padding:${padding};`">
    <!-- 线型进度条 -->
    <div class="line" v-if="type === 'line'" :style="`width:${width};`">
      <h3 class="txt" :style="`left:${modelValue}%;background:${activeColor};color:${textColor};`" v-if="textShow">{{ curText }}</h3>
      <span class="dot" :style="`width:${size + 8}px;height:${size + 8}px;left:${modelValue}%;background:${activeColor};`" v-else></span>
      <p class="line" :style="`height:${size}px; background:${backgorund};`"><span :style="`background:${activeColor}; transform:translateX(${modelValue - 100}%)`"></span></p>
    </div>
    <!-- 环形进度条 -->
    <div class="circle" :style="`width:${width};height:${width};`" v-else>
      <svg :viewBox="`0 0 ${curPosi * 2} ${curPosi * 2}`">
        <path :d="`M ${curPosi} ${curPosi} m 0, -500 a 500, 500 0 1, 1 0, 1000 a 500, 500 0 1, 1 0, -1000`" :stroke="backgorund" :stroke-width="`${10 * size}px`"></path>
        <path
          :d="`M ${curPosi} ${curPosi} m 0, -500 a 500, 500 0 1, 1 0, 1000 a 500, 500 0 1, 1 0, -1000`"
          :stroke="activeColor"
          :stroke-dasharray="`${Math.round(31.4 * modelValue)}px, 3140px`"
          :stroke-width="`${10 * size}px`"
        ></path>
      </svg>
      <div class="txt" v-if="textShow" :style="`color:${textColor};`">{{ curText }}</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useCounts } from './hooks'
import type { Props } from './types'

defineOptions({
  name: 'MeProgressBar'
})

const props = withDefaults(defineProps<Props>(), {
  type: 'line',
  text: '',
  textShow: true,
  width: '100px',
  borderRadius: '8px',
  size: 4,
  textColor: '',
  activeColor: '#409eff',
  backgorund: '#ccc',
  padding: '0 10px'
})

const { curText, curPosi } = useCounts(props)
</script>
