import type { App } from "vue";
import MeForm from "./index.vue";
import { SFCWithInstall } from "../types";

// 安装
MeForm.install = (app: App) => {
  app.component(MeForm.name, MeForm);
};
const InMeForm: SFCWithInstall<typeof MeForm> = MeForm; // 增加类型
export default InMeForm;
