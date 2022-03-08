declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    startValue: {
        type: NumberConstructor;
        default: number;
    };
    endValue: {
        type: NumberConstructor;
        required: true;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    thousand: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    comValue: import("vue").ComputedRef<string | number>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "on-end")[], "update:modelValue" | "on-end", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    startValue: {
        type: NumberConstructor;
        default: number;
    };
    endValue: {
        type: NumberConstructor;
        required: true;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    thousand: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onOn-end"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: boolean;
    startValue: number;
    duration: number;
    thousand: boolean;
}>;
export default _default;
