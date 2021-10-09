/* eslint-disable no-unused-vars */
import { Ref } from "vue";

// 父组件参数
export interface RadioGroupContext {
  name: string;
  currentValue: Ref<string | number>;
  onChange: (name: string | number) => void;
}
