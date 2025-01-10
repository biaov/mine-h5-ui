import { createApp } from 'vue'
import TimeLine from '@/components/TimeLine'
import CopyCode from '@/components/CopyCode'
import { MessageEventListener } from '@/utils/functions'
import { componentConfig } from '@/config/nav.config'
import router from './router'
import App from './App.vue'
import mineh5ui from './plugins'

const app = createApp(App)
app.component('TimeLine', TimeLine)
app.component('CopyCode', CopyCode)
app.use(mineh5ui)
app.use(router)
app.mount('#mine-h5-ui')

// 接收数据
MessageEventListener(path => {
  if (!path.includes('/')) return
  /**
   * 当前路由路径
   */
  const routePath = app.config.globalProperties.$route.path
  const { $router } = app.config.globalProperties
  if (path === '/') {
    componentConfig.some(item => item.items.some(it => routePath.includes(it.path))) &&
      $router.push({
        path: '/doc/overview'
      })
  } else if (path.includes('/doc') && routePath !== path) {
    $router.push({
      path
    })
  }
}, true)
