import { ref } from 'vue'

/**
 * 操作
 */
export const useData = () => {
  /**
   * 自定义图标名称
   */
  const iconName = ref('icon-Loading')

  return { iconName }
}
