import type { App } from "vue";
import MeActionSheet from "./index.vue";
import { SFCWithInstall } from "../types";

// 安装
MeActionSheet.install = (app: App) => {
  app.component(MeActionSheet.name, MeActionSheet);
};
const InMeActionSheet: SFCWithInstall<typeof MeActionSheet> = MeActionSheet; // 增加类型
export default InMeActionSheet;
