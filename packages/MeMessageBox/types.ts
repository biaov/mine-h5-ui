/* eslint-disable no-unused-vars */
import { PublicProps } from "../types";
import { Option } from "./interfaces";

// onOk 函数
export type OnOk = (arg?: string) => void;
// onOff 函数
export type OnOff = () => void;
// onOk 函数 | onOff 函数
export type HookFn = OnOk | OnOff;
// 当前 vue props
export type Props = PublicProps<{
  tips: string;
  type: string;
  message: string;
  html: string;
  cancelButtonText: string;
  confirmButtonText: string;
  onOk: OnOk;
  onOff: OnOff;
  [key: string]: string | HookFn;
}>;
// curOption
export type CurOption = Option & {
  onAction?: (arg: string) => void;
};
// alert,confirm,prompt,custom
export type MessageBoxFn = (option: Option) => Promise<string | undefined>;
