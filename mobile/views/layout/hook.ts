import { useRoute } from 'vue-router'
import { PostMessage } from '@/utils/functions'
import NavConfig from '@/utils/nav.config.json'
// 页面数据
export const useWebData = () => {
  const listData = Object.freeze(NavConfig['组件'])
  const { path } = useRoute()
  PostMessage(window.parent!).send(path)
  return { listData }
}
