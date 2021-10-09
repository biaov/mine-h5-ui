<template>
  <!-- 弹出框 -->
  <ul class="m-message-box">
    <li v-for="item in listData" :key="item.id">
      <div class="u-label">{{ item.label }}</div>
      <ul class="m-list-all">
        <li v-for="it in item.list" :key="it.id" @click="onClick(it)">
          <span>{{ it.value }}</span>
          <me-icon name="icon-right1" size="20px" color="#ccc"></me-icon>
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
    const { listData, onClick } = useHandlerClick();
    return { listData, onClick };
  }
});
</script>
<style scoped lang="less">
.m-message-box {
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
<style lang="less">
// 自定义模态框内容
.m-message-cont {
  line-height: 20px;
  padding: 0 15px 21px 15px;
  -webkit-line-clamp: 2;
  background: linear-gradient(90deg, #00aeff, #3369e7);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  color: @font-color;
  font-size: @font-size;
}
</style>
