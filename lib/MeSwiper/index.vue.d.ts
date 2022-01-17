declare const _default: import("vue").DefineComponent<{
    loop: {
        type: BooleanConstructor;
        default: boolean;
    };
    delay: {
        type: NumberConstructor;
        default: number;
    };
    height: {
        type: NumberConstructor;
    };
    dot: {
        type: BooleanConstructor;
        default: boolean;
    };
    radius: {
        type: NumberConstructor;
        default: number;
    };
}, {
    swiperDom: import("vue").Ref<HTMLDivElement | undefined>;
    dots: import("vue").Ref<number>;
    dotIndex: import("vue").Ref<number>;
    currentValue: import("vue").Ref<number>;
    isActive: import("vue").Ref<boolean>;
    onTouchstart: (e: TouchEvent) => void;
    onTouchmove: (e: TouchEvent) => void;
    onTouchend: (e: TouchEvent) => void;
    onMousedown: (e: MouseEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "on-change"[], "on-change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    loop?: unknown;
    delay?: unknown;
    height?: unknown;
    dot?: unknown;
    radius?: unknown;
} & {
    loop: boolean;
    delay: number;
    dot: boolean;
    radius: number;
} & {
    height?: number | undefined;
}> & {
    "onOn-change"?: ((...args: any[]) => any) | undefined;
}, {
    loop: boolean;
    delay: number;
    dot: boolean;
    radius: number;
}>;
export default _default;
