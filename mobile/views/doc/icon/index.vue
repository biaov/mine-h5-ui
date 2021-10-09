<template>
  <!-- 图标 -->
  <p class="u-top-tips">点击图标即可复制名称</p>
  <ul class="m-icon" ref="icons" data-clipboard-action="copy">
    <li v-for="item in listData" :key="item.id">
      <div class="u-label">{{ item.label }}</div>
      <ul class="m-list-all">
        <li v-for="it in item.list" :key="it.id" @click="onClick(it.name)">
          <me-icon :name="it.name" :color="it.color" :size="it.size"></me-icon>
          <span>{{ it.name }}</span>
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
    const { icons, listData, onClick } = useWebData();
    return { icons, listData, onClick };
  }
});
</script>
<style scoped lang="less">
.u-top-tips {
  width: 100%;
  margin-bottom: 10px;
  text-align: center;
  color: @color-danger;
  font-size: 12px;
}
.m-icon {
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
        :deep(.me-icon) {
          height: 30px;
          line-height: 30px;
          display: block;
        }
        > span {
          .clamp();
          width: 100%;
          text-align: center;
          color: @font-color;
          font-size: @font-size-min;
        }
      }
    }
    :deep(.me-btn) {
      margin-bottom: 10px;
    }
  }
}
</style>
