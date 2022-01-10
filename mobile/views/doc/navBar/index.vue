<style scoped lang="less">
@import './index.less';
</style>
<template>
  <!-- 导航栏 -->
  <div class="m-navbar">
    <div class="u-label">基础用法</div>
    <me-nav-bar title="标题" left-text="返回" right-text="按钮" @click-left="handleClick('返回')" @click-right="handleClick('按钮')"></me-nav-bar>
    <div class="u-label">使用插槽</div>
    <me-nav-bar title="标题" :left-arrow="false" @click-left="handleClick('返回')">
      <me-icon name="icon-search1" size="20px" color="#409eff" @on-click="handleClick('搜索')"></me-icon>
    </me-nav-bar>
    <div class="u-label">自定义样式</div>
    <me-nav-bar title="标题" left-text="返回" right-text="自定义" @click-left="handleClick('返回')" v-bind="{ styles }" @click-right="handleClick('自定义')"></me-nav-bar>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useHandlerClick } from './hooks'

export default defineComponent({
  setup() {
    const { styles, handleClick } = useHandlerClick()
    return { styles, handleClick }
  }
})
</script>
