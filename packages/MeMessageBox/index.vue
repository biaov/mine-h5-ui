<template>
  <!-- 弹出框 -->
  <div class="me-message-box" :class="{ show: isShow }" @click="onCancel" v-if="!isDestroy">
    <div class="m-picker" :class="{ show: isShow }" @click.stop>
      <!-- 提示语 -->
      <h3 class="u-tips">{{ tips }}</h3>
      <!-- Alert 弹出框 / Confirm 确认框 -->
      <div class="m-text" v-if="['alert', 'confirm'].includes(type)">{{ message }}</div>
      <!-- Prompt 输入框 -->
      <div class="u-prompt" v-if="type === 'prompt'">
        <label class="u-label">{{ message }}</label>
        <input type="text" class="u-input" v-model="inputValue" />
      </div>
      <!-- Custom 自定义框 -->
      <template v-if="type === 'custom'">
        <div v-html="html"></div>
      </template>
      <!-- 操作按钮 -->
      <div class="m-btn">
        <!-- 取消按钮 -->
        <button type="button" class="u-btn-cancel" v-if="type !== 'alert'" @click="onCancel">{{ cancelButtonText }}</button>
        <!-- 确认按钮 -->
        <button type="button" class="u-btn-confirm" @click="onConfirm">{{ confirmButtonText }}</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { useShow } from './hooks'
import { OnOk, OnOff } from './types'

export default defineComponent({
  name: 'MeMessageBox',
  emits: ['action'],
  props: {
    // 标题内容
    tips: {
      type: String,
      default: '提示'
    },
    // 弹出框类型
    type: {
      type: String,
      default: 'confirm' // alert | confirm | prompt | custom
    },
    // 警告语
    message: {
      type: String,
      default: ''
    },
    // 自定义 HTML
    html: {
      type: String,
      default: ''
    },
    // 取消按钮内容
    cancelButtonText: {
      type: String,
      default: '取消'
    },
    // 确认按钮内容
    confirmButtonText: {
      type: String,
      default: '确认'
    },
    // 点击确定函数
    onOk: {
      type: Function as PropType<OnOk>,
      default: () => () => {}
    },
    // 点击取消函数
    onOff: {
      type: Function as PropType<OnOff>,
      default: () => () => {}
    }
  },
  setup(props, { emit }) {
    const { isShow, isDestroy, inputValue, onCancel, onConfirm } = useShow(props, emit)
    return { isShow, isDestroy, inputValue, onCancel, onConfirm }
  }
})
</script>
