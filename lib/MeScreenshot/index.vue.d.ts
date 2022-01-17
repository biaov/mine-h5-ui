declare const _default: import("vue").DefineComponent<{
    start: {
        type: BooleanConstructor;
        default: boolean;
    };
    allowDown: {
        type: BooleanConstructor;
        default: boolean;
    };
    imageName: {
        type: StringConstructor;
        default: string;
    };
}, {
    screenshotRef: import("vue").Ref<HTMLDivElement | undefined>;
    onClick: (e: MouseEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("on-click" | "on-end")[], "on-click" | "on-end", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    start?: unknown;
    allowDown?: unknown;
    imageName?: unknown;
} & {
    start: boolean;
    allowDown: boolean;
    imageName: string;
} & {}> & {
    "onOn-click"?: ((...args: any[]) => any) | undefined;
    "onOn-end"?: ((...args: any[]) => any) | undefined;
}, {
    start: boolean;
    allowDown: boolean;
    imageName: string;
}>;
export default _default;
