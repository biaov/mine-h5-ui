import { createApp } from 'vue'
import { MessageEventListener } from '@/utils/functions'
import mineh5ui from '@/plugins'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(mineh5ui)
app.use(router)
app.mount('#mine-h5-ui')

// // 接收数据
MessageEventListener(path => {
  app.config.globalProperties.$router.push({ path })
})
