export interface Model {
    [key: string]: any;
}
export interface RuleItem {
    type: string;
    required?: boolean;
    message?: string;
    validator: (value: any) => boolean;
    pattern: RegExp;
}
export interface Option {
    valid: boolean;
    message: string;
    type: string;
    value: Model;
}
export interface Emits {
    (event: 'on-submit', option: Option): void;
}
