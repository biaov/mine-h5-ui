import { Ref, ref, onMounted, watch } from 'vue'
import { Props } from './types'
import { Emits } from './interfaces'

// 短信验证码
export const useSms = (props: Props, emit: Emits) => {
  const sms = ref<HTMLDivElement>() // label 标签

  // 点击短信验证码
  const handleSMS = (e: MouseEvent) => {
    // 判断是否处于倒计时状态
    !props.smsIs && emit('on-click-sms', e)
  }

  return { sms, handleSMS }
}

// 图标
export const useIcon = (props: Props, emit: Emits, inputType: Ref<string>) => {
  // 点击图标
  const handleIcon = (e: MouseEvent) => {
    // 判断是否是密码输入框
    if (props.password) {
      inputType.value = inputType.value === 'password' ? 'text' : 'password'
    } else {
      emit('on-click-icon', e)
    }
  }

  return { handleIcon }
}

// 输入框
export const useInput = (props: Props, emit: Emits, sms: Ref<HTMLDivElement | undefined>) => {
  const inputLabel = ref<HTMLDivElement>() // label 标签
  const inputVal = ref<string | number>('') // 输入框值
  const inputType = ref(props.digit ? 'text' : props.password ? 'password' : props.type) // 输入框 type 值
  const paddingLeft = ref(0) // label 宽度
  const paddingRight = ref(0) // span 宽度
  const isFocus = ref(false) // 是否聚焦

  // 设置输入框的 padding
  const setInputPadding = (type: number) => {
    // 0:左侧,1:右侧
    if (type === 1) {
      paddingRight.value = !props.smsMsg ? 10 : sms.value?.offsetWidth! // 设置 input 右侧 padding
    } else {
      // 设置 input 左侧 padding
      paddingLeft.value = !props.label ? 10 : Math.max(parseFloat(props.labelWidth || '0'), inputLabel.value?.offsetWidth!)
    }
  }

  // 输入框聚焦
  const onFocus = (e: FocusEvent) => {
    isFocus.value = !isFocus.value
    emit('on-focus', e)
  }

  // 输入框失去焦点
  const onBlur = (e: FocusEvent) => {
    isFocus.value = !isFocus.value
    emit('on-blur', e)
  }

  // 输入框 change 事件
  const onChange = (e: Event) => {
    isFocus.value = !isFocus.value
    emit('on-change', e)
  }

  // 输入框 input 事件
  const onInput = (e: Event) => {
    isFocus.value = !isFocus.value
    emit('on-input', e)
  }

  onMounted(() => {
    setInputPadding(0)
    setInputPadding(1)
  })

  // 监听参数 value 的变化
  watch(
    () => props.modelValue,
    value => {
      inputVal.value = value // 设置 value
    },
    {
      immediate: true
    }
  )

  // 监听输入框的值的变化
  watch(inputVal, (value, oldValue) => {
    // 判断是否为整数输入并设置value
    props.digit && !/^\d*$/g.test(value as string) && (inputVal.value = +oldValue)
    emit('update:modelValue', value)
  })

  // 监听短信验证状态
  watch(
    () => props.smsIs,
    () => {
      setInputPadding(1) // 设置 input 的 padding
    }
  )

  return {
    inputLabel,
    inputVal,
    inputType,
    paddingLeft,
    paddingRight,
    isFocus,
    onFocus,
    onBlur,
    onChange,
    onInput
  }
}
