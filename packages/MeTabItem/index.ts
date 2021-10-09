import type { App } from "vue";
import MeTabItem from "./index.vue";
import { SFCWithInstall } from "~/types";

// 安装
MeTabItem.install = (app: App) => {
  app.component(MeTabItem.name, MeTabItem);
};
const InMeTabItem: SFCWithInstall<typeof MeTabItem> = MeTabItem; // 增加类型
export default InMeTabItem;
