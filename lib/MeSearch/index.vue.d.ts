declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: StringConstructor;
        required: true;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    btnText: {
        type: StringConstructor;
        default: string;
    };
    align: {
        type: StringConstructor;
        default: string;
    };
    radius: {
        type: StringConstructor;
        default: string;
    };
    background: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    inputVal: import("vue").Ref<string>;
    onKeypress: (e: KeyboardEvent) => void;
    onFocus: (e: FocusEvent) => void;
    onBlur: (e: FocusEvent) => void;
    onInput: (e: Event) => void;
    onChange: (e: Event) => void;
    onClean: () => void;
    handleBtn: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "on-click" | "on-search" | "on-focus" | "on-blur" | "on-input" | "on-change")[], "update:modelValue" | "on-click" | "on-search" | "on-focus" | "on-blur" | "on-input" | "on-change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue?: unknown;
    placeholder?: unknown;
    btnText?: unknown;
    align?: unknown;
    radius?: unknown;
    background?: unknown;
    color?: unknown;
    disabled?: unknown;
} & {
    modelValue: string;
    placeholder: string;
    btnText: string;
    align: string;
    radius: string;
    background: string;
    color: string;
    disabled: boolean;
} & {}> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onOn-click"?: ((...args: any[]) => any) | undefined;
    "onOn-search"?: ((...args: any[]) => any) | undefined;
    "onOn-focus"?: ((...args: any[]) => any) | undefined;
    "onOn-blur"?: ((...args: any[]) => any) | undefined;
    "onOn-input"?: ((...args: any[]) => any) | undefined;
    "onOn-change"?: ((...args: any[]) => any) | undefined;
}, {
    placeholder: string;
    btnText: string;
    align: string;
    radius: string;
    background: string;
    color: string;
    disabled: boolean;
}>;
export default _default;
