<template>
  <!-- 标签栏 -->
  <ul class="me-tab-bar" :style="`border-top-color:${borderColor};background:${background};`">
    <li v-for="(item,index) in list" :key="index" @click="onclick(item)" :class="{selected:item.state}" :style="`color:${item.state?colorSelected:color};`">
      <i class="iconfont u-icon" :class="[item.icon,item.dot&&'dot']" v-if="item.icon"><em v-if="item.badge&&!item.dot">{{item.badge}}</em></i>
      <img :src="item.state?item.imgSelected:item.img" alt="图标" class="u-img" v-else>
      <span class="u-txt">{{item.text}}</span>
    </li>
  </ul>
</template>
<script>
export default {
  name: "MeTabBar",
  props: {
    // 列表数据
    list: {
      type: Array,
      required: true
      /**
       * 列表对象数据
       * @param {string} [icon] - 图标
       * @param {string} text - 文本内容
       * @param {boolean} [dot] - 图标右上角的点
       * @param {boolean} state - 选中状态
       * @param {string} [badge] - 图标右上角徽标的内容
       * @param {string} [img] - 自定义图标
       * @param {string} [imgSelected] - 自定义选中图标
       */
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
  data() {
    return {};
  },
  methods: {
    // 点击列表项
    onclick(item) {
      !item.state && this.$emit("on-change", { ...item });
    }
  }
};
</script>