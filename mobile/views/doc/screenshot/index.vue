<template>
  <!-- 截长图 -->
  <ul class="m-screenshot">
    <li v-for="list in listData" :key="list.id">
      <div class="u-label">{{ list.label }}</div>
      <me-screenshot :allow-down="list.allowDown" :image-name="list.imageName" :start="list.start" @on-click="onClick(list)" @on-end="onEnd">
        <div class="u-desc-cell">
          <span>{{ list.text }}</span>
          <me-icon name="icon-right1" size="20px" color="#ccc"></me-icon>
        </div>
      </me-screenshot>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useHandlerClick } from "./hooks";

export default defineComponent({
  setup() {
    const { listData, onClick, onEnd } = useHandlerClick();
    return { listData, onClick, onEnd };
  }
});
</script>
<style scoped lang="less">
.m-screenshot {
  > li {
    margin-bottom: 20px;
    .u-label {
      width: 100%;
      margin-bottom: 10px;
      color: @font-color-reduce;
      font-size: @font-size-min;
    }
    .u-desc-cell {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 40px;
      border-bottom: 1px solid darken(@bg-color, 5%);
      cursor: pointer;
      > span {
        color: @font-color;
        font-size: @font-size;
      }
    }
  }
}
</style>
