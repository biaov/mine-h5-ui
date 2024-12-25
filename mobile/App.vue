<template>
  <router-view #="{ Component }">
    <transition name="translate-x">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style lang="less">
@import '../examples/styles/base.less';
</style>
