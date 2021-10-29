/* eslint-disable no-unused-vars */
import { PublicProps } from "../types";

// 当前 vue props
export type Props = PublicProps<{
  modelValue: number;
  color: string;
  size: string;
  icon: string;
  iconSelect: string;
  count: number;
  readonly: boolean;
  disabled: boolean;
  tips: string[];
  tipsColor: string;
}>;
