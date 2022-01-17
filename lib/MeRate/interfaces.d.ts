export interface ListDataItem {
    id: number;
    state: boolean;
}
export interface Emits {
    (event: 'update:modelValue', id: number): void;
    (event: 'on-change'): void;
}
