<template>
  <!-- 索引栏 -->
  <div class="m-index-bar">
    <me-index-bar @on-click="onClick"></me-index-bar>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    /**
     * 点击内容列表
     */
    onClick(item) {
      console.log(item)
      this.$MeToast(item.cn)
    }
  }
}
</script>
<style scoped lang="less">
.m-index-bar {
}
</style>
