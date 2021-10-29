import type { App } from "vue";
import MeDatetimePicker from "./index.vue";
import { SFCWithInstall } from "../types";

// 安装
MeDatetimePicker.install = (app: App) => {
  app.component(MeDatetimePicker.name, MeDatetimePicker);
};
const InMeDatetimePicker: SFCWithInstall<typeof MeDatetimePicker> = MeDatetimePicker; // 增加类型
export default InMeDatetimePicker;
