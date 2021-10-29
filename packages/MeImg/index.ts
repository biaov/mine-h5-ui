import type { App } from "vue";
import MeImg from "./index.vue";
import { SFCWithInstall } from "../types";

// 安装
MeImg.install = (app: App) => {
  app.component(MeImg.name, MeImg);
};
const InMeImg: SFCWithInstall<typeof MeImg> = MeImg; // 增加类型
export default InMeImg;
