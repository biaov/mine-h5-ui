declare const _default: import("vue").DefineComponent<{
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    tips: {
        type: StringConstructor;
        default: string;
    };
}, {
    isShowMask: import("vue").Ref<boolean>;
    isShow: import("vue").Ref<boolean>;
    hideMask: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:visible"[], "update:visible", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    tips: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
}, {
    visible: boolean;
    tips: string;
}>;
export default _default;
