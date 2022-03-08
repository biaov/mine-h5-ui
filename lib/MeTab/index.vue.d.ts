declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        required: true;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    activeColor: {
        type: StringConstructor;
        default: string;
    };
    lineColor: {
        type: StringConstructor;
        default: string;
    };
}, {
    tabsDom: import("vue").Ref<HTMLDivElement | undefined>;
    tabList: import("vue").Ref<{
        label: string;
        name: string | number;
    }[]>;
    transX: import("vue").Ref<number>;
    duration: import("vue").Ref<number>;
    initTranslateX: () => void;
    curIndex: import("vue").ComputedRef<number>;
    onClick: ({ name }: import("../MeTabItem/interfaces").LabelName) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "on-change")[], "update:modelValue" | "on-change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        required: true;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    activeColor: {
        type: StringConstructor;
        default: string;
    };
    lineColor: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onOn-change"?: ((...args: any[]) => any) | undefined;
}, {
    color: string;
    activeColor: string;
    lineColor: string;
}>;
export default _default;
