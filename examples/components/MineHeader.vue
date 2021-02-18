<template>
  <!-- 头部 -->
  <div class="g-header">
    <div class="g-wrap m-hd">
      <router-link class="u-logo" :to="{name:'index'}" title="回到首页"><img src="../assets/logo.svg" width="100%" alt=""></router-link>
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
          id: 1,
          value: "1.x"
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
  display: flex;
  align-items: center;
  width: 100vw;
  height: 60px;
  border-bottom: 1px solid rgba(34, 34, 34, 0.2);
  box-shadow: 0 2px 10px #ccc;
  background: rgba(255, 255, 255, 0.9);
  .m-hd {
    display: flex;
    justify-content: space-between;
    align-items: center;
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