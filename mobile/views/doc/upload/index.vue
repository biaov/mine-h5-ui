<template>
  <!-- 上传图片 -->
  <ul class="m-upload">
    <li v-for="item in listData" :key="item.id">
      <div class="u-label">{{ item.label }}</div>
      <me-upload
        :max-count="item.maxCount"
        :max-size="item.maxSize"
        :preview="item.preview"
        :multiple="item.multiple"
        :deletable="item.deletable"
        :disabled="item.disabled"
        v-model:fileList="item.fileList"
      ></me-upload>
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
.m-upload {
  > li {
    margin-bottom: 10px;
    .u-label {
      width: 100%;
      margin-bottom: 10px;
      color: @font-color-reduce;
      font-size: @font-size-min;
    }
    :deep(.me-upload) {
      &[aria-disabled="true"] {
        cursor: not-allowed;
      }
      .m-imgs {
        width: 80px;
      }
    }
  }
}
</style>
