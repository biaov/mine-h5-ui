declare const _default: import("vue").DefineComponent<{
    name: {
        type: StringConstructor;
        required: true;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
}, {
    onClick: (e: MouseEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "on-click"[], "on-click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    name?: unknown;
    color?: unknown;
    size?: unknown;
} & {
    name: string;
    color: string;
    size: string;
} & {}> & {
    "onOn-click"?: ((...args: any[]) => any) | undefined;
}, {
    color: string;
    size: string;
}>;
export default _default;
