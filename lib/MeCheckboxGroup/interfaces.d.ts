import { Ref } from 'vue';
export interface OnChangeParams {
    name: string | number;
    isChecked: Ref<boolean>;
}
export interface Emits {
    (event: 'update:modelValue', arr: (string | number)[]): void;
    (event: 'on-change', arr: (string | number)[]): void;
}
