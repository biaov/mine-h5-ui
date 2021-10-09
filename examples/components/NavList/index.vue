<template>
  <!-- 导航列表 -->
  <ul class="m-nav-list">
    <li v-for="(item, index) in list" :key="index">
      <a :href="item.href" target="_blank" rel="noopener noreferrer" class="u-scale" v-if="item.href"><img :src="item.url" :title="item.text" :alt="item.text" /></a>
      <router-link :to="{ name: item.name }" v-else>{{ item.text }}</router-link>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ListItem } from "./interfaces";

export default defineComponent({
  name: "NavList",
  props: {
    // 列表数据
    list: {
      type: Array as PropType<ListItem[]>,
      required: true
    }
  },
  setup() {
    return {};
  }
});
</script>
<style scoped lang="less">
.m-nav-list {
  display: flex;
  align-content: center;
  li {
    a {
      padding: 0 10px;
      color: @font-color;
      font-size: @font-size;
      &:hover {
        color: @color-primary;
      }
      &.u-scale {
        .scale();
      }
      img {
        width: 20px;
      }
    }
  }
}
</style>
