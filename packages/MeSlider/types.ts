/* eslint-disable no-unused-vars */
import { PublicProps } from "../types";
import { PropStyles } from "./interfaces";

// 当前 vue props
export type Props = PublicProps<{
  modelValue: number;
  max: number;
  min: number;
  styles: PropStyles;
  disabled: boolean;
  isBtn: boolean;
}>;
