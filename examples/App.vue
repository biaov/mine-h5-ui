<template>
  <div id="app">
    <mine-header></mine-header>
    <router-view></router-view>
  </div>
</template>
<script>
import MineHeader from '@/components/MineHeader'
export default {
  components: {
    MineHeader
  },
  data() {
    return {}
  },
  mounted() {
    window.innerWidth < 1200 && (location.href = `${location.origin}/mobile.html`)
  }
}
</script>
<style lang="less">
@import './utils/styles/index.less';
#app {
  padding-top: 100px;
}
</style>
