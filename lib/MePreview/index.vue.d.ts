declare const _default: import("vue").DefineComponent<{
    url: {
        type: StringConstructor;
        default: string;
    };
    zIndex: {
        type: NumberConstructor;
        default: number;
    };
    background: {
        type: StringConstructor;
        default: string;
    };
}, {
    isShow: import("vue").Ref<boolean>;
    isDestroy: import("vue").Ref<boolean>;
    onClose: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    url: {
        type: StringConstructor;
        default: string;
    };
    zIndex: {
        type: NumberConstructor;
        default: number;
    };
    background: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    url: string;
    zIndex: number;
    background: string;
}>;
export default _default;
