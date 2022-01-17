declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    num: {
        type: NumberConstructor;
        default: number;
    };
    skinType: {
        type: StringConstructor;
        default: string;
    };
    isFocus: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    listData: import("vue").Ref<{
        id: number;
        value: string;
        state: boolean;
    }[]>;
    handleClick: (e: MouseEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "on-focus" | "on-blur")[], "update:modelValue" | "on-focus" | "on-blur", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue?: unknown;
    type?: unknown;
    num?: unknown;
    skinType?: unknown;
    isFocus?: unknown;
} & {
    modelValue: string;
    type: string;
    num: number;
    skinType: string;
    isFocus: boolean;
} & {}> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onOn-focus"?: ((...args: any[]) => any) | undefined;
    "onOn-blur"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: string;
    type: string;
    num: number;
    skinType: string;
    isFocus: boolean;
}>;
export default _default;
