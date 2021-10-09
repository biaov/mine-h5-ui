import type { App } from "vue";
import MeTab from "./index.vue";
import { SFCWithInstall } from "~/types";

// 安装
MeTab.install = (app: App) => {
  app.component(MeTab.name, MeTab);
};
const InMeTab: SFCWithInstall<typeof MeTab> = MeTab; // 增加类型
export default InMeTab;
