<template>
  <!-- 时间线 -->
  <div class="timeline relative pt-0 pr-0 pb-5 pl-24">
    <div class="dot z-2 left-0 w-14 h-14"></div>
    <div class="tail left-6 h-full"></div>
    <div class="cont">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="less">
@import './index.less';
</style>
