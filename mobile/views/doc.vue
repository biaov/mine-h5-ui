<template>
  <!-- 按钮 -->
  <div class="m-doc">
    <mine-header>{{ title }}</mine-header>
    <router-view></router-view>
  </div>
</template>
<script>
import MineHeader from '^/components/MineHeader'
export default {
  components: {
    MineHeader
  },
  data() {
    return {
      /**
       * 标题
       */
      title: ''
    }
  },
  watch: {
    $route() {
      this.title = this.$route.meta.title
    }
  },
  created() {
    this.title = this.$route.meta.title
  }
}
</script>
<style scoped lang="less">
.m-doc {
  padding: 75px 15px 15px;
}
</style>
