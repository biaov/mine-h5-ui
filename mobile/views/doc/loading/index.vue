<template>
  <!-- 加载 -->
  <ul class="m-loading">
    <li v-for="item in listData" :key="item.id">
      <div class="u-label">{{ item.label }}</div>
      <ul class="m-list-all">
        <li v-for="{ id, type, size, color, icon, text } in item.list" :key="id">
          <me-loading v-bind="{ type, size, color, icon }">
            <div>{{ text }}</div>
          </me-loading>
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
.m-loading {
  > li {
    margin-bottom: 10px;
    .u-label {
      width: 100%;
      margin-bottom: 10px;
      color: @font-color-reduce;
      font-size: @font-size-min;
    }

    .m-list-all {
      .clear-flex();
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      > li {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 88px;
        margin-bottom: 15px;
        cursor: pointer;
        > span {
          display: block;
          width: 100%;
          text-align: center;
          word-wrap: break-word;
          color: @font-color;
          font-size: @font-size-min;
        }
      }
    }
    :deep(.me-img) {
      margin-bottom: 10px;
    }
  }
}
</style>
