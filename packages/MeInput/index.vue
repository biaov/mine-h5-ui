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
import MeIcon from '../MeIcon/index.vue'
import { useSms, useIcon, useInput } from './hooks'
import type { Props, Emits } from './types'

defineOptions({
  name: 'MeInput'
})

const emit = defineEmits<Emits>()

const props = withDefaults(defineProps<Props>(), {
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
})

const { sms, handleSMS } = useSms(props, emit)
const { inputLabel, inputVal, inputType, paddingLeft, paddingRight, isFocus, onFocus, onBlur, onChange, onInput } = useInput(props, emit, sms)
const { handleIcon } = useIcon(props, emit, inputType)
</script>
