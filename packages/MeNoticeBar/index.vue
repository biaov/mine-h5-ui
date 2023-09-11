<template>
  <!-- 公告栏 -->
  <div class="me-notice-bar" :style="`height:${height}px;border-radius:${radius + (String(radius).includes('px') ? '' : 'px')};background:${background};`">
    <!-- 前面图标 -->
    <div class="icon icon-preappend" :style="`color:${preappendColor};`" @click="onClickPreappend">
      <i :class="`iconfont icon-${preappendIcon}`"></i>
    </div>
    <!-- 滚动公告 -->
    <div class="notice">
      <!-- 水平动画 -->
      <ul class="notice-horizontal" :style="`left:${left}px;color:${color};`" ref="noticeList" v-if="scroll === 'horizontal'">
        <li v-for="(item, index) in listData" :key="index" @click="onClick(index)">
          <span>{{ item }}</span>
        </li>
      </ul>
      <!-- 垂直动画 -->
      <transition name="slide" mode="out-in" v-else>
        <div class="notice-vertical" :key="listIndex" @click="onClick(listIndex)" :style="`color:${color};`">
          <span>{{ listData[listIndex] }}</span>
        </div>
      </transition>
    </div>
    <!-- 后面图标 -->
    <div class="icon icon-append" :style="`color:${appendColor};`" @click="onClickAppend"><i :class="`iconfont icon-${appendIcon}`"></i></div>
  </div>
</template>
<script lang="ts" setup>
import { useAnimate, useBtns } from './hooks'
import type { Props, Emits } from './types'

defineOptions({
  name: 'MeNoticeBar'
})

const emit = defineEmits<Emits>()

const props = withDefaults(defineProps<Props>(), {
  scroll: 'horizontal',
  loop: false,
  delay: 3000,
  preappendIcon: 'notice',
  preappendColor: '#f56c6c',
  appendIcon: 'right1',
  appendColor: '#c8c7cc',
  height: 40,
  radius: 4,
  background: '#f6f6f6',
  color: '#494949'
})

const { noticeList, left, listData, listIndex } = useAnimate(props)
const { onClick, onClickPreappend, onClickAppend } = useBtns(emit)
</script>
