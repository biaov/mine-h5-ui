declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    minDate: {
        type: DateConstructor;
        default: () => Date;
    };
    maxDate: {
        type: DateConstructor;
        default: () => Date;
    };
}, {
    show: import("vue").Ref<number[]>;
    listData: import("vue").Ref<{
        id: number;
        list: number | number[];
    }[]>;
    distance: import("vue").Ref<number[]>;
    duration: import("vue").Ref<number>;
    filterNumber: import("vue").ComputedRef<(num: number) => string | number>;
    onTouchstart: (e: TouchEvent, i: number) => void;
    onTouchmove: (e: TouchEvent, i: number) => void;
    onTouchend: (e: TouchEvent, i: number) => void;
    onMousedown: (e: MouseEvent, i: number) => void;
    onCancel: () => void;
    onSure: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "on-cancel" | "on-sure")[], "update:modelValue" | "on-cancel" | "on-sure", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue?: unknown;
    type?: unknown;
    visible?: unknown;
    minDate?: unknown;
    maxDate?: unknown;
} & {
    modelValue: string;
    type: string;
    visible: boolean;
    minDate: Date;
    maxDate: Date;
} & {}> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onOn-cancel"?: ((...args: any[]) => any) | undefined;
    "onOn-sure"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: string;
    type: string;
    visible: boolean;
    minDate: Date;
    maxDate: Date;
}>;
export default _default;
