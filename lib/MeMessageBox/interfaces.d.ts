import { OnOff, OnOk, HookFn, MessageBoxFn } from './types';
export interface Option {
    tips?: string;
    type?: string;
    message?: string;
    html?: string;
    cancelButtonText?: string;
    confirmButtonText?: string;
    onOff?: OnOff;
    onOk?: OnOk;
    [key: string]: string | HookFn | undefined;
}
export interface InMessageBox {
    (option: Option, type: string): Promise<string | undefined>;
    alert: MessageBoxFn;
    confirm: MessageBoxFn;
    prompt: MessageBoxFn;
    custom: MessageBoxFn;
    [key: string]: MessageBoxFn;
}
export interface Emits {
    (event: 'action', eventName: string, value?: string): void;
}
