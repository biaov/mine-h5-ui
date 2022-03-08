import { Ref } from 'vue';
export interface AccordionContext {
    name: string;
    currentValue: Ref<string | number>;
    onChange: (name: string | number) => void;
}
export interface Props {
    label: string;
    name: string | number;
    borderColor?: string;
}
export interface Emits {
    (event: 'on-click', e: MouseEvent): void;
}
