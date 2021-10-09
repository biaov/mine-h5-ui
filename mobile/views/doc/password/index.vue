<template>
  <!-- 密码输入框/短信输入框 -->
  <ul class="m-password">
    <li v-for="item in listData" :key="item.id">
      <div class="u-label">{{ item.label }}</div>
      <div class="m-con-li" v-for="it in item.list" :key="it.id">
        <me-password
          v-model="it.value"
          :num="it.num"
          :type="it.type"
          :skin-type="it.skinType"
          :skin-style="it.skinStyle"
          :is-focus="it.isFocus"
          @on-focus="onFocus(it)"
          @on-blur="onBlur(it)"
        ></me-password>
        <me-keyboard
          v-model:visible="it.keyboardValue"
          @on-complate="onComplate(it)"
          @on-click="handleNum($event, it)"
          @on-delete="onDelete(it)"
          :skin-type="it.keyboardskinType"
          :skin-style="it.keyboardSkinStyle"
        ></me-keyboard>
      </div>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useHandlerClick } from "./hooks";

export default defineComponent({
  setup() {
    const { listData, handleNum, onDelete, onComplate, onFocus, onBlur } = useHandlerClick();
    return { listData, handleNum, onDelete, onComplate, onFocus, onBlur };
  }
});
</script>
<style scoped lang="less">
.m-password {
  cursor: pointer;
  > li {
    margin-bottom: 10px;
    .u-label {
      width: 100%;
      margin-bottom: 10px;
      color: @font-color-reduce;
      font-size: @font-size-min;
    }
    .m-con-li {
      padding-bottom: 10px;
    }
    &:nth-child(2) {
      .m-con-li:nth-child(3) {
        padding-top: 10px;
        background: #343434;
      }
    }
  }
}
</style>
