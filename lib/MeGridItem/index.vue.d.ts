declare const _default: import("vue").DefineComponent<{
    icon: {
        type: StringConstructor;
        default: string;
    };
    iconColor: {
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
}, {
    cols: import("vue").Ref<number>;
    widthValue: import("vue").Ref<number>;
    borderColor: import("vue").Ref<string>;
    handleClick: (e: MouseEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "on-click"[], "on-click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    icon?: unknown;
    iconColor?: unknown;
    text?: unknown;
    textColor?: unknown;
} & {
    icon: string;
    iconColor: string;
    text: string;
    textColor: string;
} & {}> & {
    "onOn-click"?: ((...args: any[]) => any) | undefined;
}, {
    icon: string;
    iconColor: string;
    text: string;
    textColor: string;
}>;
export default _default;
