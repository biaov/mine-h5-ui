/**
 * Copyright (c) Author biaov<biaov@qq.com>
 * Date 2020-04-21
 */

/* 基础组件 start */
import MeButton from "./MeButton"; // 按钮
import MeIcon from "./MeIcon"; // 图标
import MeImg from "./MeImg"; // 图片
import MePopup from "./MePopup"; // 弹出层
/* 基础组件 end */

/* 表单组件 start */
import MeInput from "./MeInput"; // 输入框
import MeRadio from "./MeRadio"; // 单选框
import MeRadioGroup from "./MeRadioGroup"; // 单选框组
import MeCheckbox from "./MeCheckbox"; // 复选框
import MeCheckboxGroup from "./MeCheckboxGroup"; // 复选框组
import MeSwitch from "./MeSwitch"; // 开关
import MeKeyboard from "./MeKeyboard"; // 数字键盘
import MePassword from "./MePassword"; // 密码输入框/短信输入框
import MeSearch from "./MeSearch"; // 搜索
import MeRate from "./MeRate"; // 评分
import MeSlider from "./MeSlider"; // 滑块
import MeDatetimePicker from "./MeDatetimePicker"; // 时间选择器
import MeAddressPicker from "./MeAddressPicker"; // 地址选择器
import MeUpload from "./MeUpload"; // 上传
import MeForm from "./MeForm"; // 表单
/* 表单组件 end */

/* 反馈组件 start */
import MeToast from "./MeToast"; // 消息提示
/* 反馈组件 end */
/* API start */
import MeAPI from "./MeAPI";
/* API end */

// 所有组件
const components = {
  MeButton,
  MeIcon,
  MeImg,
  MePopup,
  MeInput,
  MeRadio,
  MeRadioGroup,
  MeCheckbox,
  MeCheckboxGroup,
  MeSwitch,
  MeKeyboard,
  MePassword,
  MeSearch,
  MeRate,
  MeSlider,
  MeDatetimePicker,
  MeAddressPicker,
  MeUpload,
  MeForm
};

// 需要添加到VUE实例的API
const API = { MeToast, ...MeAPI };

/**
 * 组件注册
 * @param {Object} Vue - Vue实例对象
 * @returns {Void}
 */
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

// 判断是否存在 Vue 环境
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

// 单个导出
export {
  install,
  MeButton,
  MeIcon,
  MeImg,
  MePopup,
  MeInput,
  MeRadio,
  MeRadioGroup,
  MeCheckbox,
  MeCheckboxGroup,
  MeSwitch,
  MeKeyboard,
  MePassword,
  MeSearch,
  MeRate,
  MeSlider,
  MeDatetimePicker,
  MeAddressPicker,
  MeUpload,
  MeForm
};

// 全部导出
export default {
  install,
  ...components
};
