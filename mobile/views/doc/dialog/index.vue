<template>
  <!-- 对话框 -->
  <ul class="m-dialog">
    <li v-for="item in listData" :key="item.id">
      <div class="u-label">{{ item.label }}</div>
      <ul class="m-list-all">
        <li v-for="it in item.list" :key="it.id" @click="it.visible = true">
          <span>{{ it.value }}</span>
          <me-icon name="icon-right1" size="20px" color="#ccc"></me-icon>
          <me-dialog v-model:visible="it.visible" tips="提示">
            <div class="m-text">
              走在斑马线上的好处：
              <br />
              我就是一个行人，
              <br />
              赔的多一点！
            </div>
            <div class="m-btn">
              <button type="button" class="u-btn-cancel" @click="onCancel(it)">取消</button>
              <button type="button" class="u-btn-confirm" @click="onConfirm(it)">确定</button>
            </div>
          </me-dialog>
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
    const { listData, onConfirm, onCancel } = useHandlerClick();
    return { listData, onConfirm, onCancel };
  }
});
</script>
<style scoped lang="less">
.m-dialog {
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
        :deep(.me-dialog) {
          .m-text {
            padding: 0 10px 16px;
            text-align: center;
            color: @font-color;
            font-size: @font-size;
          }
        }
      }
    }
  }
}
</style>
