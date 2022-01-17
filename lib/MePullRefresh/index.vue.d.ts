import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: BooleanConstructor;
        required: true;
    };
    loadText: {
        type: PropType<string[]>;
        default: () => string[];
    };
    loadIcon: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    activeState: import("vue").Ref<number>;
    transY: import("vue").Ref<number>;
    scale: import("vue").Ref<number>;
    showValue: import("vue").Ref<number>;
    duration: import("vue").Ref<number>;
    onTouchstart: (e: TouchEvent) => void;
    onTouchmove: (e: TouchEvent) => void;
    onTouchend: (e: TouchEvent) => void;
    onMousedown: (e: MouseEvent) => void;
    onMousemove: (e: MouseEvent) => void;
    onMouseup: (e: MouseEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "on-refresh")[], "update:modelValue" | "on-refresh", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue?: unknown;
    loadText?: unknown;
    loadIcon?: unknown;
} & {
    modelValue: boolean;
    loadText: string[];
    loadIcon: boolean;
} & {}> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onOn-refresh"?: ((...args: any[]) => any) | undefined;
}, {
    loadText: string[];
    loadIcon: boolean;
}>;
export default _default;
