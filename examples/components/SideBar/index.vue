<style scoped lang="less">
@import './index.less';
</style>
<template>
  <!-- H5演示 -->
  <ul class="m-side-bar">
    <!-- 一级列表 -->
    <li v-for="(item, index) in sidebarList" :key="index">
      <h2 class="u-tit">{{ item.title }}</h2>
      <ul class="m-list-ct">
        <!-- 二级列表 -->
        <li v-for="(it, i) in item.children" :key="i" :class="{ spot: it.name === 'logs' }">
          <router-link class="u-tit-ct u-in" :to="{ name: it.name }" v-if="!it.items">{{ it.meta.title }}</router-link>
          <template v-else>
            <h3 class="u-tit-ct">{{ it.meta.title }}</h3>
            <ul class="m-list-in">
              <!-- 三级列表 -->
              <li v-for="(elem, id) in it.items" :key="id">
                <router-link :to="{ name: elem.name }" :title="elem.meta.title">{{ elem.meta.title }}</router-link>
              </li>
            </ul>
          </template>
        </li>
      </ul>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useWebData } from './hook'

export default defineComponent({
  name: 'SideBar',
  setup() {
    const { sidebarList } = useWebData()
    return { sidebarList }
  }
})
</script>
