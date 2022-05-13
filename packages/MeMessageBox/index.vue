<template>
  <!-- 弹出框 -->
  <div class="me-message-box" :class="{ show: isShow }" @click="onCancel" v-if="!isDestroy">
    <div class="picker" :class="{ show: isShow }" @click.stop>
      <!-- 提示语 -->
      <h3 class="tips">{{ tips }}</h3>
      <!-- Alert 弹出框 / Confirm 确认框 -->
      <div class="text" v-if="['alert', 'confirm'].includes(type)">{{ message }}</div>
      <!-- Prompt 输入框 -->
      <div class="prompt" v-if="type === 'prompt'">
        <label class="label">{{ message }}</label>
        <input type="text" class="input" v-model="inputValue" />
      </div>
      <!-- Custom 自定义框 -->
      <template v-if="type === 'custom'">
        <div v-html="html"></div>
      </template>
      <!-- 操作按钮 -->
      <div class="btn">
        <!-- 取消按钮 -->
        <button type="button" class="btn-cancel" v-if="type !== 'alert'" @click="onCancel">{{ cancelButtonText }}</button>
        <!-- 确认按钮 -->
        <button type="button" class="btn-confirm" @click="onConfirm">{{ confirmButtonText }}</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useShow } from './hooks'
import { OnOk, OnOff } from './types'

const emit = defineEmits<{
  (event: 'action', eventName: string, value?: string): void
}>()

const props = withDefaults(
  defineProps<{
    tips?: string // 标题内容
    type?: string // 弹出框类型, alert | confirm | prompt | custom
    message?: string // 警告语
    html?: string // 自定义 HTML
    cancelButtonText?: string // 取消按钮内容
    confirmButtonText?: string // 确认按钮内容
    onOk?: OnOk // 点击确定函数
    onOff?: OnOff // 点击取消函数
  }>(),
  {
    tips: '提示',
    type: 'confirm',
    message: '',
    html: '',
    cancelButtonText: '取消',
    confirmButtonText: '确认',
    onOk: () => () => {},
    onOff: () => () => {}
  }
)

const { isShow, isDestroy, inputValue, onCancel, onConfirm } = useShow(props, emit)
</script>
