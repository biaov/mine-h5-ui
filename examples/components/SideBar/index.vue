<template>
  <!-- H5演示 -->
  <ul class="side-bar">
    <!-- 一级列表 -->
    <li v-for="(item, index) in sidebarList" :key="index">
      <h2 class="tit">{{ item.title }}</h2>
      <ul class="list-ct">
        <!-- 二级列表 -->
        <li v-for="(it, i) in item.children" :key="i" :class="{ spot: it.name === 'logs' }">
          <router-link v-if="!it.items" class="tit-ct in" :to="{ name: it.name }">{{ it.meta.title }}</router-link>
          <template v-else>
            <h3 class="tit-ct">{{ it.meta.title }}</h3>
            <ul class="list-in">
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
<script lang="ts" setup>
import { useWebData } from './hook'

const { sidebarList } = useWebData()
</script>
<style scoped lang="less">
@import './index.less';
</style>
