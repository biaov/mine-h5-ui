export interface Emits {
    (event: 'update:modelValue', value: string | number): void;
    (event: 'on-change', value: string | number): void;
}
