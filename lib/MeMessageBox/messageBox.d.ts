import { Option } from './interfaces';
declare const MessageBox: (option: Option, type: string) => Promise<string | undefined>;
export declare const alert: (option: Option) => Promise<string | undefined>;
export declare const confirm: (option: Option) => Promise<string | undefined>;
export declare const prompt: (option: Option) => Promise<string | undefined>;
export declare const custom: (option: Option) => Promise<string | undefined>;
export default MessageBox;
