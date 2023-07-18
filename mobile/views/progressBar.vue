<template>
  <!-- 进度条 -->
  <ul class="m-progress-bar">
    <li v-for="(item, index) in listData" :key="index">
      <div class="u-label">{{ item.label }}</div>
      <me-progress-bar v-model="item.value" v-bind="item"></me-progress-bar>
      <me-button type="primary" @on-click="onStart(item)">点击开始</me-button>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      /**
       * 列表数据
       */
      listData: [
        {
          label: '基础用法',
          value: 0,
          type: 'line',
          width: '100%',
          start: undefined
        },
        {
          label: '圆点使用',
          value: 0,
          type: 'line',
          size: 10,
          width: '100%',
          textShow: false,
          start: undefined
        },
        {
          label: '自定义使用',
          value: 0,
          type: 'line',
          width: '100%',
          start: undefined,
          text: '进度：$default',
          padding: '0 25px',
          backgorund: 'linear-gradient(90deg, #8af2ba, #1e57f5)',
          activeColor: '#f66'
        },
        {
          label: '圆环使用',
          value: 0,
          type: 'circle',
          width: '100px',
          start: undefined
        },
        {
          label: '修改大小',
          value: 0,
          type: 'circle',
          width: '100px',
          size: 10,
          start: undefined
        }
      ]
    }
  },
  methods: {
    /**
     * 点击开始按钮
     */
    onStart(item) {
      /**
       * 是否已到终点
       */
      if (item.value === 100) {
        item.value = 0
        item.start = undefined
      }
      /**
       * 开始动画 API
       */
      function startAnimate(timestamp) {
        /**
         * 设置开始
         */
        item.start === undefined && (item.start = timestamp)
        /**
         * 当前距离开始时间
         */
        const elapsed = timestamp - item.start
        /**
         * 当前进度
         */
        item.value = Math.round(Math.min(elapsed * 0.05, 100))
        /**
         * 2s 之内完结
         */
        elapsed < 2000 && window.requestAnimationFrame(startAnimate)
      }
      /**
       * 开启帧动画
       */
      window.requestAnimationFrame(startAnimate)
    }
  }
}
</script>
<style scoped lang="less">
.m-progress-bar {
  > li {
    margin-bottom: 15px;
    .u-label {
      width: 100%;
      // line-height: 40px;
      margin-bottom: 20px;
      color: @font-color-reduce;
      font-size: @font-size-min;
    }
    .me-progress-bar {
      margin-bottom: 15px;
    }
  }
}
</style>
