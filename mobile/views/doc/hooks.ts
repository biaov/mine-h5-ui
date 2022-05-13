import { useRoute } from 'vue-router'
import { PostMessage } from '@/utils/functions'

// 操作路由
export const useRouteHandler = () => {
  const {
    meta: { title },
    path
  } = useRoute()

  PostMessage(window.parent!).send(path)

  return { title }
}
