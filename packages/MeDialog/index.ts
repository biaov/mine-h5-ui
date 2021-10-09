import type { App } from "vue";
import MeDialog from "./index.vue";
import { SFCWithInstall } from "~/types";

// 安装
MeDialog.install = (app: App) => {
  app.component(MeDialog.name, MeDialog);
};
const InMeDialog: SFCWithInstall<typeof MeDialog> = MeDialog; // 增加类型
export default InMeDialog;
