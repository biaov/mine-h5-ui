declare const _default: import("vue").DefineComponent<{
    type: {
        type: StringConstructor;
        default: string;
    };
    plain: {
        type: BooleanConstructor;
        default: boolean;
    };
    radius: {
        type: NumberConstructor;
        default: number;
    };
    width: {
        type: NumberConstructor;
    };
    height: {
        type: NumberConstructor;
        default: number;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    text: {
        type: StringConstructor;
        default: string;
    };
    textColor: {
        type: StringConstructor;
        default: string;
    };
    closeable: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    onClose: (e: MouseEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "on-close"[], "on-close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    type?: unknown;
    plain?: unknown;
    radius?: unknown;
    width?: unknown;
    height?: unknown;
    color?: unknown;
    text?: unknown;
    textColor?: unknown;
    closeable?: unknown;
} & {
    type: string;
    plain: boolean;
    radius: number;
    height: number;
    color: string;
    text: string;
    textColor: string;
    closeable: boolean;
} & {
    width?: number | undefined;
}> & {
    "onOn-close"?: ((...args: any[]) => any) | undefined;
}, {
    type: string;
    plain: boolean;
    radius: number;
    height: number;
    color: string;
    text: string;
    textColor: string;
    closeable: boolean;
}>;
export default _default;
