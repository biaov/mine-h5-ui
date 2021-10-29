/* eslint-disable no-unused-vars */
import { PublicProps } from "../types";

// 当前 vue props
export type Props = PublicProps<{
  modelValue: string;
  color: string;
  placeholder: string;
  btnText: string;
  align: string;
  radius: string;
  background: string;
  disabled: boolean;
}>;
