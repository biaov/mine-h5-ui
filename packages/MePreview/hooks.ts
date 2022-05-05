import { ref, onMounted } from 'vue'

// 操作
export const useShow = () => {
  const isDestroy = ref(false) // 是否销毁
  const isShow = ref(false) // 是否显示

  // 点击遮罩层
  const onClose = () => {
    isShow.value = false
    setTimeout(() => {
      isDestroy.value = true
    }, 400)
  }

  onMounted(() => {
    // 在挂载真实DOM树后显示过渡效果
    setTimeout(() => {
      isShow.value = true
    }, 100)
  })

  return { isShow, isDestroy, onClose }
}
