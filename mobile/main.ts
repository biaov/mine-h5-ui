import { createApp } from 'vue'
import { MessageEventListener } from '@/utils/functions'
import { setupMineH5UI } from '@/plugins'
import App from './App.vue'
import router from './router'

const app = createApp(App)
setupMineH5UI(app)
app.use(router)
app.mount('#mine-h5-ui')

// // 接收数据
MessageEventListener(path => {
  app.config.globalProperties.$router.push({ path })
})
