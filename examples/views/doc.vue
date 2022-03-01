<template>
  <!-- 文档 -->
  <div class="m-doc">
    <!-- 主体 -->
    <div class="m-main">
      <!-- 侧边栏 -->
      <side-bar class="side-bar"></side-bar>
      <!-- 路由区域 -->
      <router-view class="router-view clear-scroll"></router-view>
      <!-- 移动示例 -->
      <div class="m-mobile"><iframe src="/mobile.html#/" width="100%" height="100%" frameborder="0" ref="mobileIframe"></iframe></div>
    </div>
  </div>
</template>
<script>
import SideBar from '@/components/SideBar'
export default {
  components: {
    SideBar
  },
  data() {
    return {}
  },
  methods: {
    // 路由跳转
    routerPath(path) {
      // 子窗口跳转路由
      this.$refs.mobileIframe.contentWindow.Vue.$router.push({
        path
      })
    }
  },
  watch: {
    $route({ path }) {
      this.routerPath(path)
    }
  },
  mounted() {
    // 页面渲染之后
    setTimeout(() => {
      this.routerPath(this.$route.path)
    }, 500)
  }
}
</script>
<style scoped lang="less">
@bg-color-white: #fff;

.m-doc {
  position: relative;
  width: 100%;
  height: calc(100vh - 60px);
  padding: 20px;
  background: @bg-color;
  // 主体内容
  .m-main {
    display: flex;
    width: 100%;
    height: 100%;
    border: 1px solid #f2f2f2;
    // 侧导航
    .side-bar {
      width: 220px;
      height: 100%;
      border-radius: 6px 0 6px 0;
      padding: 20px 0 20px 10px;
      background: @bg-color-white;
    }
    // 中间主体路由
    .router-view {
      flex: 1;
      border-radius: 0 6px 0 6px;
      padding: 20px;
      background: @bg-color-white;
    }
    // 移动示例展示
    .m-mobile {
      position: relative;
      width: 360px;
      height: 780px;
      margin-left: 20px;
      padding: 100px 16px;
      background: url('../assets/bg_mobile.png') no-repeat center;
      background-size: 100% auto;
      > iframe {
        width: 330px;
        height: 580px;
        background: @bg-color-white;
      }
    }
  }
}
</style>
