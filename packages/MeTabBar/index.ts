import type { App } from "vue";
import MeTabBar from "./index.vue";
import { SFCWithInstall } from "~/types";

// 安装
MeTabBar.install = (app: App) => {
  app.component(MeTabBar.name, MeTabBar);
};
const InMeTabBar: SFCWithInstall<typeof MeTabBar> = MeTabBar; // 增加类型
export default InMeTabBar;
