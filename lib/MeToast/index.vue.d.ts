declare const _default: import("vue").DefineComponent<{
    message: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    bgColor: {
        type: StringConstructor;
        default: string;
    };
    icon: {
        type: StringConstructor;
        default: string;
    };
    durction: {
        type: NumberConstructor;
        default: number;
    };
}, {
    isShow: import("vue").Ref<boolean>;
    isDestroy: import("vue").Ref<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    message?: unknown;
    bgColor?: unknown;
    icon?: unknown;
    durction?: unknown;
} & {
    message: string | number;
    bgColor: string;
    icon: string;
    durction: number;
} & {}>, {
    message: string | number;
    bgColor: string;
    icon: string;
    durction: number;
}>;
export default _default;
