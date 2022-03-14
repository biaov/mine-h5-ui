import { createApp } from 'vue'
import TimeLine from '@/components/TimeLine'
import CopyCode from '@/components/CopyCode'
import { MessageEventListener } from '@/utils/functions'
import { componentConfig } from '@/utils/nav.config'
import router from './router'
import App from './App.vue'
import MINEH5UI from '~/index' // 开发
import '~/theme-default/index.less' // 开发

/* import MINEH5UI from "../lib"; // 测试
import "../lib/theme-default/index.css"; // 测试 */

const app = createApp(App)
app.component(TimeLine.name, TimeLine)
app.component(CopyCode.name, CopyCode)
app.use(MINEH5UI)
app.use(router)
app.mount('#mine-h5-ui')
// 接收数据
MessageEventListener(path => {
  if (!path.includes('/')) return
  const routePath = app.config.globalProperties.$route.path // 当前路由路径
  const { $router } = app.config.globalProperties
  if (path === '/') {
    componentConfig.some(item => item.items.some(it => routePath.includes(it.path))) &&
      $router.push({
        path: '/doc/introduce'
      })
  } else if (path.includes('/doc') && routePath !== path) {
    $router.push({
      path
    })
  }
}, true)
