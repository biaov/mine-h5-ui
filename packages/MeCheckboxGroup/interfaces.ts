/* eslint-disable no-unused-vars */
import { Ref } from "vue";

// onChange 参数
export interface OnChangeParams {
  name: string | number;
  isChecked: Ref<boolean>;
}
