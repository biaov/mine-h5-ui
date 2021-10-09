/* eslint-disable no-unused-vars */

// 参数
export interface Params {
  cols: number;
  borderColor: string;
}

// 父组件参数
export interface GridContext {
  name: string;
  params: Params;
}
