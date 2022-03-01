<template>
  <!-- 公告栏 -->
  <div class="me-notice-bar" :style="`height:${height}px;border-radius:${radius + (String(radius).includes('px') ? '' : 'px')};background:${background};`">
    <!-- 前面图标 -->
    <div class="u-icon u-icon-preappend" :style="`color:${preappendColor};`" @click="onClick(':preappend')">
      <i :class="`iconfont icon-${preappendIcon}`"></i>
    </div>
    <!-- 滚动公告 -->
    <div class="u-notice">
      <!-- 水平动画 -->
      <ul class="u-notice-horizontal" :style="`left:${left}px;color:${color};`" ref="noticeList" v-if="scroll === 'horizontal'">
        <li v-for="(item, index) in listData" :key="index" @click="onClick('', index)">
          <span>{{ item }}</span>
        </li>
      </ul>
      <!-- 垂直动画 -->
      <transition name="slide" mode="out-in" v-else>
        <div class="u-notice-vertical" :key="listIndex" @click="onClick('', listIndex)" :style="`color:${color};`">
          <span>{{ listData[listIndex] }}</span>
        </div>
      </transition>
    </div>
    <!-- 后面图标 -->
    <div class="u-icon u-icon-append" :style="`color:${appendColor};`" @click="onClick(':append')"><i :class="`iconfont icon-${appendIcon}`"></i></div>
  </div>
</template>
<script>
export default {
  name: 'MeNoticeBar',
  props: {
    // 列表内容
    list: {
      type: [Array, String],
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
  data() {
    return {
      left: 0, // 距离左边的距离
      listData: [], // 列表内容
      listIndex: 0, // 列表索引
      timer: null, // 定时器
      isSwitch: true // 允许开启动画
    }
  },
  methods: {
    // 开启动画
    startAnimate() {
      // 水平方向
      if (this.scroll === 'horizontal') {
        const { offsetWidth, parentNode } = this.$refs.noticeList
        let startTime = null
        // 开始当前动画
        const startCurAnimate = timestamp => {
          startTime === null && (startTime = timestamp) // 设置开始时间
          const elapsed = timestamp - startTime // 当前距离开始时间
          const left = this.left // 上次的 left
          // 是否到达最大值
          if (left < -offsetWidth) {
            this.left = parentNode.offsetWidth
            startTime = null
          } else {
            this.left = ~(elapsed / 18)
          }
          this.isSwitch && window.requestAnimationFrame(startCurAnimate)
        }
        window.requestAnimationFrame(startCurAnimate)
      } else {
        // 垂直方向
        const { listData, delay } = this
        const len = listData.length
        // 是否是多条数据
        if (len <= 1) return
        // 定时器
        this.timer = setInterval(() => {
          const index = this.listIndex // 索引
          this.listIndex = index >= len - 1 ? 0 : index + 1 // 设置索引
        }, delay)
      }
    },
    // 关闭动画
    closeAnimate() {
      // 水平方向
      if (this.scroll === 'horizontal') {
        this.isSwitch = false // 关闭开关
      } else {
        clearInterval(this.timer) // 关闭定时器
      }
    },
    // 点击公告
    onClick(name, index) {
      this.$emit(`on-click${name}`, index)
    }
  },
  watch: {
    loop(value) {
      // 是否开启
      if (value) {
        this.startAnimate() // 执行开始动画
      } else {
        this.closeAnimate()
      }
    }
  },
  created() {
    const list = this.list
    this.listData = Array.isArray(list) ? list : [list] // 设置为数组
  },
  mounted() {
    this.loop && this.startAnimate() // 开启动画
  },
  destroyed() {
    this.closeAnimate()
  }
}
</script>
