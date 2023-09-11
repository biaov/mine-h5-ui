<style scoped lang="less">
@import './index.less';
</style>
<template>
  <!-- 头部组件 -->
  <div class="header">
    <router-link :to="{ name: 'Layout' }" class="return">
      <me-icon name="icon-left" color="#949494" size="20px"></me-icon>
    </router-link>
    <h3 class="tit">
      <slot>演示</slot>
    </h3>
  </div>
</template>
