<template>
  <div class="m-index">
    <div class="g-wrap m-hd">
      <img src="../assets/logo.svg" class="u-logo animate__animated" :class="isShowTitle?'animate__fadeInDownBig':''">
      <p class="u-desc animate__animated" :class="isShowTitle&&'animate__fadeInUpBig'">一款轻量级、模块化基于 VUE 的 H5 前端 UI 组件库</p>
      <p class="u-preface animate__animated" :class="isShowPreface&&'animate__fadeInUpBig'">如果你还冇心仪的 UI 框架，不妨试试 <router-link to="/doc">MINE-H5-UI</router-link>，也许会让你有意外的收获。</p>
    </div>
    <div class="m-main" :class="isShowBtnBg&&'btn-show-after'">
      <div class="u-btn">
        <router-link :to="{name: 'introduce'}" class="u-btn-start animate__animated" :class="isShowTitle&&'animate__fadeInLeftBig'">开始使用</router-link>
        <a target="_blank" class="u-btn-github animate__animated" :href="$var.GithubAddress" :class="isShowTitle&&'animate__fadeInRightBig'">GitHub</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowTitle: false, // 是否显示标题
      isShowBtn: false, // 是否显示按钮
      isShowPreface: false, // 是否显示 Preface
      isShowBtnBg: false // 是否显示按钮背景
    };
  },
  mounted() {
    setTimeout(() => {
      this.isShowTitle = true;
    }, 100);
    setTimeout(() => {
      this.isShowPreface = true;
    }, 200);
    setTimeout(() => {
      this.isShowBtnBg = true;
    }, 400);
    setTimeout(() => {
      this.isShowBtn = true;
    }, 800);
  }
};
</script>
<style scoped lang="less">
body {
  overflow-x: hidden;
}
.m-index {
  .m-hd {
    padding: 15vh 0 20vh;
    text-align: center;
    .u-logo {
      width: 220px;
    }
    .u-desc {
      margin-top: 56px;
      color: #8994c6;
      font-size: 30px;
    }
    .u-preface {
      margin-top: 10px;
      color: #8aa0ff;
      font-size: 18px;
      > a {
        display: inline;
        color: #8aa0ff;
        &:hover {
          color: #00aeff;
        }
      }
    }
  }
  .m-main {
    position: relative;
    .u-btn {
      position: absolute;
      width: 100%;
      height: 160px;
      top: 0;
      z-index: 9;
      text-align: center;
      .u-btn-start {
        color: #fff;
        background-image: linear-gradient(90deg, #00aeff 0%, #3369e7 100%);
        box-shadow: 0 2px 6px 0 rgba(51, 105, 231, 0.4);
        display: inline-block;
        width: 190px;
        height: 56px;
        margin: 0 35px;
        font-size: 18px;
        line-height: 56px;
        border-radius: 28px;
        transition: all 0.4s;
        cursor: pointer;
      }
      .u-btn-github {
        .u-btn-start;
        color: #316de9;
        border: 1px solid #2f6ee9;
        background: #fff;
        box-shadow: none;
      }
    }
    &:after {
      content: "";
      display: block;
      position: absolute;
      top: -60px;
      left: 0;
      width: 100%;
      height: 160px;
      background: #fff;
      transition: all 0.4s;
      box-shadow: 0 -4px 30px 0 #dfe1e6;
      transform: translateX(-100%) skewY(0deg);
    }
    &.btn-show-after:after {
      transform: translateX(0%) skewY(-3deg);
    }
  }
}
</style>
