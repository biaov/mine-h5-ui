<template>
  <!-- 上传图片 -->
  <ul class="m-virtual-list">
    <li v-for="list in listData" :key="list.id">
      <div class="u-label">{{ list.label }}</div>
      <me-virtual-list height="300px" :list="list.list" :itemHeight="list.itemHeight" :remain="16" @on-load-more="onLoadMore(list)">
        <template #default="{ item }">
          <div class="item" :class="{ auto: list.auto }">
            <p>
              <span>#{{ item.virtualId }}.</span>
              {{ item.text }}
            </p>
          </div>
        </template>
        <template #more>
          <div class="u-more" v-if="list.loadStatus">{{ loadMoreText[list.loadStatus] }}</div>
        </template>
      </me-virtual-list>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useHandler } from "./hooks";

export default defineComponent({
  setup() {
    const { listData, loadMoreText, onLoadMore } = useHandler();
    return { listData, loadMoreText, onLoadMore };
  }
});
</script>
<style scoped lang="less">
.m-virtual-list {
  > li {
    margin-bottom: 20px;
    .u-label {
      width: 100%;
      margin-bottom: 10px;
      color: @font-color-reduce;
      font-size: @font-size-min;
    }
    :deep(.me-virtual-list) {
      border: 1px solid @border-color-pre;
    }
    .item {
      width: 100%;
      height: 50px;
      border-bottom: 1px dotted @border-color-line;
      &.auto {
        min-height: 50px;
        height: auto;
        p {
          line-height: 30px;
        }
      }
      p {
        width: 100%;
        height: 100%;
        line-height: 48px;
        padding: 0 15px;
        background: @color-white;
        color: @font-color-reduce;
        font-size: @font-size;
        span {
          color: @color-danger;
        }
      }
    }
    .u-more {
      width: 100%;
      height: 40px;
      line-height: 40px;
      text-align: center;
      color: @font-color-reduce;
      font-size: @font-size-min;
    }
  }
}
</style>
