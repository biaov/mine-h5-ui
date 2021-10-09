<template>
  <!-- 文档 -->
  <div class="m-docs">
    <!-- 头部 -->
    <mine-header>{{ title }}</mine-header>
    <!-- 内容 -->
    <router-view></router-view>
  </div>
</template>
<script>
import MineHeader from "^/components/MineHeader";
import { useRouteHandler } from "./hooks";

export default {
  components: {
    MineHeader
  },
  setup() {
    const { title } = useRouteHandler();
    return { title };
  }
};
</script>
<style scoped lang="less">
.m-docs {
  padding: 75px 15px 15px;
}
</style>
