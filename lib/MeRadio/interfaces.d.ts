import { Ref } from 'vue';
export interface RadioGroupContext {
    name: string;
    currentValue: Ref<string | number>;
    onChange: (name: string | number) => void;
}
export interface Emits {
    (event: 'update:modelValue', bool: boolean): void;
    (event: 'on-click'): void;
}
