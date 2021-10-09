/* eslint-disable no-unused-vars */
import { Ref } from "vue";

// 父组件参数
export interface AccordionContext {
  name: string;
  currentValue: Ref<string | number>;
  onChange: (name: string | number) => void;
}
