<template>
  <!-- 输入框 -->
  <ul class="m-input">
    <li v-for="item in listData" :key="item.id">
      <div class="u-label">{{ item.label }}</div>
      <ul class="m-list-all">
        <li v-for="it in item.list" :key="it.id">
          <me-input
            :type="it.type"
            v-model="it.value"
            :placeholder="it.placeholder"
            :label="it.label"
            :label-width="it.labelWidth"
            :label-align="it.labelAlign"
            :label-color="it.labelColor"
            :label-icon="it.labelIcon"
            :focus-type="it.focusType"
            :focus-color="it.focusColor"
            :icon="it.icon"
            :digit="it.digit"
            :password="it.password"
            :sms-msg="it.smsMsg"
            :sms-color="it.smsColor"
            :sms-is="it.smsIs"
            @on-click-sms="onSMS(it)"
            @on-click-icon="onIcon(it)"
            :readonly="it.readonly"
            :disabled="it.disabled"
          ></me-input>
        </li>
      </ul>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useHandlerInput } from "./hooks";

export default defineComponent({
  setup() {
    const { listData, onSMS, onIcon } = useHandlerInput();
    return { listData, onSMS, onIcon };
  }
});
</script>
<style scoped lang="less">
.m-input {
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
        margin-bottom: 10px;
        cursor: pointer;
        :deep(.me-input) {
          :deep(.u-input[disabled]) {
            cursor: not-allowed;
          }
        }
      }
    }
  }
}
</style>
