<template>
  <!-- 下拉框 -->
  <div class="m-combo-box" @click.stop="onClickFrame">
    <div class="u-txt">
      <span>{{ list[1].version }}</span>
      <img src="../../assets/icon-right.png" alt="icon-right.png" :class="{ rotate: isShow }" />
    </div>
    <!-- 列表 -->
    <transition name="translate">
      <ul class="m-dropdown" v-if="isShow">
        <li v-for="(item, index) in list" :key="index" @click="onClickItem(item)">
          {{ item.version }}
        </li>
      </ul>
    </transition>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { useShowAction } from "./hooks";
import { ListItem } from "./interfaces";

export default defineComponent({
  name: "ComboBox",
  props: {
    // 列表
    list: {
      type: Array as PropType<ListItem[]>,
      required: true
    }
  },
  setup(props) {
    const { isShow, onClickFrame, onClickItem } = useShowAction(props);
    return { isShow, onClickFrame, onClickItem };
  }
});
</script>
<style scoped lang="less">
.m-combo-box {
  position: relative;
  cursor: pointer;
  .u-txt {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100px;
    padding: 5px 4px 5px 10px;
    border: 1px solid @border-color;
    border-radius: @border-radius-default;
    background: @color-white;
    transition: all 0.4s;
    &:hover {
      border-color: @color-primary;
    }
    span {
      color: @font-color;
      font-size: @font-size-min;
    }
    img {
      width: 16px;
      opacity: 0.4;
      transition: transform 0.4s;
      &.rotate {
        transform: rotate(90deg);
      }
    }
  }
  .m-dropdown {
    position: absolute;
    top: 36px;
    left: 0px;
    width: 100px;
    border-radius: @border-radius-default;
    padding: 6px 0;
    background: @color-white;
    box-shadow: 0 2px 12px 0 @box-shadow-default;
    &::before {
      content: "";
      position: absolute;
      top: -6px;
      left: 10px;
      border-right: 7px solid transparent;
      border-bottom: 7px solid @color-white;
      border-left: 7px solid transparent;
    }
    > li {
      width: 100%;
      height: 30px;
      line-height: 30px;
      padding: 0 10px;
      color: @font-color-reduce;
      font-size: @font-size-min;
      &:hover {
        background: @bg-hover;
        color: @color-primary;
      }
    }
  }
}
</style>
