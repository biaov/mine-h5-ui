declare const _default: import("vue").DefineComponent<{
    src: {
        type: StringConstructor;
        required: true;
    };
    width: {
        type: StringConstructor;
        default: string;
    };
    height: {
        type: StringConstructor;
        default: string;
    };
    fill: {
        type: StringConstructor;
        default: string;
    };
    radius: {
        type: StringConstructor;
        default: string;
    };
    alt: {
        type: StringConstructor;
        default: string;
    };
}, {
    onClick: (e: MouseEvent) => void;
    onLoad: (e: Event) => void;
    onError: (e: Event) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("on-click" | "on-load" | "on-error")[], "on-click" | "on-load" | "on-error", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    src?: unknown;
    width?: unknown;
    height?: unknown;
    fill?: unknown;
    radius?: unknown;
    alt?: unknown;
} & {
    fill: string;
    src: string;
    width: string;
    height: string;
    radius: string;
    alt: string;
} & {}> & {
    "onOn-click"?: ((...args: any[]) => any) | undefined;
    "onOn-load"?: ((...args: any[]) => any) | undefined;
    "onOn-error"?: ((...args: any[]) => any) | undefined;
}, {
    fill: string;
    width: string;
    height: string;
    radius: string;
    alt: string;
}>;
export default _default;
