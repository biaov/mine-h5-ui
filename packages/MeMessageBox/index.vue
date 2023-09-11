<template>
  <!-- 弹出框 -->
  <div class="me-message-box" :class="{ show: isShow }" @click="onCancel" v-if="!isDestroy" :style="`--animation-duration:${animationDuration}ms;`">
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
import type { Props, Emits } from './types'

defineOptions({
  name: 'MeMessageBox'
})

const emit = defineEmits<Emits>()

const props = withDefaults(defineProps<Props>(), {
  tips: '提示',
  type: 'alert',
  message: '',
  html: '',
  cancelButtonText: '取消',
  confirmButtonText: '确认',
  onOk: () => () => {},
  onOff: () => () => {}
})

const { isShow, isDestroy, inputValue, onCancel, onConfirm, animationDuration } = useShow(props, emit)
</script>
