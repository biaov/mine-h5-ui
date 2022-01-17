declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    separator: {
        type: StringConstructor;
        default: string;
    };
}, {
    listData: import("vue").Ref<string[][]>;
    distance: import("vue").Ref<number[]>;
    duration: import("vue").Ref<number>;
    currentValue: string[];
    onTouchstart: (e: TouchEvent, i: number) => void;
    onTouchmove: (e: TouchEvent, i: number) => void;
    onTouchend: (e: TouchEvent, i: number) => void;
    onMousedown: (e: MouseEvent, i: number) => void;
    onCancel: () => void;
    onSure: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "on-cancel" | "on-sure")[], "update:modelValue" | "on-cancel" | "on-sure", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue?: unknown;
    visible?: unknown;
    separator?: unknown;
} & {
    modelValue: string;
    visible: boolean;
    separator: string;
} & {}> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onOn-cancel"?: ((...args: any[]) => any) | undefined;
    "onOn-sure"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: string;
    visible: boolean;
    separator: string;
}>;
export default _default;
