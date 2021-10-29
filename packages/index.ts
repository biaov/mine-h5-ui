import type { App } from "vue";

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
import MeActionSheet from "./MeActionSheet"; // 动作面板
import MeToast from "./MeToast"; // 消息提示
import MeLoading from "./MeLoading"; // 加载
import MeMask from "./MeMask"; // 遮罩层
import MeMessageBox from "./MeMessageBox"; // 弹出框
import MeDialog from "./MeDialog"; // 对话框
import MeShareSheet from "./MeShareSheet"; // 分享面板
import MeSwiperCell from "./MeSwiperCell"; // 滑动单元格
/* 反馈组件 end */

/* 导航组件 start */
import MeGrid from "./MeGrid"; // 宫格
import MeGridItem from "./MeGridItem"; // 宫格选项
import MeIndexBar from "./MeIndexBar"; // 索引栏
import MeNavBar from "./MeNavBar"; // 导航栏
import MeTab from "./MeTab"; // 标签页
import MeTabItem from "./MeTabItem"; // 标签选项
import MeTabBar from "./MeTabBar"; // 标签栏
import MePullRefresh from "./MePullRefresh"; // 下拉刷新
/* 导航组件 end */

/* 展示组件 start */
import MeProgressBar from "./MeProgressBar"; // 进度条
import MeAccordion from "./MeAccordion"; // 手风琴
import MeAccordionItem from "./MeAccordionItem"; // 手风琴选项
import MeCountDown from "./MeCountDown"; // 倒计时
import MeDivider from "./MeDivider"; // 分割线
import MeEmpty from "./MeEmpty"; // 空状态
import MePreview from "./MePreview"; // 图片预览
import MeNoticeBar from "./MeNoticeBar"; // 公告栏
import MeSwiper from "./MeSwiper"; // 轮播图
import MeSwiperItem from "./MeSwiperItem"; // 轮播图选项
import MeTag from "./MeTag"; // 标签
import MeCountTo from "./MeCountTo"; // 数字滚动
/* 展示组件 end */

/* 业务组件 start */
import MeVirtualList from "./MeVirtualList"; // 虚拟列表
/* 业务组件 end */

/* API start */
import MeAPI from "./MeAPI";
/* API end */

// 所有组件
const components: any[] = [
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
  MeForm,
  MeActionSheet,
  MeLoading,
  MeMask,
  MeDialog,
  MeShareSheet,
  MeSwiperCell,
  MeGrid,
  MeGridItem,
  MeIndexBar,
  MeNavBar,
  MeTab,
  MeTabItem,
  MeTabBar,
  MePullRefresh,
  MeProgressBar,
  MeAccordion,
  MeAccordionItem,
  MeCountDown,
  MeDivider,
  MeEmpty,
  MeNoticeBar,
  MeSwiper,
  MeSwiperItem,
  MeTag,
  MeCountTo,
  MeVirtualList
];
// 需要添加到 VUE 实例的 API
const API = { ...MeAPI, MeToast, MeMessageBox, MePreview };
/**
 * 组件注册
 * @param {App} app Vue 对象
 * @returns {Void}
 */
const install = (app: App) => {
  // 注册组件
  components.forEach(component => app.component(component.name, component));
  // ctx 里插入 API
  Object.keys(API).forEach(key => {
    app.config.globalProperties[`$${key}`] = (API as any)[key];
  });
};

export {
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
  MeForm,
  MeActionSheet,
  MeLoading,
  MeMask,
  MeDialog,
  MeShareSheet,
  MeSwiperCell,
  MeGrid,
  MeGridItem,
  MeIndexBar,
  MeNavBar,
  MeTab,
  MeTabItem,
  MeTabBar,
  MePullRefresh,
  MeProgressBar,
  MeAccordion,
  MeAccordionItem,
  MeCountDown,
  MeDivider,
  MeEmpty,
  MeNoticeBar,
  MeSwiper,
  MeSwiperItem,
  MeTag,
  MeCountTo,
  MeVirtualList,
  // API
  MeToast,
  MeMessageBox,
  MePreview,
  MeAPI
};
// 全部导出
export default {
  install,
  ...components
};
