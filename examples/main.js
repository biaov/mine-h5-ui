import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './utils'
import CopyCode from './components/CopyCode.vue'
import TimeLine from './components/TimeLine.vue'

import MINEH5UI from '~' // 开发
import '~/theme-default/index.less' // 开发

/* import MINEH5UI from "../dist/packages/lib/mine-h5-ui.umd.min.js"; // 测试
import "../dist/packages/lib/theme-default/index.css"; // 测试 */

Vue.config.productionTip = false
Vue.use(MINEH5UI)
const Components = { CopyCode, TimeLine } // 需要注册的所有组件
// 遍历注册组件
Object.keys(Components).forEach(elem => {
  Vue.component(Components[elem].name, Components[elem])
})

window.Vue = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
