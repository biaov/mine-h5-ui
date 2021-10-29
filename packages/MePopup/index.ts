import type { App } from "vue";
import MePopup from "./index.vue";
import { SFCWithInstall } from "../types";

// 安装
MePopup.install = (app: App) => {
  app.component(MePopup.name, MePopup);
};
const InMePopup: SFCWithInstall<typeof MePopup> = MePopup; // 增加类型
export default InMePopup;
