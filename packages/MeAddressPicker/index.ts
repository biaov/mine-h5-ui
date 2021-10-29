import type { App } from "vue";
import MeAddressPicker from "./index.vue";
import { SFCWithInstall } from "../types";

// 安装
MeAddressPicker.install = (app: App) => {
  app.component(MeAddressPicker.name, MeAddressPicker);
};
const InMeAddressPicker: SFCWithInstall<typeof MeAddressPicker> = MeAddressPicker; // 增加类型
export default InMeAddressPicker;
