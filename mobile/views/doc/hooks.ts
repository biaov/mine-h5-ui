import { ref } from 'vue'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'
import { PostMessage } from '@/utils/functions'

/**
 * 操作路由
 */
export const useRouteHandler = () => {
  const routeTitle = ref()
  const {
    meta: { title },
    path
  } = useRoute()
  const postMsg = PostMessage(window.parent!)
  postMsg && postMsg.send(path)

  routeTitle.value = title

  onBeforeRouteUpdate(route => {
    routeTitle.value = route.meta.title
  })

  return { routeTitle }
}
