/* eslint-disable no-unused-vars */
// props model
export interface Model {
  [key: string]: any;
}
// props rules
export interface RuleItem {
  type: string;
  required?: boolean;
  message?: string;
  validator: (value: any) => boolean;
  pattern: RegExp;
}
