<template>
  <!-- 弹出框 -->
  <ul class="m-popup">
    <li v-for="item in listData" :key="item.id">
      <div class="u-label">{{ item.label }}</div>
      <ul class="m-list-all">
        <li v-for="it in item.list" :key="it.id" @click="it.visible = true">
          <span>{{ it.value }}</span>
          <me-icon name="icon-right1" size="20px" color="#ccc"></me-icon>
          <me-popup v-model:visible="it.visible" :modal="it.modal" :position="it.position" :closeable="it.closeable" :radius="it.radius" @on-close="it.visible = false">内容...</me-popup>
        </li>
      </ul>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useWebData } from "./hooks";

export default defineComponent({
  setup() {
    const { listData } = useWebData();
    return { listData };
  }
});
</script>
<style scoped lang="less">
.m-popup {
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
    :deep(.me-img) {
      margin-bottom: 10px;
    }
  }
}
</style>
