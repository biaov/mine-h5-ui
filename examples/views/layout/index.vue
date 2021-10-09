<template>
  <!-- 首页 -->
  <div class="m-layout">
    <!-- 背景 -->
    <div class="m-bg">
      <img src="../../assets/windmill.png" class="u-rotate" alt="windmill" />
      <canvas ref="canvas" class="m-canvas" width="100%" height="100%"></canvas>
    </div>
    <!-- 头部 -->
    <mine-header></mine-header>
    <!-- 内容 -->
    <div class="m-content">
      <div class="u-logo"><img src="../../assets/logo.svg" alt="MINE-H5-UI Logo" /></div>
      <h1 class="u-tit">一款轻量级、模块化基于 VUE 的 H5 前端 UI 组件库</h1>
      <p class="u-desc">
        如果你还冇心仪的 UI 框架，不妨试试
        <router-link to="/doc">MINE-H5-UI</router-link>
        ，也许会让你有意外的收获。
      </p>
      <ul class="m-btns">
        <li>
          <router-link to="/doc">开始使用</router-link>
        </li>
        <li><a :href="GithubAddress" target="_blank" rel="noopener noreferrer">GitHub</a></li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import MineHeader from "@/components/MineHeader";
import { useGlobalVars } from "@/utils/variables";
import { useCanvas } from "./hooks";

export default defineComponent({
  components: {
    MineHeader
  },
  setup() {
    const { canvas } = useCanvas();
    const { GithubAddress } = useGlobalVars();
    return { GithubAddress, canvas };
  }
});
</script>
<style scoped lang="less">
// 旋转
@keyframes rotate {
  0% {
    transform: translate(0%, 0%) scale(1) rotate(0deg);
    opacity: 0.1;
  }

  50% {
    transform: translate(10%, 10%) scale(0.6) rotate(180deg);
    opacity: 0.3;
  }

  100% {
    transform: translate(0%, 0%) scale(1) rotate(360deg);
    opacity: 0.1;
  }
}
// 浮动中
@keyframes floating {
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(15px);
  }
}
.m-layout {
  background: linear-gradient(180deg, rgba(#ecf6fb, 1), rgba(#ecf6fb, 0.8), rgba(#ecf6fb, 0.6));
  .m-bg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100vw;
    height: 100vh;
    .u-rotate {
      position: absolute;
      top: 40px;
      left: 0;
      width: 200px;
      height: 200px;
      opacity: 0.1;
      transform: rotate(0deg);
      animation: rotate 2s linear infinite;
    }
    .m-canvas {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }

  .m-content {
    position: relative;
    z-index: 2;
    min-height: 100vh;
    padding: 15vh 0 20vh;
    text-align: center;
    .u-logo {
      width: 220px;
      margin: 0 auto;
      animation: floating ease-in-out 1.6s infinite alternate;
    }
    .u-tit {
      margin-top: 56px;
      color: #8994c6;
      font-size: 30px;
    }
    .u-desc {
      margin: 10px 0 50px 0;
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
    .m-btns {
      display: flex;
      justify-content: center;
      li {
        position: relative;
        width: 160px;
        height: 50px;
        line-height: 50px;
        border-radius: 28px;
        text-align: center;
        box-shadow: 0 2px 12px 0 @box-shadow-default;
        transition: all 0.4s;
        cursor: pointer;
        &:first-child {
          margin-right: 30px;
        }
        &:after {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
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
            #3369e7 100%
          );
          background-position: 0 0;
          background-size: 400% 100%;
          border-radius: inherit;
          transition: background-position 1s cubic-bezier(0.35, 0.35, 0, 1);
          animation-fill-mode: both;
        }
        &:hover::after {
          background-position: 85%;
        }
        a {
          position: relative;
          z-index: 1;
          color: @color-white;
          font-size: @font-size-large;
        }
      }
    }
  }
}
</style>
