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

<template>
  <!-- 弹出框 -->
  <div v-if="!isDestroy" class="me-message-box" :class="{ show: isShow }" :style="`--animation-duration:${animationDuration}ms;`" @click="onCancel">
    <div class="picker" :class="{ show: isShow }" @click.stop>
      <!-- 提示语 -->
      <h3 class="tips">{{ tips }}</h3>
      <!-- Alert 弹出框 / Confirm 确认框 -->
      <div v-if="['alert', 'confirm'].includes(type)" class="text">{{ message }}</div>
      <!-- Prompt 输入框 -->
      <div v-if="type === 'prompt'" class="prompt">
        <label class="label">{{ message }}</label>
        <input v-model="inputValue" type="text" class="input" />
      </div>
      <!-- Custom 自定义框 -->
      <template v-if="type === 'custom'">
        <div v-html="html"></div>
      </template>
      <!-- 操作按钮 -->
      <div class="btn">
        <!-- 取消按钮 -->
        <button v-if="type !== 'alert'" type="button" class="btn-cancel" @click="onCancel">{{ cancelButtonText }}</button>
        <!-- 确认按钮 -->
        <button type="button" class="btn-confirm" @click="onConfirm">{{ confirmButtonText }}</button>
      </div>
    </div>
  </div>
</template>
