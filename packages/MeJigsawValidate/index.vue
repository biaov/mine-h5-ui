<script lang="ts" setup>
import { useImgRect, useSlider } from './hooks'
import type { Props, Emits } from './types'

defineOptions({
  name: 'MeJigsawValidate'
})

const emit = defineEmits<Emits>()

const props = withDefaults(defineProps<Props>(), {
  width: '100%',
  height: '300px',
  random: true,
  slideStyle: () => ({
    /**
     * 滑块高度
     */
    height: '40px',
    /**
     * 滑块背景色
     */
    background: '#f6f6f6',
    /**
     * 拖拽点背景色
     */
    dotBackground: '#409eff',
    /**
     * 提示文本颜色
     */
    tips: '#494949'
  }),
  tips: '按住左边按钮向右拖动完成上方图像验证',
  range: 5
})
const { jigsawImgRef, dragPoint, missingPoint, crossPoint, imgRect } = useImgRect(props)
const { moveX, openAnimation, onAnimationend } = useSlider(props, emit, { dragPoint, missingPoint })
</script>

<template>
  <!-- 拼图校验 -->
  <div class="me-jigsaw-validate" :style="`width:${width};`">
    <div class="jigsaw-img"
      :style="`height:${height};--x:${missingPoint.x}px;--y:${crossPoint.y}px;--point-width:${crossPoint.width}px;--url:url(${url});`"
      ref="jigsawImgRef">
      <div class="jigsaw-img-point" :class="{ animation: openAnimation }"
        :style="`left:${dragPoint.x + moveX}px;background-position:-${missingPoint.x}px -${crossPoint.y}px;background-size:${imgRect.width}px ${imgRect.height}px;`">
      </div>
    </div>
    <div class="jigsaw-slide" :style="`height:${slideStyle.height};background:${slideStyle.background};`">
      <div class="slide-dot" :class="{ animation: openAnimation }"
        :style="`left:${moveX}px;background:${slideStyle.dotBackground};`" ref="slideDotRef"
        @transitionend="onAnimationend"></div>
      <div class="slide-tips" :style="`color:${slideStyle.tips};`">{{ tips }}</div>
    </div>
  </div>
</template>
