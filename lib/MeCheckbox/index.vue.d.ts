declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    name: {
        type: (StringConstructor | NumberConstructor)[];
    };
    shape: {
        type: StringConstructor;
        default: string;
    };
    icon: {
        type: StringConstructor;
        default: string;
    };
    iconSelect: {
        type: StringConstructor;
        default: string;
    };
    iconSize: {
        type: StringConstructor;
        default: string;
    };
    checkedColor: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    isChecked: import("vue").Ref<boolean>;
    iconName: import("vue").Ref<string>;
    handleClick: (e: MouseEvent) => void;
    setStatus: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "on-click")[], "update:modelValue" | "on-click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    name: {
        type: (StringConstructor | NumberConstructor)[];
    };
    shape: {
        type: StringConstructor;
        default: string;
    };
    icon: {
        type: StringConstructor;
        default: string;
    };
    iconSelect: {
        type: StringConstructor;
        default: string;
    };
    iconSize: {
        type: StringConstructor;
        default: string;
    };
    checkedColor: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onOn-click"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: boolean;
    shape: string;
    icon: string;
    iconSelect: string;
    iconSize: string;
    checkedColor: string;
    disabled: boolean;
}>;
export default _default;
