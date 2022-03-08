export interface Emits {
    (event: 'on-click', e: MouseEvent): void;
    (event: 'update:modelValue', bool: boolean): void;
}
