<style scoped lang="less">
@import './index.less';
</style>
<template>
  <!-- 密码输入框/短信输入框 -->
  <ul class="m-password">
    <li v-for="item in listData" :key="item.id">
      <div class="u-label">{{ item.label }}</div>
      <div class="m-con-li" v-for="it in item.list" :key="it.id">
        <me-password v-model="it.value" :num="it.num" :type="it.type" :skin-type="it.skinType" :is-focus="it.isFocus" @on-focus="onFocus(it)" @on-blur="onBlur(it)"></me-password>
        <me-keyboard v-model:visible="it.keyboardValue" @on-complate="onComplate(it)" @on-click="handleNum($event, it)" @on-delete="onDelete(it)" :skin-type="it.keyboardskinType"></me-keyboard>
      </div>
    </li>
  </ul>
</template>
<script lang="ts" setup>
import { useHandlerClick } from './hooks'

const { listData, handleNum, onDelete, onComplate, onFocus, onBlur } = useHandlerClick()
</script>
