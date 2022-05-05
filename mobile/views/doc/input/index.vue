<style scoped lang="less">
@import './index.less';
</style>
<template>
  <!-- 输入框 -->
  <ul class="m-input">
    <li v-for="item in listData" :key="item.id">
      <div class="u-label">{{ item.label }}</div>
      <ul class="m-list-all">
        <li v-for="it in item.list" :key="it.id">
          <me-input
            v-model="it.value"
            :placeholder="it.placeholder"
            :label="it.label"
            :label-width="it.labelWidth"
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
<script lang="ts" setup>
import { useHandlerInput } from './hooks'

const { listData, onSMS, onIcon } = useHandlerInput()
</script>
