<style scoped lang="less">
@import './index.less';
</style>
<template>
  <!-- 密码输入框/短信输入框 -->
  <ul class="password">
    <li v-for="item in listData" :key="item.id">
      <div class="label">{{ item.label }}</div>
      <div class="con-li" v-for="it in item.list" :key="it.id">
        <me-password v-model="it.value" :num="it.num" :type="it.type" :skin-type="it.skinType" :is-focus="it.isFocus" @focus="onFocus(it)" @blur="onBlur(it)"></me-password>
        <me-keyboard v-model:visible="it.keyboardValue" @complate="onComplate(it)" @click="handleNum($event, it)" @delete="onDelete(it)" :skin-type="it.keyboardskinType"></me-keyboard>
      </div>
    </li>
  </ul>
</template>
<script lang="ts" setup>
import { useHandle } from './hooks'

const { listData, handleNum, onDelete, onComplate, onFocus, onBlur } = useHandle()
</script>
