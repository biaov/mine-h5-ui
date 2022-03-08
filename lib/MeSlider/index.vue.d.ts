import { PropType } from 'vue';
import { PropStyles } from './interfaces';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: NumberConstructor;
        default: number;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    min: {
        type: NumberConstructor;
        default: number;
    };
    styles: {
        type: PropType<PropStyles>;
        default: () => {
            height: string;
            radius: string;
            lineBgc: string;
        };
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    isBtn: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    currentValue: import("vue").Ref<number>;
    onTouchstart: (e: TouchEvent) => void;
    onTouchmove: (e: TouchEvent) => void;
    onTouchend: (e: TouchEvent) => void;
    onMousedown: (e: MouseEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "on-start" | "on-move" | "on-end")[], "update:modelValue" | "on-start" | "on-move" | "on-end", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: NumberConstructor;
        default: number;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    min: {
        type: NumberConstructor;
        default: number;
    };
    styles: {
        type: PropType<PropStyles>;
        default: () => {
            height: string;
            radius: string;
            lineBgc: string;
        };
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    isBtn: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onOn-start"?: ((...args: any[]) => any) | undefined;
    "onOn-move"?: ((...args: any[]) => any) | undefined;
    "onOn-end"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: number;
    max: number;
    min: number;
    styles: PropStyles;
    disabled: boolean;
    isBtn: boolean;
}>;
export default _default;
