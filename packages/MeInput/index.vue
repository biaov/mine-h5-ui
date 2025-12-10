<script lang="ts" setup>
import MeIcon from '../MeIcon/index.vue'
import { useSms, useIcon, useInput } from './hooks'
import type { Props, Emits } from './types'

defineOptions({
  name: 'MeInput'
})

const emit = defineEmits<Emits>()

const props = withDefaults(defineProps<Props>(), {
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
  smsIs: false,
  minlength: 0,
  maxlength: 999
})
/**
 * 输入框值
 */
const inputVal = defineModel<string>({ default: '' })
const { sms, handleSMS } = useSms(props, emit)
const { inputLabel, inputType, paddingLeft, paddingRight, isFocus, onFocus, onBlur, onChange, onInput } = useInput({ props, emit, sms, inputVal })
const { handleIcon } = useIcon(props, emit, inputType)
</script>

<template>
  <!-- 输入框 -->
  <div class="me-input" :class="`me-input-${focusType}`">
    <div v-if="label" ref="inputLabel" class="label" :style="`width:${labelWidth};text-align-last:${labelAlign};color:${labelColor};`">
      <me-icon v-if="labelIcon" :name="labelIcon" :color="labelColor" size="inherit" />
      {{ label }}
    </div>
    <input
      v-model="inputVal"
      :type="inputType"
      class="input"
      :placeholder="placeholder"
      :style="`${isFocus && `border-color:${focusColor};`};padding-right:${paddingRight}px;padding-left:${paddingLeft}px;`"
      :minlength="minlength"
      :maxlength="maxlength"
      :readonly="readonly"
      :disabled="disabled"
      @focus="onFocus"
      @blur="onBlur"
      @change="onChange"
      @input="onInput"
    />
    <me-icon v-if="password" :name="inputType == 'password' ? 'icon-in_biyan' : 'icon-in_zhengyan'" @click="handleIcon" />
    <me-icon v-else :name="icon" @click="handleIcon" />
    <span v-if="!password && smsMsg" ref="sms" class="sms" :class="{ countdown: smsIs }" :style="`color:${smsColor};`" @click="handleSMS">{{ smsMsg }}</span>
  </div>
</template>
