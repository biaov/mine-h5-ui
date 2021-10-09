<template>
  <!-- 数字键盘 -->
  <div class="m-keyboard">
    <ul class="m-list">
      <li v-for="item in listData" :key="item.id">
        <div class="u-label">{{ item.label }}</div>
        <div class="u-tit" v-for="it in item.list" :key="it.id" @click.stop="onClick(it)">
          <span>{{ it.label }}</span>
          <me-icon name="icon-right1" size="20px" color="#ccc"></me-icon>
          <me-keyboard
            v-model:visible="it.value"
            @on-complate="onComplate(it)"
            @on-click="handleNum($event, it)"
            @on-delete="onDelete(it)"
            :skin-type="it.skinType"
            :skin-style="it.skinStyle"
          ></me-keyboard>
        </div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useHandlerClick } from "./hooks";

export default defineComponent({
  setup() {
    const { listData, onClick, handleNum, onDelete, onComplate } = useHandlerClick();
    return { listData, onClick, handleNum, onDelete, onComplate };
  }
});
</script>
<style scoped lang="less">
.m-keyboard {
  .m-list {
    > li {
      margin-bottom: 10px;
      .u-label {
        width: 100%;
        margin-bottom: 10px;
        color: @font-color-reduce;
        font-size: @font-size-min;
      }
      .u-tit {
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
  :deep(.me-keyboard) {
    > li {
      cursor: pointer;
    }
  }
}
</style>
