<template>
  <div class="m-index">
    <div class="g-wrap m-hd">
      <img src="../assets/logo.svg" class="u-logo">
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
@keyframes floating {
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(10px);
  }
}
body {
  overflow-x: hidden;
}
@keyframes floating {
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(10px);
  }
}
.m-index {
  .m-hd {
    padding: 15vh 0 20vh;
    text-align: center;
    .u-logo {
      width: 220px;
      animation: floating ease-in-out 1.86s infinite alternate;
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
      .u-btn-start,
      .u-btn-github {
        display: inline-block;
        width: 190px;
        height: 56px;
        margin: 0 35px;
        font-size: 18px;
        line-height: 56px;
        border-radius: 28px;
        background-image: linear-gradient(90deg, #20a0ff 0%, #3369e7 100%);
        color: #fff;
        box-shadow: 0 2px 6px 0 rgba(51, 105, 231, 0.4);
        cursor: pointer;
        &:after {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: -1;
          content: "";
          background-color: #20a0ff;
          background-image: radial-gradient(
            circle farthest-corner at 100% 0,
            #f09c33 0,
            #f59234 4%,
            #f98736 7%,
            #fd7b38 10%,
            #ff6e3c 14%,
            #ff5f41 18%,
            #ff4e46 21%,
            #ff384b 25%,
            #fd1851 29%,
            #f90059 32%,
            #f50062 36%,
            #f0006c 39%,
            #e90077 43%,
            #e10083 46%,
            #d70090 50%,
            #20a0ff 75%,
            #20a0ff 100%
          );
          background-position: 0 0;
          background-size: 400% 100%;
          border-radius: inherit;
          transition: background-position 1s cubic-bezier(0.35, 0.35, 0, 1);
        }
        &:hover::after {
          background-position: 85%;
        }
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
