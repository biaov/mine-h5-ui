import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: NumberConstructor;
        validator: (value: number) => boolean;
        default: number;
    };
    icon: {
        type: StringConstructor;
        default: string;
    };
    iconSelect: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    count: {
        type: NumberConstructor;
        default: number;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    tips: {
        type: PropType<string[]>;
        default: () => string[];
    };
    tipsColor: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
}, {
    listData: import("vue").Ref<{
        id: number;
        state: boolean;
    }[]>;
    onClick: ({ id, state }: import("./interfaces").ListDataItem) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "on-change")[], "update:modelValue" | "on-change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue?: unknown;
    icon?: unknown;
    iconSelect?: unknown;
    color?: unknown;
    count?: unknown;
    readonly?: unknown;
    disabled?: unknown;
    tips?: unknown;
    tipsColor?: unknown;
    size?: unknown;
} & {
    modelValue: number;
    icon: string;
    iconSelect: string;
    color: string;
    count: number;
    readonly: boolean;
    disabled: boolean;
    tips: string[];
    tipsColor: string;
    size: string;
} & {}> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onOn-change"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: number;
    icon: string;
    iconSelect: string;
    color: string;
    count: number;
    readonly: boolean;
    disabled: boolean;
    tips: string[];
    tipsColor: string;
    size: string;
}>;
export default _default;
