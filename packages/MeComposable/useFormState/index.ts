import { ref } from 'vue'

interface Rule {
  required?: boolean
  message?: string
  validator?: (val: any) => Promise<any>
}

/**
 * 表单状态管理
 */
export const useFormState = <T extends Record<string, any>>(initState?: T, errorMsg?: (message?: string) => void) => {
  /**
   * 初始化表单状态
   */
  const initData = () => ({ ...(initState || {}) })

  /**
   * 表单状态
   */
  const formState = ref(initData())

  /**
   * 设置表单状态
   */
  const setFormState = (newState: T) => {
    formState.value = newState
  }

  /**
   * 重置表单状态
   */
  const resetFormState = () => {
    formState.value = initData()
  }
  let rules: Record<keyof T, Rule> | undefined
  /**
   * 设置表单规则
   */
  const setFormRules = (newRules: Record<keyof T, Rule>) => {
    rules = newRules
  }

  /**
   * 验证表单状态
   */
  const validFormState = async () => {
    if (!rules) return
    for (const key in rules) {
      const { required, message, validator } = rules[key]
      if (required && !formState.value[key]) {
        errorMsg?.(message)
        return false
      }
      if (!validator) continue
      try {
        await validator(formState.value[key])
      } catch (error) {
        errorMsg?.(error as string)
        return false
      }
    }
    return true
  }

  return { formState, setFormState, setFormRules, validFormState, resetFormState }
}
