/* eslint-disable no-unused-vars */
import { PublicProps } from "../types";

// 当前 vue props
export type Props = PublicProps<
  {
    modelValue: boolean;
    shape: string;
    icon: string;
    iconSelect: string;
    iconSize: string;
    checkedColor: string;
    disabled: boolean;
  },
  { name?: string | number }
>;
