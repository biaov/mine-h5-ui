import { getCurrentInstance } from 'vue'

/**
 * 操作
 */
export const useHandle = () => {
  const { $MeToast } = getCurrentInstance()!.appContext.config.globalProperties
  const styles = Object.freeze({
    /**
     * 边框颜色
     */
    borderColor: '#008fff',
    /**
     * 背景颜色
     */
    background: 'linear-gradient(-45deg, #4bb0ff, #6149f6)',
    /**
     * 标题颜色
     */
    titleColor: '#f56c6c',
    /**
     * 左侧按钮颜色
     */
    leftColor: '#aedbff',
    /**
     * 右侧按钮颜色
     */
    rightColor: '#fff'
  })

  /**
   * 点击右侧按钮
   */
  const handleClick = (tips: string) => {
    $MeToast(`你点击了${tips}`)
  }

  return { styles, handleClick }
}
