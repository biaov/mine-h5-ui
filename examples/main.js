import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./utils/global";
import DemoBlock from "./components/DemoBlock";
import TimeLine from "./components/TimeLine";

import MINEH5UI from "~"; // 开发
import "~/theme-default/src/index.less"; // 开发

/* import MINEH5UI from "../lib/mine-h5-ui.umd.min.js"; // 测试
import "../lib/theme-default/index.css"; // 测试 */

/* import MINEH5UI from "mine-h5-ui"; // 生产
import "mine-h5-ui/lib/theme-default/index.css"; // 生产
 */
Vue.config.productionTip = false;
Vue.use(MINEH5UI);
const Components = { DemoBlock, TimeLine }; // 需要注册的所有组件
// 遍历注册组件
Object.keys(Components).forEach(elem => {
  Vue.component(Components[elem].name, Components[elem]);
});

window.Vue = new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
