export interface Emits {
    (event: 'update:modelValue', value: string | number): void;
    (event: 'on-focus', e: FocusEvent): void;
    (event: 'on-blur', e: FocusEvent): void;
    (event: 'on-change', e: Event): void;
    (event: 'on-input', e: Event): void;
    (event: 'on-click-sms', e: MouseEvent): void;
    (event: 'on-click-icon', e: MouseEvent): void;
}
