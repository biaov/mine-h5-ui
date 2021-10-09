<template>
  <!-- 分享面板 -->
  <ul class="m-share-sheet">
    <li v-for="item in listData" :key="item.id">
      <div class="u-label">{{ item.label }}</div>
      <ul class="m-list-all">
        <li v-for="it in item.list" :key="it.id" @click="onClick(it)">
          <span>{{ it.value }}</span>
          <me-icon name="icon-right1" size="20px" color="#ccc"></me-icon>
          <me-share-sheet v-model:visible="it.visible" :list="it.list" tips="立即分享给好友" @on-change="onChange" @on-cancel="onCancel"></me-share-sheet>
        </li>
      </ul>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useHandlerClick } from "./hooks";

export default defineComponent({
  setup() {
    const { listData, onClick, onChange, onCancel } = useHandlerClick();
    return { listData, onClick, onChange, onCancel };
  }
});
</script>
<style scoped lang="less">
.m-share-sheet {
  > li {
    margin-bottom: 10px;
    .u-label {
      width: 100%;
      margin-bottom: 10px;
      color: @font-color-reduce;
      font-size: @font-size-min;
    }
    .m-list-all {
      > li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
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
}
</style>
