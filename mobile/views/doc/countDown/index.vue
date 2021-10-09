<template>
  <!-- 倒计时 -->
  <div class="m-count-down">
    <div class="u-label">基础用法</div>
    <me-count-down :time="2 * 60 * 60 * 1000"></me-count-down>
    <div class="u-label">毫秒级渲染</div>
    <me-count-down :time="time" format="hh:mm:ss:ms"></me-count-down>
    <div class="u-label">自定义样式</div>
    <me-count-down :time="time">
      <template #default="{ hh, mm, ss }">
        <span class="u-block">{{ hh }}</span>
        :
        <span class="u-block">{{ mm }}</span>
        :
        <span class="u-block">{{ ss }}</span>
      </template>
    </me-count-down>
    <div class="u-label">手动控制</div>
    <me-count-down format="hh:mm:ss:ms" v-bind="{ ...handleStatus, time }"></me-count-down>
    <ul class="m-btn">
      <li v-for="(item, index) in btnList" :key="index" @click="onClick(item)">
        <me-icon :name="item.icon" size="16px"></me-icon>
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useHandlerClick } from "./hooks";

export default defineComponent({
  setup() {
    const { time, btnList, handleStatus, onClick } = useHandlerClick();
    return { time, btnList, handleStatus, onClick };
  }
});
</script>
<style scoped lang="less">
.m-count-down {
  .u-label {
    width: 100%;
    margin-bottom: 10px;
    color: @font-color-reduce;
    font-size: @font-size-min;
  }
  :deep(.me-count-down) {
    margin-bottom: 10px;
    color: #494949;
    font-size: 14px;
    .u-block {
      border-radius: 4px;
      padding: 3px 6px;
      background: #f66;
      color: #fff;
    }
  }
  .m-btn {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    > li {
      width: 30%;
      height: 36px;
      line-height: 34px;
      border: 1px solid #ccc;
      border-radius: 4px;
      text-align: center;
      color: #494949;
      font-size: 14px;
      cursor: pointer;
      &:hover {
        background: #f2f2f2;
      }
      :deep(.me-icon) {
        margin-right: 5px;
      }
    }
  }
}
</style>
