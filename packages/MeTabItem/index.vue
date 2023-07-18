<template>
  <!-- 标签选项 -->
  <div class="me-tab-item" v-show="isShow">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'MeTabItem',
  props: {
    /**
     * 标签内容
     */
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      /**
       * 当前 id
       */
      currentId: 0,
      /**
       * 是否显示
       */
      isShow: false
    }
  },
  methods: {
    /**
     * 设置下标数据
     */
    setData(id) {
      this.currentId = id
      this.initShow()
    },
    /**
     * 设置初始化显示
     */
    initShow() {
      const {
        $parent: { $options, value },
        currentId
      } = this
      this.isShow = $options._componentTag === 'me-tab' && currentId === value
    }
  }
}
</script>
