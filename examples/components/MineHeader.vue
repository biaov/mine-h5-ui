<template>
  <!-- 头部 -->
  <div class="g-header">
    <p class="u-tips">
      你正在浏览的是 v1.x 的文档，最新 v2.x 的文档
      <a href="/v2">在这里</a>
    </p>
    <div class="g-wrap m-hd">
      <router-link class="u-logo" :to="{ name: 'index' }" title="回到首页"><img src="../assets/logo.svg" width="100%" alt="" /></router-link>
      <div class="u-rt">
        <nav-bar :list="listData"></nav-bar>
        <combo-box :list="listVersion"></combo-box>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from "./NavBar";
import ComboBox from "./ComboBox";
export default {
  name: "MineHeader",
  components: {
    NavBar,
    ComboBox
  },
  data() {
    return {
      // 列表数据
      listData: [
        {
          id: 1,
          name: "introduce",
          value: "指南"
        },
        {
          id: 2,
          name: "button",
          value: "组件"
        },
        {
          id: 3,
          link: this.$var.GithubAddress,
          icon: "icon-github",
          value: "Github"
        }
      ],
      // 版本列表数据
      listVersion: [
        {
          value: "1.x",
          href: "/"
        },
        {
          value: "2.x",
          href: "/v2"
        }
      ]
    };
  }
};
</script>
<style scoped lang="less">
.g-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  width: 100vw;
  border-bottom: 1px solid rgba(34, 34, 34, 0.2);
  background: rgba(255, 255, 255, 0.94);
  box-shadow: 0 2px 10px #ccc;
  .u-tips {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
    background: @color-primary;
    color: rgba(255, 255, 255, 0.8);
    font-size: 14px;
    a {
      margin-left: 5px;
      color: #fff;
      font-weight: bold;
    }
  }
  .m-hd {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    .u-logo {
      width: 50px;
    }
    .u-rt {
      display: flex;
      align-items: center;
    }
  }
}
</style>
