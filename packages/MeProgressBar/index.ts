import type { App } from "vue";
import MeProgressBar from "./index.vue";
import { SFCWithInstall } from "~/types";

// 安装
MeProgressBar.install = (app: App) => {
  app.component(MeProgressBar.name, MeProgressBar);
};
const InMeProgressBar: SFCWithInstall<typeof MeProgressBar> = MeProgressBar; // 增加类型
export default InMeProgressBar;
