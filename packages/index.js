/**
 * Copyright (c) Author biaov<biaov@qq.com>
 * Date 2020-04-21
 */
import MeButton from "./MeButton";
import MeIcon from "./MeIcon";
import MeToast from "./MeToast";
import MeImg from "./MeImg";
import MePopup from "./MePopup";

const components = {
  MeButton,
  MeIcon,
  MeImg,
  MePopup
};

const API = { MeToast };

const install = Vue => {
  if (install.installed) return;
  // 注册组件
  Object.values(components).map(component =>
    Vue.component(component.name, component)
  );
  // 在Vue.prototype里插入API
  Object.keys(API).forEach(elem => {
    Vue.prototype["$" + elem] = API[elem];
  });
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

// 单个导出
export { install, MeButton, MeIcon, MeImg, MePopup };
// 全部导出
export default {
  install,
  ...components
};
