import { createApp } from 'vue'
import { MessageEventListener } from '@/utils/functions'
import App from './App.vue'
import router from './router'

import MINEH5UI from '~/index' // 开发
import '~/theme-default/index.less' // 开发

/* import MINEH5UI from "../lib"; // 测试
import "../lib/theme-default/index.css"; // 测试 */

const app = createApp(App)
app.use(MINEH5UI)
app.use(router)
app.mount('#mine-h5-ui')
// 接收数据
MessageEventListener(path => {
  app.config.globalProperties.$router.push({
    path
  })
})
