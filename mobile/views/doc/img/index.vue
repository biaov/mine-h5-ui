<template>
  <!-- 图片 -->
  <div class="m-img">
    <ul class="m-list-img">
      <li v-for="item in listData" :key="item.id">
        <div class="u-label">{{ item.label }}</div>
        <ul class="m-list-all">
          <li v-for="it in item.list" :key="it.id">
            <me-img :src="it.src" :width="it.width" :height="it.height" :fill="it.fill" :radius="it.radius" @on-load="onLoad" @on-error="onError"></me-img>
            <span v-if="it.width && !it.height">width:{{ it.width }}</span>
            <span v-if="!it.width && it.height">height:{{ it.height }}</span>
            <span v-if="it.width && it.height">width:{{ it.width }};height:{{ it.height }}</span>
            <span v-if="it.fill">fill:{{ it.fill }}</span>
            <span v-if="it.radius">radius:{{ it.radius }}</span>
          </li>
        </ul>
      </li>
    </ul>
    <me-mask :visible="isShowMask">
      <me-loading type="circle2" color="#f56c6c" size="100px">
        <div class="u-text">加载中...</div>
      </me-loading>
    </me-mask>
  </div>

</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useWebData } from "./hooks";

export default defineComponent({
  setup() {
    const { isShowMask, listData, onLoad, onError } = useWebData();
    return { isShowMask, listData, onLoad, onError };
  }
});
</script>
<style scoped lang="less">
.m-img {
  .m-list-img {
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
  :deep(.me-loading) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: transparent;
    .u-text {
      padding-top: 10px;
      text-align: center;
      color: @color-white;
    }
  }
}
</style>
