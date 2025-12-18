import { ref, watch } from 'vue'
import { useRoute, onBeforeRouteLeave } from 'vue-router'
import { PostMessage } from '@/utils/functions'
import { componentConfig } from '@/config/nav.config'
import { useStorage } from '@/plugins'

/**
 * 页面数据
 */
export const useWebData = () => {
  const { setStorage, getStorage } = useStorage()
  /**
   * 当前活动值
   */
  const collapseActive = ref(getStorage('collapseActive') ?? -1)
  const listData = Object.freeze(componentConfig)
  const { path } = useRoute()
  const postMsg = PostMessage(window.parent!)
  postMsg && postMsg.send(path)

  const setCollapseActive = () => {
    setStorage('collapseActive', collapseActive.value)
  }

  onBeforeRouteLeave(setCollapseActive)
  watch(collapseActive, setCollapseActive)

  return { listData, collapseActive }
}
