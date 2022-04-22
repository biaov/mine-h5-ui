<style scoped lang="less">
@import './index.less';
</style>
<template>
  <!-- 导航列表 -->
  <ul class="m-nav-list">
    <li v-for="(item, index) in list" :key="index">
      <template v-if="item.text === 'qrcode'">
        <div class="u-qrcode">
          <img :src="item.url" class="u-img" alt="icon" />
          <div class="u-dropdown">
            <img :src="item.href" alt="qrcode" />
            <span>移动端展示</span>
          </div>
        </div>
      </template>
      <template v-else>
        <a :href="item.href" target="_blank" rel="noopener noreferrer" class="u-scale" v-if="item.href"><img :src="item.url" :title="item.text" :alt="item.text" /></a>
        <router-link :to="{ name: item.name }" v-else>{{ item.text }}</router-link>
      </template>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { ListItem } from './interfaces'

export default defineComponent({
  name: 'NavList',
  props: {
    // 列表数据
    list: {
      type: Array as PropType<ListItem[]>,
      required: true
    }
  },
  setup() {
    return {}
  }
})
</script>
