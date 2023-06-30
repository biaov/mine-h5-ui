import { createApp } from 'vue'
import { MessageEventListener } from '@/utils/functions'
import App from './App.vue'
import router from './router'

import MINEH5UI from '~/index'
import '~/styles/index.less'

/* import MINEH5UI from '#/es'
import '#/styles/index.css' */

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
