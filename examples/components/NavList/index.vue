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
    > a {
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
    .u-qrcode {
      position: relative;
      cursor: pointer;
      &::after {
        content: "";
        position: absolute;
        top: 20px;
        left: -4px;
        z-index: 1;
        width: 30px;
        height: 20px;
        opacity: 0;
      }
      .u-img {
        width: 20px;
        margin: 0 10px 0 4px;
      }
      .u-dropdown {
        position: absolute;
        top: 40px;
        right: 0;
        z-index: 20;
        display: flex;
        align-items: center;
        width: 165px;
        height: 0;
        display: flex;
        border-radius: 6px;
        padding-right: 5px;
        background: @color-white;
        box-shadow: 0 0 10px @box-shadow-dark;
        opacity: 0;
        transition: all 0.4s;
        overflow: hidden;
        > span {
          display: block;
          width: 20px;
          margin-left: -6px;
          color: @font-color-reduce;
          font-size: @font-size;
        }
        > img {
          width: 140px;
          height: 140px;
        }
      }
      &:hover {
        .u-dropdown {
          height: 140px;
          opacity: 1;
        }
      }
    }
  }
}
</style>
