declare const _default: import("vue").DefineComponent<{
    name: {
        type: (StringConstructor | NumberConstructor)[];
        required: true;
    };
    url: {
        type: StringConstructor;
        default: string;
    };
    text: {
        type: StringConstructor;
        default: string;
    };
    background: {
        type: StringConstructor;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    name?: unknown;
    url?: unknown;
    text?: unknown;
    background?: unknown;
} & {
    name: string | number;
    url: string;
    text: string;
    background: string;
} & {}>, {
    url: string;
    text: string;
    background: string;
}>;
export default _default;
