declare const _default: import("vue").DefineComponent<{
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    maskClose: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    isShowMask: import("vue").Ref<boolean>;
    isShow: import("vue").Ref<boolean>;
    clickMask: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:visible"[], "update:visible", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    visible?: unknown;
    maskClose?: unknown;
} & {
    visible: boolean;
    maskClose: boolean;
} & {}> & {
    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
}, {
    visible: boolean;
    maskClose: boolean;
}>;
export default _default;
