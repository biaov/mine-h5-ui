<template>
  <!-- 图片预览 -->
  <ul class="m-preview">
    <li v-for="(item, index) in listData" :key="index">
      <div class="u-label">{{ item.label }}</div>
      <div class="u-img" @click="onPreview(item)">
        <img :src="item.url" alt="img" />
      </div>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useHandler } from "./hooks";

export default defineComponent({
  setup() {
    const { listData, onPreview } = useHandler();
    return { listData, onPreview };
  }
});
</script>
<style scoped lang="less">
.m-preview {
  > li {
    margin-bottom: 15px;
    .u-label {
      width: 100%;
      margin-bottom: 10px;
      color: @font-color-reduce;
      font-size: @font-size-min;
    }
    .u-img {
      width: 100px;
      margin: 0 auto;
      img {
        width: 100%;
      }
    }
  }
}
</style>
