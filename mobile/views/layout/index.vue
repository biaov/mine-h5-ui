<style scoped lang="less">
@import './index.less';
</style>
<template>
  <!-- layout -->
  <div class="m-layout">
    <div class="m-hd">
      <h3 class="u-tit">
        <img src="../../../examples/assets/logo.svg" alt="MINE-H5-UI logo" />
        <span>MINE-H5-UI</span>
      </h3>
      <p class="u-desc">一款轻量级、模块化基于VUE的H5前端UI组件库</p>
    </div>
    <!-- 列表 -->
    <ul class="m-list-out">
      <li v-for="(item, index) in listData" :key="index">
        <h3 class="u-tit">{{ item.meta.title }}</h3>
        <ul class="m-list-in">
          <li v-for="(it, i) in item.items" :key="i">
            <router-link :to="{ name: it.name }">
              <span>{{ it.meta.title }}</span>
              <me-icon name="icon-right1" size="20px" color="rgba(34,34,34,0.2)"></me-icon>
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useWebData } from './hook'

export default defineComponent({
  setup() {
    const { listData } = useWebData()
    return { listData }
  }
})
</script>
