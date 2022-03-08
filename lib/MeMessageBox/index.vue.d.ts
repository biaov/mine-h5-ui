import { PropType } from 'vue';
import { OnOk, OnOff } from './types';
declare const _default: import("vue").DefineComponent<{
    tips: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    message: {
        type: StringConstructor;
        default: string;
    };
    html: {
        type: StringConstructor;
        default: string;
    };
    cancelButtonText: {
        type: StringConstructor;
        default: string;
    };
    confirmButtonText: {
        type: StringConstructor;
        default: string;
    };
    onOk: {
        type: PropType<OnOk>;
        default: () => () => void;
    };
    onOff: {
        type: PropType<OnOff>;
        default: () => () => void;
    };
}, {
    isShow: import("vue").Ref<boolean>;
    isDestroy: import("vue").Ref<boolean>;
    inputValue: import("vue").Ref<string>;
    onCancel: () => void;
    onConfirm: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "action"[], "action", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tips: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    message: {
        type: StringConstructor;
        default: string;
    };
    html: {
        type: StringConstructor;
        default: string;
    };
    cancelButtonText: {
        type: StringConstructor;
        default: string;
    };
    confirmButtonText: {
        type: StringConstructor;
        default: string;
    };
    onOk: {
        type: PropType<OnOk>;
        default: () => () => void;
    };
    onOff: {
        type: PropType<OnOff>;
        default: () => () => void;
    };
}>> & {
    onAction?: ((...args: any[]) => any) | undefined;
}, {
    tips: string;
    type: string;
    message: string;
    html: string;
    cancelButtonText: string;
    confirmButtonText: string;
    onOk: OnOk;
    onOff: OnOff;
}>;
export default _default;
