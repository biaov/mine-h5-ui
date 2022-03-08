export interface Emits {
    (event: 'update:modelValue', str: string): void;
    (event: 'on-focus', e: MouseEvent): void;
    (event: 'on-blur', e: MouseEvent): void;
}
