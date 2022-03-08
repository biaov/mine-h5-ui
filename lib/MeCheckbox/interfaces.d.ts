import { Ref } from 'vue';
import { OnChangeParams } from '../MeCheckboxGroup/interfaces';
export interface CheckboxGroupContext {
    name: string;
    currentValue: Ref<(string | number)[]>;
    onChange: (params: OnChangeParams) => void;
}
export interface Emits {
    (event: 'update:modelValue', bool: boolean): void;
    (event: 'on-click', e: MouseEvent): void;
}
