<script lang="ts" setup>
import type { Props } from './types'

defineProps<Props>()
</script>

<template>
  <!-- 导航列表 -->
  <ul class="nav-list flex items-center">
    <li v-for="(item, index) in list" :key="index">
      <template v-if="item.text === 'qrcode'">
        <div class="qrcode relative cursor-pointer">
          <img :src="item.url" class="w-20 my-0 mr-10 ml-4" alt="icon" />
          <div class="dropdown absolute top-40 right-0 z-20 flex items-center w-165 h-0 rounded-md pr-5 opacity-0 overflow-hidden">
            <img :src="item.href" alt="qrcode" class="w-140 h-140" />
            <span class="block w-20">移动端展示</span>
          </div>
        </div>
      </template>
      <template v-else>
        <a v-if="item.href" :href="item.href" target="_blank" rel="noopener noreferrer" class="scale px-10 py-0"><img :src="item.url" :title="item.text" :alt="item.text" class="w-20" /></a>
        <router-link v-else :to="{ name: item.name }" class="px-10 py-0">{{ item.text }}</router-link>
      </template>
    </li>
  </ul>
</template>

<style scoped lang="less">
@import './index.less';
</style>
