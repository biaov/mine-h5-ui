export interface InArea {
    [key: string]: string;
}
export interface InAreaData {
    [key: string]: InArea;
}
export interface Emits {
    (event: 'update:modelValue', str: string): void;
    (event: 'on-cancel'): void;
    (event: 'on-sure', currentValue: string[]): void;
}
