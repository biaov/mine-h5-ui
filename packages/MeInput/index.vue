<template>
  <!-- 输入框 -->
  <div class="me-input" :class="`me-input-${focusType}`">
    <div class="label" :style="`width:${labelWidth};text-align-last:${labelAlign};color:${labelColor};`" ref="inputLabel" v-if="label">
      <me-icon :name="labelIcon" :color="labelColor" size="inherit" v-if="labelIcon"></me-icon>
      {{ label }}
    </div>
    <input
      :type="inputType"
      v-model="inputVal"
      class="input"
      :placeholder="placeholder"
      :style="`${isFocus && `border-color:${focusColor};`};padding-right:${paddingRight}px;padding-left:${paddingLeft}px;`"
      @focus="onFocus"
      @blur="onBlur"
      @change="onChange"
      @input="onInput"
      :readonly="readonly"
      :disabled="disabled"
    />
    <me-icon :name="inputType == 'password' ? 'icon-in_biyan' : 'icon-in_zhengyan'" @click="handleIcon" v-if="password"></me-icon>
    <me-icon :name="icon" @click="handleIcon" v-else></me-icon>
    <span class="sms" :class="{ countdown: smsIs }" v-if="!password && smsMsg" @click="handleSMS" ref="sms" :style="`color:${smsColor};`">{{ smsMsg }}</span>
  </div>
</template>
<script lang="ts" setup>
import { MeIcon } from '../MeIcon'
import { useSms, useIcon, useInput } from './hooks'

const emit = defineEmits<{
  (event: 'update:modelValue', value: string | number): void
  (event: 'focus', e: FocusEvent): void
  (event: 'blur', e: FocusEvent): void
  (event: 'change', e: Event): void
  (event: 'input', e: Event): void
  (event: 'click-sms', e: MouseEvent): void
  (event: 'click-icon', e: MouseEvent): void
}>()

const props = withDefaults(
  defineProps<{
    modelValue?: string | number // input 绑定值
    type?: string // 输入框值
    placeholder?: string // 占位符
    readonly?: boolean // 只读状态
    disabled?: boolean // 禁用状态
    label?: string // label 内容
    labelWidth?: string // label 宽度
    labelAlign?: string // label 对齐方式, auto | left | right | center | justify | start | end | initial | inherit
    labelColor?: string // label 颜色
    labelIcon?: string // label 图标
    focusType?: string // 聚焦边框样式, default | primary | success | warning | danger
    focusColor?: string // 聚焦颜色
    icon?: string // 图标
    password?: boolean // 密码输入框
    digit?: boolean // 整数输入
    smsMsg?: string // 短信验证码
    smsColor?: string // 短信颜色
    smsIs?: boolean // 是否开启倒计时
  }>(),
  {
    modelValue: '',
    type: 'text',
    placeholder: '请输入...',
    readonly: false,
    disabled: false,
    label: '',
    labelWidth: '',
    labelAlign: 'left',
    labelColor: '',
    labelIcon: '',
    focusType: 'default',
    focusColor: '',
    icon: '',
    password: false,
    digit: false,
    smsMsg: '',
    smsColor: '',
    smsIs: false
  }
)

const { sms, handleSMS } = useSms(props, emit)
const { inputLabel, inputVal, inputType, paddingLeft, paddingRight, isFocus, onFocus, onBlur, onChange, onInput } = useInput(props, emit, sms)
const { handleIcon } = useIcon(props, emit, inputType)
</script>
