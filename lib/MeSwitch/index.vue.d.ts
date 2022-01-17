declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    activeColor: {
        type: StringConstructor;
        default: string;
    };
    inactiveColor: {
        type: StringConstructor;
        default: string;
    };
    async: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    isActived: import("vue").Ref<boolean>;
    background: import("vue").Ref<string>;
    handleClick: (e: MouseEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "on-click")[], "update:modelValue" | "on-click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue?: unknown;
    size?: unknown;
    activeColor?: unknown;
    inactiveColor?: unknown;
    async?: unknown;
    disabled?: unknown;
} & {
    modelValue: boolean;
    size: string;
    activeColor: string;
    inactiveColor: string;
    async: boolean;
    disabled: boolean;
} & {}> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onOn-click"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: boolean;
    size: string;
    activeColor: string;
    inactiveColor: string;
    async: boolean;
    disabled: boolean;
}>;
export default _default;
