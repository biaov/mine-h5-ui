import type { App } from "vue";
import MeShareSheet from "./index.vue";
import { SFCWithInstall } from "../types";

// 安装
MeShareSheet.install = (app: App) => {
  app.component(MeShareSheet.name, MeShareSheet);
};
const InMeShareSheet: SFCWithInstall<typeof MeShareSheet> = MeShareSheet; // 增加类型
export default InMeShareSheet;
