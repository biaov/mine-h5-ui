import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/utils'

import MINEH5UI from '~' // 开发
import '~/styles/index.less' // 开发

/* import MINEH5UI from "../dist/packages/lib/mine-h5-ui.umd.min.js"; // 测试
import "../dist/packages/styles/index.css"; // 测试 */

Vue.config.productionTip = false
Vue.use(MINEH5UI)
window.Vue = new Vue({
  router,
  render: h => h(App)
}).$mount('#mobile')
