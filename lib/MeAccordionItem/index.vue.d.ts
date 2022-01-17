declare const _default: import("vue").DefineComponent<{
    label: {
        type: StringConstructor;
        required: true;
    };
    name: {
        type: (StringConstructor | NumberConstructor)[];
        required: true;
    };
    borderColor: {
        type: StringConstructor;
        default: string;
    };
}, {
    accordionItemCont: import("vue").Ref<HTMLDivElement | undefined>;
    isShow: import("vue").Ref<boolean>;
    curHeight: import("vue").Ref<number>;
    onClick: (e: MouseEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "on-click"[], "on-click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    label?: unknown;
    name?: unknown;
    borderColor?: unknown;
} & {
    name: string | number;
    label: string;
    borderColor: string;
} & {}> & {
    "onOn-click"?: ((...args: any[]) => any) | undefined;
}, {
    borderColor: string;
}>;
export default _default;
