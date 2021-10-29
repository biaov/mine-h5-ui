import type { App } from "vue";
import MeSwiperCell from "./index.vue";
import { SFCWithInstall } from "../types";

// 安装
MeSwiperCell.install = (app: App) => {
  app.component(MeSwiperCell.name, MeSwiperCell);
};
const InMeSwiperCell: SFCWithInstall<typeof MeSwiperCell> = MeSwiperCell; // 增加类型
export default InMeSwiperCell;
