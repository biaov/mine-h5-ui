/* eslint-disable no-unused-vars */
import { PublicProps } from "~/types";

// 当前 vue props
export type Props = PublicProps<{
  modelValue: string | number;
  type: string;
  placeholder: string;
  readonly: boolean;
  disabled: boolean;
  label: string;
  labelWidth: string;
  labelAlign: string;
  labelColor: string;
  labelIcon: string;
  focusType: string;
  focusColor: string;
  icon: string;
  password: boolean;
  digit: boolean;
  smsMsg: string;
  smsColor: string;
  smsIs: boolean;
}>;
