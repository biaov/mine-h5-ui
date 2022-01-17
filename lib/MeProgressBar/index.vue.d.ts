declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: NumberConstructor;
        required: true;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    text: {
        type: StringConstructor;
        default: string;
    };
    textShow: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: {
        type: StringConstructor;
        default: string;
    };
    borderRadius: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: NumberConstructor;
        default: number;
    };
    textColor: {
        type: StringConstructor;
        default: string;
    };
    activeColor: {
        type: StringConstructor;
        default: string;
    };
    backgorund: {
        type: StringConstructor;
        default: string;
    };
    padding: {
        type: StringConstructor;
        default: string;
    };
}, {
    curText: import("vue").ComputedRef<string>;
    curPosi: import("vue").ComputedRef<number>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue?: unknown;
    type?: unknown;
    text?: unknown;
    textShow?: unknown;
    width?: unknown;
    borderRadius?: unknown;
    size?: unknown;
    textColor?: unknown;
    activeColor?: unknown;
    backgorund?: unknown;
    padding?: unknown;
} & {
    modelValue: number;
    type: string;
    text: string;
    textShow: boolean;
    width: string;
    borderRadius: string;
    size: number;
    textColor: string;
    activeColor: string;
    backgorund: string;
    padding: string;
} & {}>, {
    type: string;
    text: string;
    textShow: boolean;
    width: string;
    borderRadius: string;
    size: number;
    textColor: string;
    activeColor: string;
    backgorund: string;
    padding: string;
}>;
export default _default;
