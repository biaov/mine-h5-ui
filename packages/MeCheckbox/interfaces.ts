/* eslint-disable no-unused-vars */
import { Ref } from "vue";
import { OnChangeParams } from "../MeCheckboxGroup/interfaces";

// 父组件参数
export interface CheckboxGroupContext {
  name: string;
  currentValue: Ref<(string | number)[]>;
  onChange: (params: OnChangeParams) => void;
}
