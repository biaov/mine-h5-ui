/* eslint-disable no-unused-vars */
// 日期格式
export interface FormatData {
  DD?: string;
  hh?: string;
  mm?: string;
  ss?: string;
  ms?: number;
}
// 加锁
export interface IsLocked {
  value?: boolean;
  [key: string]: boolean | undefined;
}
