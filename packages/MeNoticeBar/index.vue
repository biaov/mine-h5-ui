<template>
  <!-- 公告栏 -->
  <div class="me-notice-bar" :style="`height:${height}px;border-radius:${radius + (String(radius).includes('px') ? '' : 'px')};background:${background};`">
    <!-- 前面图标 -->
    <div class="u-icon u-icon-preappend" :style="`color:${preappendColor};`" @click="onClickPreappend">
      <i :class="`iconfont icon-${preappendIcon}`"></i>
    </div>
    <!-- 滚动公告 -->
    <div class="u-notice">
      <!-- 水平动画 -->
      <ul class="u-notice-horizontal" :style="`left:${left}px;color:${color};`" ref="noticeList" v-if="scroll === 'horizontal'">
        <li v-for="(item, index) in listData" :key="index" @click="onClick(index)">
          <span>{{ item }}</span>
        </li>
      </ul>
      <!-- 垂直动画 -->
      <transition name="slide" mode="out-in" v-else>
        <div class="u-notice-vertical" :key="listIndex" @click="onClick(listIndex)" :style="`color:${color};`">
          <span>{{ listData[listIndex] }}</span>
        </div>
      </transition>
    </div>
    <!-- 后面图标 -->
    <div class="u-icon u-icon-append" :style="`color:${appendColor};`" @click="onClickAppend"><i :class="`iconfont icon-${appendIcon}`"></i></div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { useAnimate, useBtns } from './hooks'

export default defineComponent({
  name: 'MeNoticeBar',
  emits: ['on-click', 'on-click:preappend', 'on-click:append'],
  props: {
    // 列表内容
    list: {
      type: [String, Array] as PropType<string | string[]>,
      required: true
    },
    // 滚动方向
    scroll: {
      type: String,
      default: 'horizontal' // horizontal|vertical
    },
    // 开启动画
    loop: {
      type: Boolean,
      default: false
    },
    // 间隔时间，滚动方向为 vertical 才有效
    delay: {
      type: Number,
      default: 3000
    },
    // 前面图标
    preappendIcon: {
      type: String,
      default: 'notice'
    },
    // 前面图标颜色
    preappendColor: {
      type: String,
      default: '#f56c6c'
    },
    // 后面图标
    appendIcon: {
      type: String,
      default: 'right1'
    },
    // 后面图标颜色
    appendColor: {
      type: String,
      default: '#c8c7cc'
    },
    // 高度
    height: {
      type: Number,
      default: 40
    },
    // 倒角
    radius: {
      type: [Number, String],
      default: 4
    },
    // 背景颜色
    background: {
      type: String,
      default: '#f6f6f6'
    },
    // 文本颜色
    color: {
      type: String,
      default: '#494949'
    }
  },
  setup(props, { emit }) {
    const { noticeList, left, listData, listIndex } = useAnimate(props)
    const { onClick, onClickPreappend, onClickAppend } = useBtns(emit)
    return { noticeList, left, listData, listIndex, onClick, onClickPreappend, onClickAppend }
  }
})
</script>
