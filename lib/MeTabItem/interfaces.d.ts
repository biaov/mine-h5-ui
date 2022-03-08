import { Ref } from 'vue';
export interface LabelName {
    label: string;
    name: string | number;
}
export interface TabContext {
    name: string;
    currentValue: Ref<number>;
    getLabelName: (item: LabelName) => void;
}
