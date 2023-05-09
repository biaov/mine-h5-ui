import { useRoute } from 'vue-router'
import { PostMessage } from '@/utils/functions'
import { componentConfig } from '@/config/nav.config'

// 页面数据
export const useWebData = () => {
  const listData = Object.freeze(componentConfig)
  const { path } = useRoute()
  const postMsg = PostMessage(window.parent!)
  postMsg && postMsg.send(path)

  return { listData }
}
