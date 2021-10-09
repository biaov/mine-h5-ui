import type { App } from "vue";
import MeSwiperItem from "./index.vue";
import { SFCWithInstall } from "~/types";

// 安装
MeSwiperItem.install = (app: App) => {
  app.component(MeSwiperItem.name, MeSwiperItem);
};
const InMeSwiperItem: SFCWithInstall<typeof MeSwiperItem> = MeSwiperItem; // 增加类型
export default InMeSwiperItem;
