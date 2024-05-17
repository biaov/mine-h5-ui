<template>
  <!-- 头部组件 -->
  <div class="header fixed top-0 left-0 z-9 w-full">
    <router-link :to="{ name: 'Layout' }" class="return absolute top-0 left-0 w-40 block">
      <me-icon name="icon-left" color="#949494" size="20px" />
    </router-link>
    <h3 class="tit w-full p-40">
      <slot>演示</slot>
    </h3>
  </div>
</template>

<style scoped lang="less">
@import './index.less';
</style>
