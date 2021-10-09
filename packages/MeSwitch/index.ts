import type { App } from "vue";
import MeSwitch from "./index.vue";
import { SFCWithInstall } from "~/types";

// 安装
MeSwitch.install = (app: App) => {
  app.component(MeSwitch.name, MeSwitch);
};
const InMeSwitch: SFCWithInstall<typeof MeSwitch> = MeSwitch; // 增加类型
export default InMeSwitch;
