import { Ref, ref, onMounted, watch } from 'vue'
import type { Props, Emits, USEInput } from './types'

/**
 * 短信验证码
 */
export const useSms = (props: Readonly<Required<Props>>, emit: Emits) => {
  /**
   * label 标签
   */
  const sms = ref<HTMLDivElement>()

  /**
   * 点击短信验证码
   */
  const handleSMS = (e: MouseEvent) => {
    /**
     * 判断是否处于倒计时状态
     */
    !props.smsIs && emit('click-sms', e)
  }

  return { sms, handleSMS }
}

/**
 * 图标
 */
export const useIcon = (props: Readonly<Required<Props>>, emit: Emits, inputType: Ref<string>) => {
  /**
   * 点击图标
   */
  const handleIcon = (e: MouseEvent) => {
    /**
     * 判断是否是密码输入框
     */
    if (props.password) {
      inputType.value = inputType.value === 'password' ? 'text' : 'password'
    } else {
      emit('click-icon', e)
    }
  }

  return { handleIcon }
}

/**
 * 输入框
 */
export const useInput = ({ props, emit, sms, inputVal }: USEInput.Option) => {
  /**
   * label 标签
   */
  const inputLabel = ref<HTMLDivElement>()

  /**
   * 输入框 type 值
   */
  const inputType = ref(props.digit ? 'text' : props.password ? 'password' : props.type)
  /**
   * label 宽度
   */
  const paddingLeft = ref(0)
  /**
   * span 宽度
   */
  const paddingRight = ref(0)
  /**
   * 是否聚焦
   */
  const isFocus = ref(false)

  /**
   * 设置输入框的 padding
   */
  const setInputPadding = (type: number) => {
    /**
     *  type, 0: 左侧, 1: 右侧
     */
    if (type === 1) {
      /**
       * 设置 input 右侧 padding
       */
      paddingRight.value = !props.smsMsg ? 10 : (sms.value as HTMLDivElement).offsetWidth
    } else {
      /**
       * 设置 input 左侧 padding
       */
      paddingLeft.value = !props.label ? 10 : Math.max(parseFloat(props.labelWidth || '0'), inputLabel.value?.offsetWidth!)
    }
  }

  /**
   * 输入框聚焦
   */
  const onFocus = (e: FocusEvent) => {
    isFocus.value = !isFocus.value
    emit('focus', e)
  }

  /**
   * 输入框失去焦点
   */
  const onBlur = (e: FocusEvent) => {
    isFocus.value = !isFocus.value
    emit('blur', e)
  }

  /**
   * 输入框 change 事件
   */
  const onChange = (e: Event) => {
    isFocus.value = !isFocus.value
    emit('change', e)
  }

  /**
   * 输入框 input 事件
   */
  const onInput = (e: Event) => {
    isFocus.value = !isFocus.value
    emit('input', e)
  }

  onMounted(() => {
    setInputPadding(0)
    setInputPadding(1)
  })

  /**
   * 监听输入框的值的变化
   */
  watch(
    inputVal,
    (value, oldValue) => {
      value && (inputVal.value = `${value}`.slice(0, props.maxlength))
      /**
       * 判断是否为整数输入并设置 value
       */
      props.digit && !/^\d*$/g.test(value as string) && (inputVal.value = +(oldValue as string) || 0)
    },
    { immediate: true }
  )

  /**
   * 监听短信校验状态
   */
  watch(
    () => props.smsIs,
    () => {
      /**
       * 设置 input 的 padding
       */
      setInputPadding(1)
    }
  )

  return {
    inputLabel,
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
