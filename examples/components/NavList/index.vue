<template>
  <!-- 导航列表 -->
  <ul class="nav-list">
    <li v-for="(item, index) in list" :key="index">
      <template v-if="item.text === 'qrcode'">
        <div class="qrcode">
          <img :src="item.url" class="img" alt="icon" />
          <div class="dropdown">
            <img :src="item.href" alt="qrcode" />
            <span>移动端展示</span>
          </div>
        </div>
      </template>
      <template v-else>
        <a v-if="item.href" :href="item.href" target="_blank" rel="noopener noreferrer" class="scale"><img :src="item.url" :title="item.text" :alt="item.text" /></a>
        <router-link v-else :to="{ name: item.name }">{{ item.text }}</router-link>
      </template>
    </li>
  </ul>
</template>
<script lang="ts" setup>
import type { Props } from './types'

defineProps<Props>()
</script>
<style scoped lang="less">
@import './index.less';
</style>
