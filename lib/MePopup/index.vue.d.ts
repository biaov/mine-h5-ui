declare const _default: import("vue").DefineComponent<{
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    modal: {
        type: BooleanConstructor;
        default: boolean;
    };
    position: {
        type: StringConstructor;
        default: string;
    };
    closeable: {
        type: BooleanConstructor;
        default: boolean;
    };
    radius: {
        type: StringConstructor;
        default: string;
    };
}, {
    isShow: import("vue").Ref<boolean>;
    isShowMask: import("vue").Ref<boolean>;
    hideMask: () => void;
    setRadius: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:visible" | "on-cancel")[], "update:visible" | "on-cancel", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    modal: {
        type: BooleanConstructor;
        default: boolean;
    };
    position: {
        type: StringConstructor;
        default: string;
    };
    closeable: {
        type: BooleanConstructor;
        default: boolean;
    };
    radius: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
    "onOn-cancel"?: ((...args: any[]) => any) | undefined;
}, {
    visible: boolean;
    modal: boolean;
    position: string;
    closeable: boolean;
    radius: string;
}>;
export default _default;
