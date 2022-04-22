import { getCurrentInstance } from 'vue'

// 点击项
export const useHandlerClick = () => {
  const { $MeToast } = getCurrentInstance()!.appContext.config.globalProperties
  const styles = Object.freeze({
    borderColor: '#008fff', // 边框颜色
    background: 'linear-gradient(-45deg, #4bb0ff, #6149f6)', // 背景颜色
    titleColor: '#f56c6c', // 标题颜色
    leftColor: '#aedbff', // 左侧按钮颜色
    rightColor: '#fff' // 右侧按钮颜色
  })
  // 点击右侧按钮
  const handleClick = (tips: string) => {
    $MeToast(`你点击了${tips}`)
  }
  return { styles, handleClick }
}
