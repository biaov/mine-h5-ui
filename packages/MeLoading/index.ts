import type { App } from "vue";
import MeLoading from "./index.vue";
import { SFCWithInstall } from "~/types";

// 安装
MeLoading.install = (app: App) => {
  app.component(MeLoading.name, MeLoading);
};
const InMeLoading: SFCWithInstall<typeof MeLoading> = MeLoading; // 增加类型
export default InMeLoading;
