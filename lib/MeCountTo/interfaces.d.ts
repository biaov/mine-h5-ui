export interface Emits {
    (event: 'update:modelValue', bool: boolean): void;
    (event: 'on-end'): void;
}
