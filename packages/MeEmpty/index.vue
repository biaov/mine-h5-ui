<template>
  <!-- 空状态 -->
  <div class="me-empty" :style="`min-height:${height}px;`">
    <!-- 图片 -->
    <div class="u-img">
      <img :src="url" alt="empty" v-if="url" />
      <i :class="`iconfont icon-${icon}`" v-else></i>
    </div>
    <!-- 文本 -->
    <div class="u-txt">
      {{ text }}
    </div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'MeEmpty',
  props: {
    /**
     * 文本内容
     */
    text: {
      type: String,
      default: ''
    },
    /**
     * 类型
     */
    type: {
      type: String,
      default: 'default' // default | network | search
    },
    /**
     * 高度
     */
    height: {
      type: Number,
      default: 200
    },
    /**
     * 自定义图标
     */
    iconName: {
      type: String,
      default: ''
    },
    /**
     * 自定义图片
     */
    url: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      /**
       * 图标名称
       */
      icon: ''
    }
  },
  created() {
    /**
     * 类型对应图标名称
     */
    const names = {
      default: 'jigou_wushuju',
      network: 'wangluocuowu',
      search: 'wushuju'
    }
    /**
     * 设置图标名称
     */
    this.icon = this.iconName || names[this.type]
  }
}
</script>
