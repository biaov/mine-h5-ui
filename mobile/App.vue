<template>
  <div id="mobile">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isAllow: false // 是否允许修改
    };
  },
  watch: {
    // 监听路由变化
    $route({ name, redirectedFrom }) {
      const { location, Vue } = window.parent;
      // 是否不处于 mobile.html 页面并且允许修改父窗口路由
      if (!location.href.includes("mobile.html/") && this.isAllow) {
        // 获取将要设置的父窗口的路由
        const path = name !== "index" ? `/doc/${name}` : redirectedFrom || "/doc/introduce";
        // 路由跳转
        Vue.$router.push({
          path
        });
      }
    }
  },
  mounted() {
    // 渲染之后设置子窗口可修改父窗口路由
    setTimeout(() => {
      this.isAllow = true;
    }, 500);
  }
};
</script>
<style lang="less">
@import "../examples/utils/styles/index.less";
</style>
