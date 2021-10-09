<template>
  <!-- 标签栏 -->
  <ul class="me-tab-bar" :style="`border-top-color:${borderColor};background:${background};`">
    <li v-for="(item, index) in list" :key="index" @click="onClick(item)" :class="{ selected: item.state }" :style="`color:${item.state ? colorSelected : color};`">
      <i class="iconfont u-icon" :class="[item.icon, item.dot && 'dot']" v-if="item.icon">
        <em v-if="item.badge && !item.dot">{{ item.badge }}</em>
      </i>
      <img :src="item.state ? item.imgSelected : item.img" alt="图标" class="u-img" v-else />
      <span class="u-txt">{{ item.text }}</span>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { useHandler } from "./hooks";
import { ListItem } from "./interfaces";

export default defineComponent({
  name: "MeTabBar",
  props: {
    // 列表数据
    list: {
      type: Array as PropType<ListItem[]>,
      required: true
    },
    // 上边框颜色
    borderColor: {
      type: String,
      default: "#dcdfe6"
    },
    // 背景颜色
    background: {
      type: String,
      default: "#fff"
    },
    // 未选中状态颜色
    color: {
      type: String,
      default: "#949494"
    },
    // 选中状态颜色
    colorSelected: {
      type: String,
      default: "#409eff"
    }
  },
  setup() {
    const { onClick } = useHandler();
    return { onClick };
  }
});
</script>
