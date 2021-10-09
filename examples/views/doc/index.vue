<template>
  <!-- 文档 -->
  <div class="m-doc">
    <!-- 头部 -->
    <mine-header></mine-header>
    <!-- 内容 -->
    <div class="m-content">
      <!-- 菜单列表 -->
      <side-bar></side-bar>
      <div class="m-md">
        <!-- 使用文档 -->
        <router-view></router-view>
      </div>
      <!-- H5演示 -->
      <demo-h5 @getframe="changeFrameRouter"></demo-h5>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import MineHeader from "@/components/MineHeader";
import SideBar from "@/components/SideBar";
import DemoH5 from "@/components/DemoH5";
import { useChangeRouter } from "./hooks";

export default defineComponent({
  components: {
    MineHeader,
    SideBar,
    DemoH5
  },
  setup() {
    const { changeFrameRouter } = useChangeRouter();
    return { changeFrameRouter };
  }
});
</script>
<style scoped lang="less">
.m-doc {
  padding-top: 60px;
  .m-content {
    display: flex;
    height: calc(100vh - 60px);
    border-top: @boder-common;
    .m-md {
      width: 50%;
      flex-grow: 1;
      height: 100%;
      padding: 15px;
      overflow-y: auto;
      border-right: @boder-common;
    }
  }
}
</style>
