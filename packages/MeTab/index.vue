<template>
  <!-- 标签页 -->
  <div class="me-tab">
    <!-- 标签组 -->
    <div class="m-tabs" ref="tabs">
      <div class="m-tab-item" v-for="(item, index) in tabList" :key="index" :class="{ active: value === index }" @click="onClick(index)" :style="`color:${value === index ? activeColor : color};`">
        {{ item }}
      </div>
      <div class="u-line-bt" :style="`transform:translateX(${transX * (value * 2 + 1)}px) translateX(-50%);transition-duration:${duration}s;background:${lineColor};`"></div>
    </div>
    <!-- slot 内容 -->
    <slot></slot>
  </div>
</template>
<script>
/**
 * 下活动线位移计算方式
 * 思路：当前活动item的一半宽度 + 前面的所有宽度
 * transX * (value * 2 + 1) => transX * 2 * value + transX
 * transX：每个项的一半的宽度
 * value：活动索引
 */
export default {
  name: 'MeTab',
  props: {
    /**
     * v-model 绑定值
     */
    value: {
      type: Number,
      required: true
    },
    /**
     * 未聚焦时的颜色
     */
    color: {
      type: String,
      default: '#949494'
    },
    /**
     * 聚焦时显示的颜色
     */
    activeColor: {
      type: String,
      default: '#494949'
    },
    /**
     * 位移边框颜色
     */
    lineColor: {
      type: String,
      default: '#f56c6c'
    }
  },
  data() {
    return {
      /**
       * 标签列表
       */
      tabList: [],
      /**
       * 初始移动值
       */
      transX: 0,
      /**
       * 过渡动画时间
       */
      duration: 0
    }
  },
  methods: {
    /**
     * 更新子组件状态
     */
    updateValue() {
      const { $children } = this
      /**
       * 标签数组
       */
      const labelArr = []
      /**
       * 循环遍历
       */
      $children.forEach((elem, i) => {
        elem.setData(i)
        labelArr.push(elem.title)
      })
      this.tabList = labelArr
    },
    /**
     * 计算初始移动值
     */
    initTranslateX() {
      this.transX = this.$refs.tabs.offsetWidth / (this.tabList.length * 2)
      this.duration = 0
    },
    /**
     * 点击 tabs item
     */
    onClick(index) {
      /**
       * 点击不是活动项
       */
      if (index !== this.value) {
        this.duration = 0.4
        this.$emit('input', index)
        this.$emit('on-change', index)
        /**
         * 防止还没更新完就更新字组件状态
         */
        this.$nextTick(() => {
          this.updateItemState()
        })
      }
    },
    /**
     * 更新子组件的状态
     */
    updateItemState() {
      /**
       * 循环遍历
       */
      this.$children.forEach(elem => {
        elem.initShow()
      })
    }
  },
  mounted() {
    this.updateValue()
    this.initTranslateX()
  }
}
</script>
