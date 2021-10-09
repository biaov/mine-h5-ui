import type { App } from "vue";
import MePreview from "./preview";
import { SFCWithInstall } from "~/types";

const InMePreview: SFCWithInstall<typeof MePreview> = MePreview as SFCWithInstall<typeof MePreview>; // 增加类型
// 安装
InMePreview.install = (app: App) => {
  app.config.globalProperties.$MePreview = MePreview;
};

export default InMePreview;
