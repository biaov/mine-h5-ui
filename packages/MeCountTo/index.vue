<template>
  <!-- 数字滚动 -->
  <div class="me-count-to">
    {{ comValue }}
  </div>
</template>
<script>
import { FormatThousand } from '~/MeAPI/function'
export default {
  name: 'MeCountTo',
  props: {
    /**
     * 开始状态
     */
    value: {
      type: Boolean,
      default: true
    },
    /**
     * 开始数字
     */
    startValue: {
      type: Number,
      default: 0
    },
    /**
     * 结束数字
     */
    endValue: {
      type: Number,
      required: true
    },
    /**
     * 持续时间
     */
    duration: {
      type: Number,
      default: 1500
    },
    /**
     * 千分符
     */
    thousand: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      /**
       * 当前值
       */
      curValue: 0
    }
  },
  computed: {
    comValue() {
      const { curValue, thousand } = this
      return thousand ? FormatThousand(curValue) : curValue
    }
  },
  methods: {
    /**
     * 开始动画
     */
    startAnimate() {
      let startTime = null
      const { duration, endValue, startValue } = this
      /**
       * 开始当前动画
       */
      const startCurAnimate = timestamp => {
        /**
         * 设置开始时间
         */
        startTime === null && (startTime = timestamp)
        /**
         * 当前距离开始时间
         */
        const elapsed = timestamp - startTime
        /**
         * 虚拟计算值
         */
        const virtual = ~~(((endValue - startValue) * elapsed) / duration + startValue)
        /**
         * 当前值
         */
        this.curValue = Math.min(virtual, endValue)
        if (elapsed < duration) {
          window.requestAnimationFrame(startCurAnimate)
        } else {
          this.$emit('input', false)
          this.$emit('on-end')
        }
      }
      window.requestAnimationFrame(startCurAnimate)
    }
  },
  watch: {
    value(value) {
      value && this.startAnimate()
    }
  },
  created() {
    this.value && this.startAnimate()
  }
}
</script>
