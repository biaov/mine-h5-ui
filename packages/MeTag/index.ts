import type { App } from "vue";
import MeTag from "./index.vue";
import { SFCWithInstall } from "../types";

// 安装
MeTag.install = (app: App) => {
  app.component(MeTag.name, MeTag);
};
const InMeTag: SFCWithInstall<typeof MeTag> = MeTag; // 增加类型
export default InMeTag;
