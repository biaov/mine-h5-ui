import type { App } from "vue";
import MeGrid from "./index.vue";
import { SFCWithInstall } from "~/types";

// 安装
MeGrid.install = (app: App) => {
  app.component(MeGrid.name, MeGrid);
};
const InMeGrid: SFCWithInstall<typeof MeGrid> = MeGrid; // 增加类型
export default InMeGrid;
