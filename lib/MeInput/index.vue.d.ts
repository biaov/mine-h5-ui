declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    labelWidth: {
        type: StringConstructor;
        default: string;
    };
    labelAlign: {
        type: StringConstructor;
        default: string;
    };
    labelColor: {
        type: StringConstructor;
        default: string;
    };
    labelIcon: {
        type: StringConstructor;
        default: string;
    };
    focusType: {
        type: StringConstructor;
        default: string;
    };
    focusColor: {
        type: StringConstructor;
        default: string;
    };
    icon: {
        type: StringConstructor;
        default: string;
    };
    password: {
        type: BooleanConstructor;
        default: boolean;
    };
    digit: {
        type: BooleanConstructor;
        default: boolean;
    };
    smsMsg: {
        type: StringConstructor;
        default: string;
    };
    smsColor: {
        type: StringConstructor;
        default: string;
    };
    smsIs: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    sms: import("vue").Ref<HTMLDivElement | undefined>;
    handleSMS: (e: MouseEvent) => void;
    inputLabel: import("vue").Ref<HTMLDivElement | undefined>;
    inputVal: import("vue").Ref<string | number>;
    inputType: import("vue").Ref<string>;
    paddingLeft: import("vue").Ref<number>;
    paddingRight: import("vue").Ref<number>;
    isFocus: import("vue").Ref<boolean>;
    onFocus: (e: FocusEvent) => void;
    onBlur: (e: FocusEvent) => void;
    onChange: (e: Event) => void;
    onInput: (e: Event) => void;
    handleIcon: (e: MouseEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "on-focus" | "on-blur" | "on-change" | "on-input" | "on-click-sms" | "on-click-icon")[], "update:modelValue" | "on-focus" | "on-blur" | "on-change" | "on-input" | "on-click-sms" | "on-click-icon", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    labelWidth: {
        type: StringConstructor;
        default: string;
    };
    labelAlign: {
        type: StringConstructor;
        default: string;
    };
    labelColor: {
        type: StringConstructor;
        default: string;
    };
    labelIcon: {
        type: StringConstructor;
        default: string;
    };
    focusType: {
        type: StringConstructor;
        default: string;
    };
    focusColor: {
        type: StringConstructor;
        default: string;
    };
    icon: {
        type: StringConstructor;
        default: string;
    };
    password: {
        type: BooleanConstructor;
        default: boolean;
    };
    digit: {
        type: BooleanConstructor;
        default: boolean;
    };
    smsMsg: {
        type: StringConstructor;
        default: string;
    };
    smsColor: {
        type: StringConstructor;
        default: string;
    };
    smsIs: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onOn-focus"?: ((...args: any[]) => any) | undefined;
    "onOn-blur"?: ((...args: any[]) => any) | undefined;
    "onOn-change"?: ((...args: any[]) => any) | undefined;
    "onOn-input"?: ((...args: any[]) => any) | undefined;
    "onOn-click-sms"?: ((...args: any[]) => any) | undefined;
    "onOn-click-icon"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: string | number;
    type: string;
    placeholder: string;
    readonly: boolean;
    disabled: boolean;
    label: string;
    labelWidth: string;
    labelAlign: string;
    labelColor: string;
    labelIcon: string;
    focusType: string;
    focusColor: string;
    icon: string;
    password: boolean;
    digit: boolean;
    smsMsg: string;
    smsColor: string;
    smsIs: boolean;
}>;
export default _default;
