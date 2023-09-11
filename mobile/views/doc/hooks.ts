import { useRoute } from 'vue-router'
import { PostMessage } from '@/utils/functions'

/**
 * 操作路由
 */
export const useRouteHandler = () => {
  const {
    meta: { title },
    path
  } = useRoute()
  const postMsg = PostMessage(window.parent!)
  postMsg && postMsg.send(path)

  return { title }
}
